import { ref, computed } from 'vue';

export default function useDarkMode() {
    const darkModeEnabled = computed(() => {
        const htmlElement = document.querySelector('html');
        return htmlElement.getAttribute('data-theme') === 'dark';
    });

    const darkModePreference = () => {
        return localStorage.getItem('darkMode') === 'dark';
    };

    const darkModeStoredPreference = ref(darkModePreference());
    const toggleDarkMode = () => {
        const darkMode = darkModePreference() ? 'light' : 'dark';
        const htmlElement = document.querySelector('html');
        htmlElement.setAttribute('data-theme', darkMode);
        localStorage.setItem('darkMode', darkMode);

        darkModeStoredPreference.value = darkModePreference();
    };

    return {
        darkModeEnabled,
        darkModePreference,
        toggleDarkMode,
    };
}
