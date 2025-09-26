import { ref } from 'vue';
import Vue3Toastify, { toast } from 'vue3-toastify';
import useDarkMode from './use-dark-mode.js';

let installed = false;

export default function useToastNotifications() {
    const installToastNotifications = app => {
        app.use(Vue3Toastify, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            dangerouslyHTMLString: true,
            transition: 'slide',
        });
        installed = true;
    };

    const notify = ({ title, message, type, options } = {}) => {
        if (!installed) {
            console.error('Toast notifications not installed. Please call installToastNotifications first.');
            return;
        }

        let content = '<div class="toast-content">';
        if (title) {
            content += `<strong>${title}</strong>`;
        }
        if (message) {
            content += `<p>${message}</p>`;
        }
        content += '</div>';

        const { darkModeEnabled } = useDarkMode();
        const darkMode = darkModeEnabled.value;

        return toast(content, {
            theme: darkMode ? 'dark' : 'light',
            ...options,
            type: type || 'default', // default, success, error, info, warning
        });
    };

    return {
        installToastNotifications,
        installed,
        notify,
    };
}
