import { ref, computed } from "vue";
const VARIANT_PRIMARY = "primary";
const VARIANT_SECONDARY = "secondary";
const VARIANT_TERTIARY = "tertiary";
const VARIANT_GHOST = "ghost";
const VARIANT_TEXT = "text";
const VARIANT_LINK = "link";
const VARIANT_ICON = "icon";
const INTENT_NEUTRAL = "neutral";
const INTENT_DELETE = "delete";
const INTENT_CANCEL = "cancel";
const INTENT_WARN = "warn";
const WITH_ICON = "with-icon";
const SIZE_MEDIUM = "size-medium";
const SIZE_SMALL = "size-small";
const LOADABLE = "is-loadable";
const LOADING = "is-loading";
const SUCCESS = "is-success";
const SELECTED = "selected";
const DISABLED = "disabled";
const TOGGLEABLE = "toggleable";
const AUTO_HEIGHT = "autoHeight";
const HIDE_LABEL = "hideLabel";
const NO_WRAP = "noWrap";
function useButtonStyles() {
  const VARIANTS = {
    PRIMARY: VARIANT_PRIMARY,
    SECONDARY: VARIANT_SECONDARY,
    TERTIARY: VARIANT_TERTIARY,
    GHOST: VARIANT_GHOST,
    TEXT: VARIANT_TEXT,
    LINK: VARIANT_LINK,
    ICON: VARIANT_ICON
  };
  const INTENTS = {
    NEUTRAL: INTENT_NEUTRAL,
    DELETE: INTENT_DELETE,
    CANCEL: INTENT_CANCEL,
    WARN: INTENT_WARN
  };
  const ATTRIBUTES = {
    WITH_ICON,
    SIZE_MEDIUM,
    SIZE_SMALL,
    LOADABLE,
    LOADING,
    SUCCESS,
    SELECTED,
    DISABLED,
    TOGGLEABLE,
    AUTO_HEIGHT,
    HIDE_LABEL,
    NO_WRAP
  };
  const getStyleClass = (variant, intent, attributes) => {
    if (variant) {
      const variantValues = Object.values(VARIANTS);
      if (!variantValues.includes(variant)) {
        console.error(`Invalid button variant: "${variant}". Remove or use one of these: ${variantValues}`);
      }
    }
    let style = "";
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
          case ATTRIBUTES.SELECTED:
            style += " selected";
            break;
          case ATTRIBUTES.DISABLED:
            style += " disabled";
            break;
          case ATTRIBUTES.TOGGLEABLE:
            style += " toggleable";
            break;
          case ATTRIBUTES.AUTO_HEIGHT:
            style += " auto-height";
            break;
          case ATTRIBUTES.HIDE_LABEL:
            style += " hide-label";
            break;
          case ATTRIBUTES.NO_WRAP:
            style += " no-wrap";
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
    ATTRIBUTES
  };
}
function useScreenSize() {
  const MOBILE_SMALL = "mobileS";
  const MOBILE_MEDIUM = "mobileM";
  const MOBILE_LARGE = "mobileL";
  const TABLET = "tablet";
  const DESKTOP = "desktop";
  const DESKTOP_XL = "desktopXL";
  const SCREEN_WIDTHS = {
    [MOBILE_SMALL]: 361,
    [MOBILE_MEDIUM]: 400,
    [MOBILE_LARGE]: 768,
    [TABLET]: 1024,
    [DESKTOP]: 1280,
    [DESKTOP_XL]: 1400
  };
  const screenSize = ref(null);
  const updateBreakpoint = () => {
    if (window.matchMedia(`(max-width: ${SCREEN_WIDTHS[MOBILE_SMALL]}px)`).matches) {
      screenSize.value = MOBILE_SMALL;
      return;
    }
    if (window.matchMedia(`(max-width: ${SCREEN_WIDTHS[MOBILE_MEDIUM]}px)`).matches) {
      screenSize.value = MOBILE_MEDIUM;
      return;
    }
    if (window.matchMedia(`(max-width: ${SCREEN_WIDTHS[MOBILE_LARGE]}px)`).matches) {
      screenSize.value = MOBILE_LARGE;
      return;
    }
    if (window.matchMedia(`(max-width: ${SCREEN_WIDTHS[TABLET]}px)`).matches) {
      screenSize.value = TABLET;
      return;
    }
    if (window.matchMedia(`(max-width: ${SCREEN_WIDTHS[DESKTOP]}px)`).matches) {
      screenSize.value = DESKTOP;
      return;
    }
    screenSize.value = DESKTOP_XL;
  };
  updateBreakpoint();
  const monitorResize = (monitor) => {
    if (monitor) {
      window.addEventListener("resize", updateBreakpoint);
    } else {
      window.removeEventListener("resize", updateBreakpoint);
    }
  };
  const minScreenSize = (size) => {
    const sizes = Object.keys(SCREEN_WIDTHS);
    const targetSize = sizes.indexOf(size);
    for (let i = 0; i < sizes.length; i++) {
      if (i < targetSize) {
        if (sizes[i] === screenSize.value) {
          return true;
        }
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
    monitorResize,
    updateBreakpoint
  };
}
function normalizeComponent(scriptExports, render3, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
  var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
  if (render3) {
    options.render = render3;
    options.staticRenderFns = staticRenderFns;
    options._compiled = true;
  }
  return {
    exports: scriptExports,
    options
  };
}
const _sfc_main$1 = {
  __name: "en-button",
  props: {
    as: {
      type: String,
      default: "button"
    },
    label: {
      type: String
    },
    variant: {
      type: String
    },
    intent: {
      type: String
    },
    inertia: {
      type: Boolean,
      default: void 0
    },
    href: {
      type: String
    },
    linkPageButton: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String
    },
    iconRight: {
      type: Boolean,
      default: false
    },
    sizeMedium: {
      type: Boolean,
      default: false
    },
    sizeSmall: {
      type: Boolean,
      default: false
    },
    loadable: {
      type: Boolean,
      default: false
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    isSuccess: {
      type: Boolean,
      default: false
    },
    noWrap: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    toggleable: {
      type: Boolean,
      default: false
    },
    autoHeight: {
      type: Boolean,
      default: false
    },
    hideLabel: {
      type: Boolean,
      default: false
    },
    type: {
      type: String
    },
    target: {
      type: String
    }
  },
  emits: ["click"],
  setup(__props, { emit }) {
    const props = __props;
    const { getStyleClass, VARIANTS, INTENTS, ATTRIBUTES } = useButtonStyles();
    const attributes = computed(() => {
      const buttonAttributes = [];
      if (props.icon) {
        buttonAttributes.push(ATTRIBUTES.WITH_ICON);
      }
      if (props.sizeMedium) {
        buttonAttributes.push(ATTRIBUTES.SIZE_MEDIUM);
      } else if (props.sizeSmall) {
        buttonAttributes.push(ATTRIBUTES.SIZE_SMALL);
      }
      if (props.loadable) {
        buttonAttributes.push(ATTRIBUTES.LOADABLE);
      }
      if (props.isLoading) {
        buttonAttributes.push(ATTRIBUTES.LOADING);
      }
      if (props.isSuccess) {
        buttonAttributes.push(ATTRIBUTES.SUCCESS);
      }
      if (props.selected) {
        buttonAttributes.push(ATTRIBUTES.SELECTED);
      }
      if (props.disabled) {
        buttonAttributes.push(ATTRIBUTES.DISABLED);
      }
      if (props.toggleable) {
        buttonAttributes.push(ATTRIBUTES.TOGGLEABLE);
      }
      if (props.autoHeight) {
        buttonAttributes.push(ATTRIBUTES.AUTO_HEIGHT);
      }
      if (props.hideLabel) {
        buttonAttributes.push(ATTRIBUTES.HIDE_LABEL);
      }
      if (props.noWrap) {
        buttonAttributes.push(ATTRIBUTES.NO_WRAP);
      }
      return buttonAttributes;
    });
    const onClicked = () => {
      emit("click");
    };
    const componentType = computed(() => {
      if (props.inertia || props.inertia !== false && props.href) {
        if (!props.target) {
          return "Link";
        }
      }
      return props.href ? "a" : "button";
    });
    const styleClass = computed(() => {
      if (props.linkPageButton) {
        let style = getStyleClass(VARIANTS.GHOST);
        style += " w-full py-2 mb-2 is-justify-content-flex-start wrap";
        return style;
      }
      return getStyleClass(props.variant, props.intent, attributes.value);
    });
    const faIcon = computed(() => {
      if (props.icon) {
        const classes = [props.sizeSmall ? "is-size-7" : "is-size-6"];
        if (props.icon.startsWith("fa")) {
          classes.push(props.icon);
          if (props.icon.includes("fa-")) {
            classes.push("fas");
          }
        } else {
          classes.push("fas", "fa-" + props.icon);
        }
        if (!props.hideLabel) {
          if (props.iconRight) {
            classes.push("ml-2");
          } else {
            classes.push("mr-2");
          }
        }
        return classes;
      }
      return null;
    });
    const formButtonType = computed(() => {
      if (props.type) {
        return props.type;
      }
      if (props.intent && props.intent !== INTENTS.NEUTRAL) {
        return "button";
      }
      return null;
    });
    return { __sfc: true, getStyleClass, VARIANTS, INTENTS, ATTRIBUTES, emit, props, attributes, onClicked, componentType, styleClass, faIcon, formButtonType };
  }
};
var _sfc_render$1 = function render() {
  var _vm = this, _c = _vm._self._c, _setup = _vm._self._setupProxy;
  return _c(_setup.componentType, { tag: "component", class: [_setup.styleClass], attrs: { "href": _vm.href, "as": _setup.props.as, "aria-label": _setup.props.label, "type": _setup.formButtonType, "target": _setup.props.target }, on: { "click": _setup.onClicked } }, [_setup.props.icon ? _c("span", { class: _setup.faIcon, style: _vm.iconRight ? { order: 1 } : null }) : _vm._e(), _vm._t("default", function() {
    return [!_vm.hideLabel ? [_vm._v(_vm._s(_vm.label))] : _vm._e()];
  })], 2);
};
var _sfc_staticRenderFns$1 = [];
var __component__$1 = /* @__PURE__ */ normalizeComponent(
  _sfc_main$1,
  _sfc_render$1,
  _sfc_staticRenderFns$1
);
const enButton = __component__$1.exports;
const _sfc_main = {
  __name: "delete-button",
  props: {
    sizeMedium: {
      type: Boolean,
      default: false
    },
    autoHide: {
      type: Boolean,
      default: false
    },
    show: {
      type: Boolean,
      default: false
    },
    alignRight: {
      type: Boolean,
      default: false
    },
    absoluteRight: {
      type: Boolean,
      default: false
    }
  },
  emits: ["click"],
  setup(__props, { emit }) {
    const props = __props;
    const onClicked = () => {
      emit("click");
    };
    const attributes = computed(() => {
      let classes = "";
      if (props.sizeMedium) {
        classes += " size-medium";
      }
      if (props.autoHide) {
        classes += " auto-hide";
      }
      if (props.show) {
        classes += " show";
      }
      if (props.alignRight) {
        classes += " ml-auto";
      }
      if (props.absoluteRight) {
        classes += " absolute-right";
      }
      return classes;
    });
    return { __sfc: true, props, emit, onClicked, attributes };
  }
};
var _sfc_render = function render2() {
  var _vm = this, _c = _vm._self._c, _setup = _vm._self._setupProxy;
  return _c("button", { class: ["delete-button delete", _setup.attributes], on: { "click": _setup.onClicked } });
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ normalizeComponent(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns
);
const deleteButton = __component__.exports;
export {
  deleteButton as DeleteButton,
  enButton as EnButton,
  useButtonStyles,
  useScreenSize
};
