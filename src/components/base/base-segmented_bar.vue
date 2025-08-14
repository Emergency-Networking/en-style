<template>
    <BaseField :label="props.label" :error="props.error" class="base-segmented-bar" :hide-label="hideLabel">
        <template #control>
            <div :class="['is-fullwidth', { 'no-value': !props.modelValue }]">
                <en-button
                    v-for="option in props.options"
                    :key="`${option.value}_${getSelected(option)}`"
                    :class="[
                        'segmented-bar-option',
                        'flex-grow-1',
                        option.classes || '',
                        getSelected(option) && option.selectedClasses ? option.selectedClasses : '',
                    ]"
                    :selected="getSelected(option)"
                    :disabled="option.disabled"
                    :intent="option.intent || intent"
                    :icon="option.icon"
                    :label="option.label"
                    :hide-label="option.hideLabel"
                    :size-medium="props.sizeMedium"
                    :size-small="props.sizeSmall"
                    :variant="option.variant || props.variant"
                    @click="optionClicked(option)"
                    :style="{ 'white-space': 'nowrap', 'flex-basis': props.evenSpaced ? `${100 / props.options.length}%` : null }">
                </en-button>
            </div>
        </template>
    </BaseField>
</template>
<script setup>
import { computed } from 'vue';
import BaseField from './base-field.vue';
import EnButton from '../buttons/en-button.vue';

defineOptions({
    name: 'BaseSegmentedBar',
});

const props = defineProps({
    id: {
        type: String,
    },
    modelValue: {
        type: [Array, String, Number, Boolean],
    },
    label: {
        type: String,
    },
    error: {
        type: String,
    },
    options: {
        type: Array,
        default: () => [],
    },
    multipleSelect: {
        type: Boolean,
        default: false,
    },
    canDeselect: {
        type: Boolean,
        default: true,
    },
    evenSpaced: {
        type: Boolean,
        default: false,
    },
    sizeSmall: {
        type: Boolean,
        default: false,
    },
    sizeMedium: {
        type: Boolean,
        default: false,
    },
    variant: {
        type: String,
    },
    intent: {
        type: String,
    },
    hideLabel: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(['update:modelValue']);

const selectedOption = computed(() => {
    if (props.modelValue === undefined) {
        return [];
    }
    if (props.multipleSelect) {
        return props.modelValue;
    }
    return [props.modelValue];
});
const getSelected = option => {
    return selectedOption.value.includes(option.value);
};
const optionClicked = option => {
    if (option.disabled) {
        return;
    }
    if (option.callback) {
        option.callback();
        return;
    }
    let valueCopy;
    if (props.multipleSelect) {
        valueCopy = props.modelValue !== undefined ? [...props.modelValue] : [];
        if (valueCopy.includes(option.value)) {
            valueCopy = valueCopy.filter(value => value !== option.value);
        } else {
            valueCopy.push(option.value);
        }
    } else {
        if (props.modelValue === option.value) {
            if (!props.canDeselect) {
                return;
            }
            valueCopy = null;
        } else {
            valueCopy = option.value;
        }
    }
    emit('update:modelValue', valueCopy);
};
</script>
<style lang="scss" scoped>
.base-segmented-bar {
    .control {
        > div {
            display: flex;
        }
        .segmented-bar-option {
            &:first-child {
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
            }
            &:last-child {
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
            }
            &:not(:first-child):not(:last-child) {
                border-radius: 0;
            }
        }
    }
}
</style>
