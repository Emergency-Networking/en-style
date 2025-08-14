<template>
    <div class="field">
        <label v-if="!hideLabel" :for="field" class="label" :class="[props.labelClasses, { 'is-fullwidth': props.fullWidthLabel }]">
            <slot name="label">{{ props.label }}</slot>
        </label>

        <div class="control" :class="[props.controlClasses, { 'has-icons-right': hasError }]">
            <slot name="control">
                <textarea
                    :id="field"
                    :name="field"
                    :value="props.modelValue"
                    v-bind="attrs"
                    @input="onInput"
                    @keyup="onKeyup"
                    ref="textarea"
                    :class="['textarea', props.inputClasses, { 'is-danger': hasError }]"
                    :autocomplete="props.autocomplete"
                    :autofocus="props.autofocus"
                    :minLength="props.minlength"
                    :maxlength="props.maxlength"
                    :readonly="props.readonly"
                    :disabled="props.disabled"
                    :placeholder="props.placeholder"
                    :rows="props.rows"
                    :cols="props.cols"
                    :style="{ resize: props.resize }">
                </textarea>
            </slot>

            <span v-if="hasError" class="icon is-small is-right has-text-danger">
                <i class="fas fa-exclamation-triangle"></i>
            </span>
        </div>

        <slot name="help"></slot>
        <span class="help is-danger" v-if="hasError" v-text="props.error"></span>
    </div>
</template>
<script setup>
import { camelCase } from 'lodash';
import { computed, ref, useAttrs } from 'vue';

defineOptions({
    name: 'BaseTextarea',
});

const attrs = useAttrs();
const textarea = ref(null);
const emit = defineEmits(['update:modelValue', 'keyup']);
const props = defineProps({
    label: {
        type: String,
        default: '',
    },
    modelValue: {
        default: '',
    },
    error: {
        type: String,
        default: '',
    },
    controlClasses: {
        type: String,
        default: '',
    },
    inputClasses: {
        type: String,
        default: '',
    },
    maxlength: {
        type: String,
        default: '255',
    },
    minlength: {
        type: String,
    },
    autocomplete: {
        type: String,
        default: 'on',
    },
    autofocus: {
        type: Boolean,
        default: false,
    },
    placeholder: {
        type: String,
    },
    readonly: {
        type: Boolean,
        default: false,
    },
    rows: {
        type: [String, Number],
        default: 3,
    },
    cols: {
        type: [String, Number],
        default: null,
    },
    resize: {
        type: String,
        default: 'vertical',
        validator: value => ['none', 'both', 'horizontal', 'vertical'].includes(value),
    },
    fullWidthLabel: {
        type: Boolean,
        default: false,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    labelClasses: {
        type: String,
        default: '',
    },
    hideLabel: {
        type: Boolean,
        default: false,
    },
});

function onInput(event) {
    emit('update:modelValue', event.target.value);
}

function onKeyup(event) {
    emit('keyup', event);
}

const field = computed(() => (props.label && props.label !== '' ? camelCase(props.label) : null));
const hasError = computed(() => props.error != '');
</script>
<style lang="scss">
.customize-check {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    .label {
        margin-bottom: 0;
        margin-right: 0.4rem;
    }
    .control {
        order: 1;
        margin: 0 0.5rem 0 0;
    }
    .help {
        order: 2;
        width: 100%;
    }
}
.content-left,
.content-right {
    .control {
        display: flex;
        align-items: center;
    }
}
.content-left {
    .control {
        > textarea {
            padding-left: 2rem;
        }
    }
    .left-content {
        left: 0.5rem;
        position: absolute;
        z-index: 1;
    }
}
.content-right {
    .control {
        > textarea {
            padding-right: 2rem;
        }
    }
    .right-content {
        right: 0.5rem;
        position: absolute;
        z-index: 1;
    }
}
.w-full {
    width: 100%;
    flex-basis: 100%;
}
.with-pre-icon {
    textarea {
        padding-left: 2.25rem;
    }
    .control::before {
        content: var(--pre-icon);
        font-family: 'fontawesome';
        font-size: 1rem;
        position: absolute;
        z-index: 1;
        top: 50%;
        left: 1.12rem;
        transform: translate(-50%, -50%);
        color: #555;
    }
}
.with-post-icon {
    textarea {
        padding-right: 2.25rem;
    }
    .control::after {
        content: var(--post-icon);
        font-family: 'fontawesome';
        font-size: 1rem;
        position: absolute;
        z-index: 1;
        top: 50%;
        right: 1.12rem;
        transform: translate(-50%, -50%);
        color: #555;
    }
}
</style>
