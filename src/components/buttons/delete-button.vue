<template>
    <button :class="['delete-button delete', attributes]" @click="onClicked"><span class="hit-area"></span></button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    sizeMedium: {
        type: Boolean,
        default: false,
    },
    autoHide: {
        type: Boolean,
        default: false,
    },
    show: {
        type: Boolean,
        default: false,
    },
    alignRight: {
        type: Boolean,
        default: false,
    },
    absoluteRight: {
        type: Boolean,
        default: false,
    },
});
const emit = defineEmits(['click']);
const onClicked = () => {
    emit('click');
};

const attributes = computed(() => {
    let classes = '';
    if (props.sizeMedium) {
        classes += ' size-medium';
    }
    if (props.autoHide) {
        classes += ' auto-hide';
    }
    if (props.show) {
        classes += ' show';
    }
    if (props.alignRight) {
        classes += ' ml-auto';
    }
    if (props.absoluteRight) {
        classes += ' absolute-right';
    }
    return classes;
});
</script>
