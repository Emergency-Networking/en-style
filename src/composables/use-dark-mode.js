import { ref, computed } from 'vue';

export default function useDarkMode() {
    const getIsPageDark = () => {
        const htmlElement = document.querySelector('html');
        return htmlElement.getAttribute('data-theme') === 'dark';
    };
    const darkModeEnabled = ref(getIsPageDark());

    const darkModePreference = () => {
        return localStorage.getItem('darkMode') === 'dark';
    };

    const darkModeStoredPreference = ref(darkModePreference());
    const toggleDarkMode = () => {
        const isDark = darkModePreference();
        const darkMode = isDark ? 'light' : 'dark';
        const htmlElement = document.querySelector('html');
        htmlElement.setAttribute('data-theme', darkMode);
        localStorage.setItem('darkMode', darkMode);

        darkModeStoredPreference.value = isDark;
        darkModeEnabled.value = isDark;
    };

    return {
        darkModeEnabled,
        darkModePreference,
        toggleDarkMode,
    };
}
