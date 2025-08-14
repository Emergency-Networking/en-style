<template>
    <BaseField :label="props.label" :error="props.error">
        <template #control>
            <multiselect
                v-if="props.options || (props.multiple && Array.isArray(props.modelValue))"
                :label="optionLabel"
                track-by="code"
                v-model="option"
                :multiple="props.multiple"
                :options="props.options"
                :taggable="props.taggable"
                selectLabel=""
                deselectLabel=""
                @tag="addTag"
                @remove="removeTag" />
        </template>
    </BaseField>
</template>

<script setup>
import { computed, nextTick, onBeforeMount } from 'vue';
import find from 'lodash/find';
import BaseField from './base-field.vue';
import Multiselect from 'vue-multiselect';

defineOptions({
    name: 'BaseNemsisSelect',
});

const props = defineProps(['options', 'modelValue', 'multiple', 'label', 'error', 'taggable']);
const emit = defineEmits(['update:modelValue']);
const optionLabel = computed(() => {
    return props.taggable ? null : 'description';
});
const option = computed({
    get: () => {
        if (props.multiple) {
            if (props.taggable) {
                return props.modelValue;
            }

            if (!Array.isArray(props.modelValue)) {
                return [];
            }

            return props.modelValue.map(v => find(props.options, ['code', v]));
        }

        return find(props.options, ['code', props.modelValue]);
    },
    set: value => {
        if (props.multiple) {
            if (props.taggable) {
                emit('update:modelValue', value);
            } else {
                emit(
                    'update:modelValue',
                    value.map(v => v.code),
                );
            }
        } else {
            emit('update:modelValue', value.code);
        }
    },
});

onBeforeMount(() => {
    if (props.multiple && !Array.isArray(props.modelValue)) {
        emit('update:modelValue', []);
    }
});

const addTag = tag => {
    option.value = [...option.value, tag];
};
const removeTag = tag => {
    if (props.taggable) {
        nextTick(() => {
            option.value = option.value.filter(t => t !== tag);
            emit(
                'update:modelValue',
                option.value.filter(t => t !== tag),
            );
        });
    }
};
</script>
