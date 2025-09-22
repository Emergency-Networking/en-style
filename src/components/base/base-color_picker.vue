<template>
    <BaseField :label="label" type="color" v-model="colorValue" class="color-picker" :style="{ '--colorValue': colorValue, '--textColor': textColor }">
        <template #control>
            <div class="button">
                <div v-if="showHexValue" class="label">{{ colorValue }}</div>
                <div class="color-swatch"></div>
                <input type="color" v-model="colorValue" @click="copyValue" />
            </div>
        </template>
    </BaseField>
</template>
<script setup>
import { computed, watch, ref } from 'vue';
import BaseField from './base-field.vue';
import ColorUtil from '../../utils/color-util.js';

defineOptions({
    name: 'BaseColorPicker',
});

const props = defineProps({
    modelValue: {
        type: String,
    },
    label: {
        type: String,
    },
    showHexValue: {
        type: Boolean,
        default: true,
    },
});
const emit = defineEmits(['update:modelValue']);
const colorValue = computed({
    get: () => {
        return props.modelValue;
    },
    set: value => {
        emit('update:modelValue', value);
    },
});

const textColor = ref(ColorUtil.getTextColorByBackground(colorValue.value));
// watch the colorValue and update the textColor property
watch(colorValue, () => {
    textColor.value = ColorUtil.getTextColorByBackground(colorValue.value);
});

//TODO: Setup copy and paste tippy helper
const copyValue = () => {
    // navigator.clipboard.writeText(colorValue.value);
};
</script>
<style lang="scss">
.color-picker {
    cursor: pointer;

    > .label {
        margin-bottom: 0.25rem;
    }
    .control {
        position: relative;
        .button {
            width: 100%;
            overflow: hidden;
            padding: 0.25rem;
            outline: none;

            > .label {
                z-index: 1;
                pointer-events: none;
                position: absolute;
                width: 100%;
                height: 100%;
                margin: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 0.85rem;
                color: var(--textColor);
                opacity: 0.75;
                text-transform: uppercase;
            }

            .color-swatch {
                position: absolute;
                width: calc(100% - 0.5rem);
                height: calc(100% - 0.5rem);
                background-color: var(--colorValue);
                pointer-events: none;
                border-radius: 5px;
                border: 1px solid #eee;
            }
            input {
                cursor: pointer;
                width: 100%;
                height: 2.5rem;
                opacity: 0;
            }
        }
    }
}
[data-theme='dark'],
.theme-dark {
    .color-picker .control .button {
        background-color: #333;
    }
}
</style>
