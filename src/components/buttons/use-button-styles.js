// By function
const SAVE = 'save';
const DELETE = 'delete';
const NEW = 'new';
const EDIT = 'edit';
const CONTINUE = 'continue';
const CANCEL = 'cancel';
const UTILITY = 'utility';
const DEFAULT = 'default';

// Emphasis / action importance
const PRIMARY = 'primary';
const SECONDARY = 'secondary';
const TERTIARY = 'tertiary';

export default function useButtonStyles() {
    const VARIANTS = { SAVE, DELETE, NEW, EDIT, CONTINUE, CANCEL, UTILITY, DEFAULT };
    const EMPHASIS_LEVELS = { PRIMARY, SECONDARY, TERTIARY };

    const getEmphasisLevel = (level, variant) => {
        switch (level) {
            case PRIMARY:
            case 1:
                return 1;
            case SECONDARY:
            case 2:
                return 2;
            case TERTIARY:
            case 3:
                return 3;
            default:
                break;
        }
        // No level was passed in. Check the variant
        switch (variant) {
            case SAVE:
            case DELETE:
            case NEW:
            case EDIT:
                return 1;
            case CONTINUE:
            case CANCEL:
                return 2;
            default:
                return 1;
        }
    };

    const getStyleClass = (variant, level) => {
        if (variant) {
            const variantValues = Object.values(VARIANTS);
            if (!variantValues.includes(variant)) {
                console.error(`Invalid button variant: "${variant}". Remove or use one of these: ${variantValues}`);
            }
        }
        let style = '';
        switch (variant) {
            case SAVE:
            case NEW:
                style += 'is-primary';
                break;
            case DELETE:
                style += 'is-danger';
                break;
            case EDIT:
                style += 'is-info';
                if (!level || parseInt(level) < 3) {
                    return style;
                }
                break;
            case CONTINUE:
                style += 'is-link';
                break;
            case CANCEL:
                // case UTILITY:
                style += 'is-light';
                break;
            default:
                break;
        }
        switch (level) {
            case 1:
            case '1':
                style += '';
                break;
            case 2:
            case '2':
                style += ' is-outlined';
                break;
            case 3:
            case '3':
                style += ' is-text';
                break;
            case 4:
            case '4':
                style += ' is-text';
                break;
            default:
                break;
        }
        return style;
    };

    return {
        getEmphasisLevel,
        getStyleClass,
        VARIANTS,
        EMPHASIS_LEVELS,
    };
}
