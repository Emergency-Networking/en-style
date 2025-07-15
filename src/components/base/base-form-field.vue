<template>
    <BaseField :label="props.label" :error="props.error" class="field-browser-trigger" :content-right="props.withDelete">
        <template #control>
            <div
                :class="['is-fullwidth', buttonClasses, { 'no-value': !props.modelValue }]"
                @click="
                    $emit('action', {
                        action: 'openFieldBrowser',
                        id: props.id,
                        value: props.modelValue,
                        moduleId: props.moduleId,
                        moduleName: props.moduleName,
                    })
                ">
                {{ displayValueText }}
            </div>
        </template>
        <template #right>
            <delete-button v-if="props.withDelete" size-small align-right @click="emit('delete')" />
        </template>
        <template #help>
            <slot name="help" />
        </template>
    </BaseField>
</template>
<script setup>
import { computed } from 'vue';
import BaseField from './base-field.vue';
import DeleteButton from '../buttons/delete-button.vue';
import useButtonStyles from '../../composables/use-button-styles';

const props = defineProps({
    id: {
        type: String,
    },
    modelValue: {
        type: String,
    },
    displayValue: {
        type: String,
    },
    moduleId: {
        type: String,
    },
    moduleName: {
        type: String,
    },
    label: {
        type: String,
    },
    error: {
        type: String,
    },
    noFieldLabel: {
        type: String,
        default: 'Choose a field',
    },
    withDelete: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(['action', 'delete']);
const displayValueText = computed(() => {
    if (props.modelValue) {
        return props.displayValue ? props.displayValue : props.modelValue;
    } else {
        return props.noFieldLabel;
    }
});

const { getStyleClass, VARIANTS, INTENTS, ATTRIBUTES } = useButtonStyles();

const buttonClasses = computed(() => {
    const attributes = props.modelValue ? [ATTRIBUTES.SELECTED, ATTRIBUTES.TOGGLEABLE] : [];
    const classes = getStyleClass(props.modelValue ? VARIANTS.PRIMARY : VARIANTS.SECONDARY, null, attributes);
    return classes;
});
</script>
<style lang="scss" scoped>
.field-browser-trigger {
    .button {
        text-overflow: ellipsis;
        overflow: hidden;
        // display: block;
        // &.no-value {
        //     background-color: #92a2af;
        // }
    }
}
</style>
