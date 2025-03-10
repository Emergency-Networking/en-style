<template>
    <component
        :is="componentType"
        :class="[styleClass]"
        :href="href"
        @click="onClicked"
        :as="props.as"
        :style="props.noWrap ? { whiteSpace: 'nowrap' } : null"
        :aria-label="props.label"
        :type="formButtonType">
        <span v-if="props.icon" :class="faIcon" :style="iconRight ? { order: 1 } : null" />
        <!-- It's encouraged to use the label prop instead of the slot whenever possible for auto-aria-label -->
        <slot
            ><template v-if="!hideLabel">{{ label }}</template></slot
        >
    </component>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import useButtonStyles from './use-button-styles';

const { getStyleClass, VARIANTS, INTENTS, ATTRIBUTES } = useButtonStyles();

const emit = defineEmits(['click']);
const props = defineProps({
    as: {
        type: String,
        default: 'button',
    },
    label: {
        type: String,
    },
    variant: {
        type: String,
    },
    intent: {
        type: String,
    },
    inertia: {
        type: Boolean,
        default: undefined,
    },
    href: {
        type: String,
    },
    linkPageButton: {
        type: Boolean,
        default: false,
    },
    icon: {
        type: String,
    },
    iconRight: {
        type: Boolean,
        default: false,
    },
    sizeMedium: {
        type: Boolean,
        default: false,
    },
    sizeSmall: {
        type: Boolean,
        default: false,
    },
    loadable: {
        type: Boolean,
        default: false,
    },
    isLoading: {
        type: Boolean,
        default: false,
    },
    isSuccess: {
        type: Boolean,
        default: false,
    },
    noWrap: {
        type: Boolean,
        default: false,
    },
    selected: {
        type: Boolean,
        default: false,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    toggleable: {
        type: Boolean,
        default: false,
    },
    autoHeight: {
        type: Boolean,
        default: false,
    },
    hideLabel: {
        type: Boolean,
        default: false,
    },
    type: {
        type: String,
    },
});

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
    return buttonAttributes;
});

const onClicked = () => {
    emit('click');
};

// Figures out whether or not to render an Inertia Link, a tag, or button.
const componentType = computed(() => {
    if (props.inertia || (props.inertia !== false && props.href)) {
        return 'Link';
    }
    return props.href ? 'a' : 'button';
});

const styleClass = computed(() => {
    if (props.linkPageButton) {
        let style = getStyleClass(VARIANTS.GHOST);
        style += ' w-full py-2 mb-2 is-justify-content-flex-start wrap';
        return style;
    }
    return getStyleClass(props.variant, props.intent, attributes.value);
});

