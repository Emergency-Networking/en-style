<script setup>
import { onMounted, ref } from 'vue';

const props = defineProps({
    type: {
        type: String,
        default: 'text',
    },
    value: {
        type: [String, Number],
        default: '',
    },
    flatPickerSettings: {
        type: Object,
        default: null,
    },
});

const emit = defineEmits(['input', 'keyup']);
const el = ref(null);

function onInput(event) {
    emit('input', event.target.value);
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

<template>
<input class="" :type="props.type" :value="props.value" v-bind="$attrs" @input="onInput" @keyup="onKeyUp" ref="el" />
</template>