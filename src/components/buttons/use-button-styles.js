// Emphasis / action importance
const VARIANT_PRIMARY = "primary"; // Should be used only for the primary action in the container or view.
const VARIANT_SECONDARY = "secondary"; // Default
const VARIANT_TERTIARY = "tertiary";
const VARIANT_GHOST = "ghost"; // Similar to the secondary button, but with a transparent background.
const VARIANT_TEXT = "text"; // A text button, with padding around it.
const VARIANT_LINK = "link"; // An inline text button
const VARIANT_ICON = "icon";

// Intent
const INTENT_NEUTRAL = "neutral"; // For most button cases, will be default
const INTENT_DELETE = "delete"; // For delete, remove, etc
const INTENT_CANCEL = "cancel"; // For cancel, back, etc
const INTENT_WARN = "warn"; // For warning

// Attributes
const WITH_ICON = "with-icon"; // Require an icon to be defined
const SIZE_MEDIUM = "size-medium"; // Will render at medium size
const SIZE_SMALL = "size-small"; // Will render at small size (for buttons in a table, etc.)
const LOADABLE = "is-loadable"; // Provides extra padding for a loading spinner and success check
const LOADING = "is-loading";
const SUCCESS = "is-success";

export default function useButtonStyles() {
  const VARIANTS = {
    PRIMARY: VARIANT_PRIMARY,
    SECONDARY: VARIANT_SECONDARY,
    TERTIARY: VARIANT_TERTIARY,
    GHOST: VARIANT_GHOST,
    TEXT: VARIANT_TEXT,
    LINK: VARIANT_LINK,
    ICON: VARIANT_ICON,
  };
  const INTENTS = {
    NEUTRAL: INTENT_NEUTRAL,
    DELETE: INTENT_DELETE,
    CANCEL: INTENT_CANCEL,
    WARN: INTENT_WARN,
  };
  const ATTRIBUTES = {
    WITH_ICON: WITH_ICON,
    SIZE_MEDIUM: SIZE_MEDIUM,
    SIZE_SMALL: SIZE_SMALL,
    LOADABLE: LOADABLE,
    LOADING: LOADING,
    SUCCESS: SUCCESS,
  };

  const getStyleClass = (variant, intent, attributes) => {
    if (variant) {
      const variantValues = Object.values(VARIANTS);
      if (!variantValues.includes(variant)) {
        console.error(
          `Invalid button variant: "${variant}". Remove or use one of these: ${variantValues}`,
        );
      }
    }
    let style = "";

    // For cancel & delete, default the button variant to secondary if we haven't provided it.
    if (!variant && intent !== INTENTS.NEUTRAL) {
      variant = VARIANTS.SECONDARY;
    }

    if (variant !== VARIANTS.ICON) {
      style += "button ";
    }

    switch (variant) {
      case VARIANTS.PRIMARY:
        style += "btn-primary";
        break;

      case VARIANTS.SECONDARY:
        style += "btn-secondary";
        break;

      case VARIANTS.TERTIARY:
        style += "btn-tertiary";
        break;

      case VARIANTS.GHOST:
        style += "btn-ghost";
        break;

      case VARIANTS.LINK:
        style += "btn-link is-underlined";
        break;

      case VARIANTS.TEXT:
        style += "btn-text";
        break;
      default:
        break;
    }

    switch (intent) {
      case INTENTS.DELETE:
        style += " btn-danger";
        break;

      case INTENTS.CANCEL:
        style += " btn-cancel";
        break;

      case INTENTS.WARN:
        style += " btn-warn";
        break;

      default:
        break;
    }

    if (attributes) {
      for (const attribute of attributes) {
        switch (attribute) {
          case ATTRIBUTES.WITH_ICON:
            style += " with-icon";
            break;

          case ATTRIBUTES.SIZE_MEDIUM:
            style += " size-medium";
            break;

          case ATTRIBUTES.SIZE_SMALL:
            style += " size-small";
            break;

          case ATTRIBUTES.LOADABLE:
            style += " loadable";
            break;

          case ATTRIBUTES.LOADING:
            style += " loading";
            break;

          case ATTRIBUTES.SUCCESS:
            style += " success";
            break;

          default:
            break;
        }
      }
    }

    return style;
  };

  return {
    getStyleClass,
    VARIANTS,
    INTENTS,
    ATTRIBUTES,
  };
}
