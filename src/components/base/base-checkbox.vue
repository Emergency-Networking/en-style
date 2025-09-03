<template>
    <BaseField :label="label" :error="error" :class="['base-check', { 'check-row is-flex': asRow, 'check-row is-flex row-reverse': asRowReverse }]">
        <template #control>
            <label :class="['checkbox', { 'mb-0': asRow }]">
                <input :id="labelId" :true-value="1" :false-value="0" v-model="localModel" type="checkbox" />
            </label>
        </template>
    </BaseField>
</template>

<script setup>
import { camelCase } from 'lodash';
import { computed } from 'vue';
const props = defineProps({
    modelValue: {
        type: [Number, Boolean],
        default: null,
    },
    label: {
        type: String,
        default: '',
    },
    error: {
        type: String,
        default: '',
    },
    asRow: {
        type: Boolean,
        default: false,
    },
    asRowReverse: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(['update:modelValue']);
const localModel = computed({
    get() {
        return props.modelValue;
    },
    set(value) {
        emit('update:modelValue', value);
    },
});
const labelId = computed(() => (props.label && props.label !== '' ? camelCase(props.label) : null));
</script>
<style lang="scss">
.base-check {
    .label {
        cursor: pointer !important;
    }
}
.check-row {
    .label {
        margin-bottom: 0 !important;
    }
    .control {
        order: -1;
        margin: 0.15rem 0.5rem 0 0;
        .checkbox {
            margin-top: 0.2rem;
        }
    }

    &.row-reverse {
        .control {
            order: 1;
            margin: 0.15rem 0 0 0.5rem;
        }
    }
}
</style>
