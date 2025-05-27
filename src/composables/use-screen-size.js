import { ref } from 'vue';

export default function useScreenSize() {
    const MOBILE_SMALL = 'mobileS';
    const MOBILE_MEDIUM = 'mobileM';
    const MOBILE_LARGE = 'mobileL';
    const TABLET = 'tablet';
    const DESKTOP = 'desktop';
    const DESKTOP_XL = 'desktopXL';

    const SCREEN_WIDTHS = {
        [MOBILE_SMALL]: 361,
        [MOBILE_MEDIUM]: 400,
        [MOBILE_LARGE]: 768,
        [TABLET]: 1024,
        [DESKTOP]: 1280,
        [DESKTOP_XL]: 1400,
    };

    const screenSize = ref(null);
    const updateBreakpoint = () => {
        if (window.matchMedia(`(max-width: ${SCREEN_WIDTHS[MOBILE_SMALL]}px)`).matches) {
            screenSize.value = MOBILE_SMALL;
            return;
        }
        if (window.matchMedia(`(max-width: ${SCREEN_WIDTHS[MOBILE_MEDIUM]}px)`).matches) {
            screenSize.value = MOBILE_SMALL;
            return;
        }
        if (window.matchMedia(`(max-width: ${SCREEN_WIDTHS[MOBILE_LARGE]}px)`).matches) {
            screenSize.value = MOBILE_MEDIUM;
            return;
        }
        if (window.matchMedia(`(max-width: ${SCREEN_WIDTHS[TABLET]}px)`).matches) {
            screenSize.value = MOBILE_LARGE;
            return;
        }
        if (window.matchMedia(`(max-width: ${SCREEN_WIDTHS[DESKTOP]}px)`).matches) {
            screenSize.value = TABLET;
            return;
        }
        if (window.matchMedia(`(max-width: ${SCREEN_WIDTHS[DESKTOP_XL]}px)`).matches) {
            screenSize.value = DESKTOP;
            return;
        }
        screenSize.value = DESKTOP_XL;
    };

    updateBreakpoint();

    const monitorResize = monitor => {
        if (monitor) {
            window.addEventListener('resize', updateBreakpoint);
        } else {
            window.removeEventListener('resize', updateBreakpoint);
        }
    };

    const minScreenSize = size => {
        const sizes = Object.keys(SCREEN_WIDTHS);
        const targetSize = sizes.indexOf(size);
        for (let i = 0; i < sizes.length; i++) {
            if (i >= targetSize) {
                if (sizes[i] === screenSize.value) {
                    return true;
                }
            }
        }
        return false;
    };

    const maxScreenSize = size => {
        const sizes = Object.keys(SCREEN_WIDTHS);
        const targetSize = sizes.indexOf(size);
        for (let i = 0; i < sizes.length; i++) {
            if (i >= targetSize) {
                return false;
            }
            if (sizes[i] === screenSize.value) {
                return true;
            }
        }
        return false;
    };

    return {
        MOBILE_SMALL,
        MOBILE_MEDIUM,
        MOBILE_LARGE,
        TABLET,
        DESKTOP,
        DESKTOP_XL,
        SCREEN_WIDTHS,
        screenSize,
        minScreenSize,
        maxScreenSize,
        monitorResize,
        updateBreakpoint,
    };
}
