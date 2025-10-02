<template>
    <BaseField :label="props.label" :error="props.error" :field-id="field">
        <template #control>
            <multiselect
                :id="field"
                v-if="props.options || (props.multiple && Array.isArray(props.modelValue))"
                :class="{ 'grouped-options': props.group }"
                :label="optionLabel"
                :track-by="props.taggable ? '' : props.trackBy"
                v-model="option"
                :placeholder="props.placeholderText"
                :multiple="props.multiple"
                :options="props.options"
                :taggable="props.taggable"
                :tag-placeholder="props.tagPlaceholder"
                selectLabel=""
                :deselectLabel="props.deselectLabel"
                selectedLabel=""
                :searchable="props.searchable"
                :max-height="props.maxHeight"
                :disabled="props.disabled"
                @select="onSelect"
                @tag="addTag"
                @open="emit('open')"
                @close="emit('close')"
                :close-on-select="!props.multiple"
                :groupValues="groupSettings.values"
                :groupLabel="groupSettings.label" />
        </template>
        <template #help>
            <slot name="help" />
        </template>
        <template #label>
            <slot name="label" />
        </template>
        <template #option>
            <slot name="option" />
        </template>
    </BaseField>
</template>

<script setup>
import { computed } from 'vue';
import { camelCase, find, flatMap } from 'lodash';
import BaseField from './base-field.vue';
import Multiselect from 'vue-multiselect';

defineOptions({
    name: 'BaseSelect',
});

const emit = defineEmits(['update:modelValue', 'select', 'open', 'close']);

const props = defineProps({
    options: {
        type: Array,
    },
    modelValue: {
        type: [String, Number, Array],
        default: null,
    },
    multiple: {
        type: Boolean,
        default: false,
    },
    label: {
        type: String,
        default: '',
    },
    error: {
        type: String,
        default: '',
    },
    taggable: {
        type: Boolean,
        default: false,
    },
    trackBy: {
        type: String,
        default: 'id',
    },
    selectLabel: {
        type: String,
        default: 'label',
    },
    deselectLabel: {
        type: String,
        default: '',
    },
    selectValue: {
        type: String,
        default: 'id',
    },
    group: {
        type: Boolean,
        default: false,
    },
    groupOptions: {
        type: Object,
        default: () => {
            return {
                label: 'group',
                values: 'options',
            };
        },
    },
    tagPlaceholder: {
        type: String,
        default: 'Press enter to create a tag',
    },
    placeholderText: {
        type: String,
        default: 'Select an option',
    },
    searchable: {
        type: Boolean,
        default: true,
    },
    maxHeight: {
        type: Number,
        default: 400,
    },
    disabled: {
        type: Boolean,
    },
    fieldId: {
        type: String,
        default: null,
    },
});

if (props.multiple && !Array.isArray(props.modelValue)) {
    emit('update:modelValue', []);
}

const field = computed(() => {
    if (props.fieldId) {
        return 'listbox-' + camelCase(props.fieldId);
    }
    return 'listbox-' + (props.label && props.label !== '' ? camelCase(props.label) : null);
});

const groupSettings = computed(() => {
    if (props.group) {
        return props.groupOptions;
    }

    return {
        values: null,
        label: null,
    };
});

const optionLabel = computed(() => {
    return props.taggable ? null : props.selectLabel;
});

const option = computed({
    get: () => {
        let options = props.options;

        if (props.group) {
            options = flatMap(props.options, group => group.options);
        }

        if (props.multiple) {
            if (props.taggable) {
                if (props.modelValue) {
                    return props.modelValue;
                }
            }

            if (!Array.isArray(props.modelValue)) {
                return [];
            }

            // Remove all undefined values from the mapped values
            const mappedValues = props.modelValue.map(v => find(options, [props.selectValue, v]));
            return mappedValues.filter(v => v !== undefined);
        }
        return find(options, [props.selectValue, props.modelValue]);
    },
    set: value => {
        if (props.multiple) {
            if (props.taggable) {
                emit('update:modelValue', value);
            } else {
                emit(
                    'update:modelValue',
                    value.map(v => v[props.selectValue]),
                );
            }
        } else {
            if (value == null) {
                emit('update:modelValue', null);
                return;
            }
            emit('update:modelValue', value[props.selectValue]);
        }
    },
});

function addTag(tag) {
    option.value = [...option.value, tag];
}

function onSelect($event) {
    emit('select', $event);
}
</script>

<style scoped>
.multiselect {
    height: auto !important;
    min-height: auto !important;
}
</style>
