import tippy from 'tippy.js';
import { hideAll } from 'tippy.js';

export default function useTooltip() {
    const MENU_DEFAULT = {
        allowHTML: true,
        arrow: true,
        interactive: true,
        trigger: 'mouseenter click',
        theme: 'context-menu',
        placement: 'left',
    };
    let tooltipInstance;
    let originalParent = null;
    const setupTooltip = (targetElement, content, config, onShowCallback = null, onHideCallback = null, autoDestroy = false) => {
        if (tooltipInstance) {
            tooltipInstance.destroy();
            tooltipInstance = null;
        }
        originalParent = content?.parentNode || content.$el?.parentNode;
        tooltipInstance = tippy(targetElement, {
            content,
            ...config,
            onShow(instance) {
                if (onShowCallback) {
                    onShowCallback(instance);
                }
            },
            onHide(instance) {
                if (onHideCallback) {
                    onHideCallback(instance);
                }
            },
            onHidden(instance) {
                if (autoDestroy) {
                    instance.destroy();
                }
            },
            onDestroy() {
                // Restore content back to its original position
                if (originalParent && content) {
                    originalParent.appendChild(content);
                }
            },
        });
        return tooltipInstance;
    };
    const showTooltip = () => {
        if (tooltipInstance) {
            tooltipInstance.show();
        }
    };
    const hideTooltip = () => {
        if (tooltipInstance) {
            tooltipInstance.hide();
        }
    };
    const destroyTooltip = () => {
        if (tooltipInstance) {
            tooltipInstance.destroy();
            tooltipInstance = null;
        }
    };
    return {
        tooltipInstance,
        setupTooltip,
        destroyTooltip,
        hideAll,
        MENU_DEFAULT,
        hideTooltip,
        showTooltip,
    };
}
