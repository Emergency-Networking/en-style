<template>
    <BaseField :class="['base-check', { 'check-row is-flex': asRow, 'check-row is-flex row-reverse': asRowReverse }]"
               :disabled="disabled"
               :error="error"
               :label="label">
        <template #control>
            <label :class="['checkbox', { 'mb-0 mr-1': asRow }]">
                <input :id="labelId"
                       v-model="localModel"
                       :disabled="disabled"
                       :false-value="falseValue"
                       :true-value="trueValue"
                       :value="trueValue"
                       type="checkbox"/>
            </label>
        </template>
        <template #help>
            <slot name="help"/>
        </template>
    </BaseField>
</template>

<script setup>
import {camelCase} from 'lodash';
import {computed} from 'vue';
import BaseField from './base-field.vue';

defineOptions({
    name: 'BaseCheckbox',
});
const props = defineProps({
    modelValue: {
        type: [Number, Boolean, Array],
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
    trueValue: {
        type: [String, Number],
        default: 1,
    },
    falseValue: {
        type: [String, Number],
        default: 0,
    },
    disabled: {
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
        margin-right: 0.5rem !important;
    }

    .control {
        order: -1;
        margin: 0.15rem 0.5rem 0 0;

        .checkbox {
            margin-top: 0rem;
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
