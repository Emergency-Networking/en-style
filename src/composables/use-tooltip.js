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
        destroyTooltip();
        originalParent = content?.parentNode || content?.$el?.parentNode;
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
    const getTooltipInstance = () => {
        if (!tooltipInstance) {
            return null;
        }
        return tooltipInstance instanceof Array ? tooltipInstance[0] : tooltipInstance;
    };
    const showTooltip = () => {
        const tt = getTooltipInstance();
        if (tt) {
            tt.show();
        }
    };
    const hideTooltip = () => {
        const tt = getTooltipInstance();
        if (tt) {
            tt.hide();
        }
    };
    const destroyTooltip = () => {
        const tt = getTooltipInstance();
        if (tt) {
            tt.destroy();
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
