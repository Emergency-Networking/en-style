<template>
    <component :is="componentType" :class="['button', styleClass]" :href="href" @click="onClicked" :emphasis="emphasisLevel"
        ><slot>{{ defaultLabel }}</slot></component
    >
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import useButtonStyles from './use-button-styles';

const { getEmphasisLevel, getStyleClass, VARIANTS } = useButtonStyles();

const emit = defineEmits(['click']);
const props = defineProps({
    variant: {
        type: String,
    },
    inertia: {
        type: Boolean,
        default: false,
    },
    href: {
        type: String,
    },
    level: {
        type: [String, Number],
    },
    linkPageButton: {
        type: Boolean,
        default: false,
    },
});

const onClicked = () => {
    emit('click');
};

const defaultLabel = computed(() => {
    switch (props.variant) {
        case VARIANTS.SAVE:
            return 'Save';
        case VARIANTS.DELETE:
            return 'Delete';
        case VARIANTS.NEW:
            return 'New';
        case VARIANTS.EDIT:
            return 'Edit';
        case VARIANTS.CONTINUE:
            return 'Continue';
        case VARIANTS.CANCEL:
            return 'Cancel';
        default:
            return 'Submit';
    }
});

// Figures out whether or not to render an Inertia Link, a tag, or button.
const componentType = computed(() => {
    if (props.inertia) {
        return 'Link';
    }
    return props.href ? 'a' : 'button';
});

const emphasisLevel = computed(() => {
    return getEmphasisLevel(props.level, props.variant);
});

const styleClass = computed(() => {
    if (props.linkPageButton) {
        let style = getStyleClass(VARIANTS.UTILITY, 2);
        style += ' w-full py-2 mb-2 is-justify-content-flex-start wrap';
        return style;
    }
    return getStyleClass(props.variant, emphasisLevel.value);
});
</script>