const faIcon = computed(() => {
    if (props.icon) {
        const classes = [props.sizeSmall ? 'is-size-7' : 'is-size-6'];
        if (props.icon.startsWith('fa')) {
            classes.push(props.icon);
            if (props.icon.includes('fa-')) {
                classes.push('fas');
            }
        } else {
            classes.push('fas', 'fa-' + props.icon);
        }
        if (!props.hideLabel) {
            if (props.iconRight) {
                classes.push('ml-2');
            } else {
                classes.push('mr-2');
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
    // Default the type to "button" if it's not set to prevent auto-submitting buttons within forms
    if (props.intent && props.intent !== INTENTS.NEUTRAL) {
        return 'button';
    }
    return null;
});
</script>

<!-- TODO: Move this style out of here -->
<style lang="scss">
@import '../../sass/variables';
@keyframes spin {
    100% {
        transform: rotate(360deg);
    }
}
.button {
    font-weight: bold;
    font-size: 0.9rem;
    background-color: white;
    border-color: #dee2e5;
    border-width: 1px;
    border-radius: 0.4em;
    color: #375672;
    cursor: pointer;
    justify-content: center;
    padding-bottom: calc(0.5em - 1px);
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    padding-top: calc(0.5em - 1px);
    text-align: center;
    white-space: normal;
    line-height: 1.2;
    padding-top: 6px;
    min-height: $field-height;
    height: $field-height;

    align-items: center;
    border: 1px solid transparent;
    box-shadow: none;
    display: inline-flex;
    position: relative;
    vertical-align: top;

    &:hover,
    &:focus,
    &:active,
    &:focus-visible,
    &:focus-within {
        color: inherit;
    }

    &.btn-primary {
        background-color: $is-primary;
        border-color: transparent;
        color: white;

        &:hover {
            border-color: #0092ff;
            // box-shadow: inset 0 0 2px 1px #6ea3d0;
            background-color: $primary-highlight;
            color: white;
        }

        &.btn-danger {
            background-color: $is-danger;

            &:hover {
                border-color: $is-danger;
                background-color: #d62a2a;
            }
        }
        &.btn-cancel {
            background-color: $is-cancel;

            &:hover {
                border-color: $is-cancel;
                background-color: lighten($is-cancel, 10%);
            }
        }
        &.btn-warn {
            background-color: $is-warning;
            border-color: #c1930b;
            color: #333;

            &:hover {
                border-color: $is-warning;
                background-color: lighten($is-warning, 10%);
            }
        }

        &.selected {
            background-color: $selection-color;
            color: white;
            border-color: $selection-color;

            &:not(.toggleable) {
                pointer-events: none;
            }

            &.btn-danger {
                background-color: $is-danger;
                color: white;
            }
            &.btn-cancel {
                background-color: $is-cancel;
                color: white;
            }
            &.btn-warn {
                background-color: $is-warning;
                color: white;
            }
        }
    }
    &.btn-secondary {
        background-color: white;
        border-color: $is-primary;
        color: $is-primary;

        &:hover {
            background-color: $primary-highlight;
            border-color: $primary-highlight;
            color: white;
        }

        &.size-small {
            border-width: 1px;
        }
        &.btn-danger {
            border-color: $is-danger;
            color: $is-danger;

            &:hover {
                background-color: $is-danger;
                color: white;
            }
        }
        &.btn-cancel {
            border-color: $is-cancel;
            color: $is-cancel;

            &:hover {
                background-color: $is-cancel;
                color: white;
            }
        }
        &.btn-warn {
            border-color: $is-warning;
            color: $warning-dark;

            &:hover {
                background-color: $is-warning;
                color: #333;
            }
        }

        &.selected {
            background-color: $selection-color;
            color: white;
            border-color: $selection-color;

            &:not(.toggleable) {
                pointer-events: none;
            }

            &.btn-danger {
                background-color: $is-danger;
                color: white;
            }
            &.btn-cancel {
                background-color: $is-cancel;
                color: white;
            }
            &.btn-warn {
                background-color: $is-warning;
                color: white;
            }
        }
    }
    &.btn-tertiary {
        background-color: #035dad1f;
        border-color: transparent;
        color: $is-primary;

        &:hover {
            border-color: $primary-highlight;
            background-color: $primary-highlight;
            color: white;
        }
        &.btn-danger {
            color: $is-danger;
            background-color: #c841411f;

            &:hover {
                border-color: $is-danger;
                background-color: $is-danger;
                color: white;
            }
        }
        &.btn-cancel {
            color: $is-cancel;
            background-color: #62686f24;

            &:hover {
                border-color: $is-cancel;
                background-color: $is-cancel;
                color: white;
            }
        }
        &.btn-warn {
            color: $is-warning;
            background-color: #62686f24;

            &:hover {
                border-color: $is-warning;
                background-color: $is-warning;
                color: white;
            }
        }

        &.selected {
            background-color: $selection-color;
            color: white;
            border-color: $selection-color;

            &:not(.toggleable) {
                pointer-events: none;
            }

            &.btn-danger {
                background-color: $is-danger;
                color: white;
            }
            &.btn-cancel {
                background-color: $is-cancel;
                color: white;
            }
            &.btn-warn {
                background-color: $is-warning;
                color: white;
            }
        }
    }
    &.btn-ghost {
        color: #444c52;
        border-color: #c7cdd1;
        background-color: transparent;

        &:hover {
            background-color: white;
            border-color: $primary-highlight;
            color: $primary-highlight;
        }
        &.btn-danger {
            &:hover {
                border-color: $is-danger;
                background-color: $is-danger;
                color: white;
            }
        }
        &.btn-cancel {
            &:hover {
                border-color: $is-cancel;
                background-color: $is-cancel;
                color: white;
            }
        }
        &.btn-warn {
            &:hover {
                border-color: $is-warning;
                background-color: $is-warning;
                color: white;
            }
        }

        &.selected {
            background-color: $selection-color;
            color: white;
            border-color: $selection-color;

            &:not(.toggleable) {
                pointer-events: none;
            }

            &.btn-danger {
                background-color: $is-danger;
                color: white;
            }
            &.btn-cancel {
                background-color: $is-cancel;
                color: white;
            }
            &.btn-warn {
                background-color: $is-warning;
                color: white;
            }
        }
    }
    &.btn-text {
        border-color: transparent;
        background-color: transparent;

        &:hover {
            border-color: $primary-highlight;
            color: $primary-highlight;
        }
        &.btn-danger {
            color: $is-danger;
            &:hover {
                border-color: $is-danger;
                color: $is-danger;
            }
        }
        &.btn-cancel {
            color: $is-cancel;
            &:hover {
                border-color: $is-cancel;
                color: $is-cancel;
            }
        }
        &.btn-warn {
            color: $is-warning;
            &:hover {
                border-color: $is-warning;
                color: $is-warning;
            }
        }
    }
    &.btn-link {
        font-size: 0.85rem;
        border-color: transparent;
        padding: 0 0.5rem;

        &:hover {
            background-color: #035dad1f;
            color: $primary-highlight;
        }

        &.btn-danger {
            color: $is-danger;
            &:hover {
                background-color: #c841411f;
                color: $is-danger;
            }
        }
        &.btn-cancel {
            color: $is-cancel;
            &:hover {
                background-color: #62686f24;
                color: $is-cancel;
            }
        }
        &.btn-warn {
            color: $is-warning;
            &:hover {
                background-color: #ff840024;
                color: $is-warning;
            }
        }
    }

    &.is-underlined {
    }
    &.with-icon {
    }
    &.size-medium {
        font-size: 1.03rem;
    }
    &.size-small {
        height: 1.9rem;
        min-height: 1.9rem;
        font-size: 0.75rem;
        font-weight: normal;
        line-height: 1;
    }
    &.loadable {
        &::before,
        &::after {
            content: '';
            width: 0.75rem;
        }

        &.loading,
        &.success {
            &::after {
                display: none;
            }
        }
    }
    &.loading {
        pointer-events: none;

        &::before {
            animation: spin 500ms linear infinite;
            border: 2px solid #dee2e5;
            border-radius: 9999px;
            border-right-color: transparent;
            border-top-color: transparent;
            content: '';
            display: block;
            height: 1rem;
            position: relative;
            width: 1rem;
            margin-right: 0.5rem;
        }
    }
    &.success {
        &::before {
            content: '✔';
            width: 1rem;
            margin-right: 0.5rem;
        }
    }
    &.disabled {
        cursor: not-allowed;
        pointer-events: none;
        opacity: 0.5;
    }
    &.auto-height {
        height: inherit;
    }
}
</style>
