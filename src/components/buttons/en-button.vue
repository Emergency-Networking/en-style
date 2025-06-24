<template>
    <component
        :key="clickKey"
        :is="componentType"
        :class="[styleClass]"
        :href="href"
        @click="onClicked"
        :as="props.as"
        :aria-label="props.label"
        :type="formButtonType"
        :target="props.target"
        v-bind="$attrs">
        <span v-if="props.icon" :class="faIcon" :style="iconRight ? { order: 1 } : null" />
        <!-- It's encouraged to use the label prop instead of the slot whenever possible for auto-aria-label -->
        <slot>
            <template v-if="!hideLabel">{{ label }}</template>
        </slot>
        <div v-if="hasHitArea" class="hit-area"></div>
    </component>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue';
import useButtonStyles from '../../composables/use-button-styles';

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
    highlighted: {
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
    target: {
        type: String,
    },
    hasHitArea: {
        type: Boolean,
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
    if (props.highlighted) {
        buttonAttributes.push(ATTRIBUTES.HIGHLIGHTED);
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

let clickTimeout = null;
const clickKey = ref(null);

onMounted(() => {
    if (window.mobile) {
        clickKey.value = Math.random().toString(36).slice(2);
    }
});

const onClicked = event => {
    emit('click', event);

    if (window.mobile) {
        clearTimeout(clickTimeout);
        clickTimeout = setTimeout(() => {
            clickKey.value = Math.random().toString(36).slice(2);
        }, 200);
    }
};

onUnmounted(() => {
    if (window.mobile) {
        clearTimeout(clickTimeout);
    }
});

// Figures out whether or not to render an Inertia Link, a tag, or button.
const componentType = computed(() => {
    if (props.inertia || (props.inertia !== false && props.href)) {
        if (!props.target) {
            return 'Link';
        }
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
