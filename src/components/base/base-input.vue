<template>
    <input :type="props.type" :value="props.modelValue" v-bind="$attrs" @input="onInput" @keyup="onKeyUp" ref="el" />
</template>

<script setup>
import { onMounted, ref } from 'vue';

defineOptions({
    name: 'BaseInput',
});

const props = defineProps({
    type: {
        type: String,
        default: 'text',
    },
    modelValue: {
        type: [String, Number],
        default: '',
    },
    flatPickerSettings: {
        type: Object,
        default: null,
    },
});

const emit = defineEmits(['update:modelValue', 'keyup']);
const el = ref(null);

function onInput(event) {
    emit('update:modelValue', event.target.value);
}

function onKeyUp(event) {
    emit('keyup', event);
}

onMounted(() => {
    if (props.flatPickerSettings) {
        flatpickr(el.value, props.flatPickerSettings);
    }
});
</script>
