<template>
    <div
        class="field"
        :class="[
            {
                'is-flex is-flex-wrap-wrap': props.secret,
                'content-left': props.contentLeft,
                'content-right': props.contentRight,
                'with-pre-icon': props.preIcon,
                'with-post-icon': props.postIcon,
            },
        ]"
        :style="{ '--pre-icon': preIconCode, '--post-icon': postIconCode }">
        <label v-if="!hideLabel" :for="field" class="label" :class="[props.labelClasses, { 'is-fullwidth': props.secret || props.fullWidthLabel }]">
            <slot name="label">{{ props.label }}</slot>
        </label>

        <div class="control" :class="[props.controlClasses, { 'has-icons-right': hasError }, { 'is-expanded is-flex-grow-1 mr-3': props.secret }]">
            <div v-if="props.contentLeft" class="left-content">
                <slot name="left" />
            </div>
            <slot name="control">
                <BaseInput
                    :id="field"
                    :name="field"
                    :type="props.type"
                    :modelValue="props.modelValue"
                    v-bind="attrs"
                    @update:modelValue="onInput"
                    @keyup="onKeyup"
                    ref="input"
                    :class="['input', props.inputClasses, { 'is-danger': hasError }]"
                    :list="props.list"
                    :autocomplete="props.autocomplete"
                    :autofocus="props.autofocus"
                    :minLength="props.minlength"
                    :maxlength="props.maxlength"
                    :readonly="props.readonly"
                    :min="props.min"
                    :max="props.max"
                    :step="props.step"
                    :disabled="props.disabled"
                    :placeholder="props.placeholder"
                    :flatPickerSettings="props.flatPickerSettings">
                </BaseInput>
            </slot>

            <span v-if="hasError" class="icon is-small is-right has-text-danger">
                <i class="fas fa-exclamation-triangle" />
            </span>
            <div v-if="props.contentRight" class="right-content">
                <slot name="right" />
            </div>
        </div>
        <p class="control" v-if="props.secret">
            <en-button @click="toggleSecret" variant="ghost" type="button" :selected="secretVisible" toggleable>
                <span v-if="secretVisible" class="icon">
                    <i class="fas fa-eye-slash" />
                </span>
                <span v-else class="icon">
                    <i class="fas fa-eye" />
                </span>
            </en-button>
        </p>
        <slot name="help" />
        <span class="help is-danger" v-if="hasError" v-text="props.error" />
    </div>
</template>

<script setup>
import { computed, onMounted, ref, useAttrs } from 'vue';
import { camelCase } from 'lodash';
import flatpickr from 'flatpickr';
import Inputmask from 'inputmask';
import BaseInput from './base-input.vue';
import EnButton from '../buttons/en-button.vue';

defineOptions({
    name: 'BaseField',
});

const attrs = useAttrs();
const secretVisible = ref(false);
const input = ref(null);
const emit = defineEmits(['update:modelValue', 'keyup']);
const props = defineProps({
    type: {
        type: String,
        default: 'text',
    },
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
    date: {
        type: Boolean,
        default: false,
    },
    time: {
        type: Boolean,
        default: false,
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
    mask: {
        type: [Object, String],
        default: null,
    },
    list: {
        type: String,
        default: '',
    },
    secret: {
        type: Boolean,
        default: false,
    },
    secretVisibleDefault: {
        type: Boolean,
        default: false,
    },
    readonly: {
        type: Boolean,
        default: false,
    },
    min: {},
    max: {},
    step: {},
    dateTimeConfig: {
        type: Object,
        default: () => {},
    },
    contentLeft: {
        type: Boolean,
        default: false,
    },
    contentRight: {
        type: Boolean,
        default: false,
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
    flatPickerSettings: {
        type: Object,
        default: null,
    },
    hideLabel: {
        type: Boolean,
        default: false,
    },
    preIcon: {
        type: String,
    },
    postIcon: {
        type: String,
    },
});

onMounted(() => {
    if (props.date) {
        let defaultDate = null;
        //check for timezone issue just on date
        if (props.modelValue && props.modelValue.indexOf('T') > -1) {
            defaultDate = props.modelValue.split('T')[0];
            emit('update:modelValue', defaultDate);
        }
        flatpickr(input.value.$el, {
            dateFormat: 'Y-m-d',
            enableTime: false,
            disableMobile: true,
            defaultDate: defaultDate,
            ...props.dateTimeConfig,
        });
    }

    if (props.time) {
        let defaultDate = null;
        if (props.modelValue) {
            defaultDate = new Date(props.modelValue);
        }
        const fp = flatpickr(input.value.$el, {
            enableTime: true,
            dateFormat: 'Y-m-d H:i',
            disableMobile: true,
            defaultDate: props.defaultDate,
            time_24hr: true,
            ...props.dateTimeConfig,
        });
        fp.setDate(defaultDate, true);
    }

    if (props.mask) {
        Inputmask(props.mask).mask(input.value.$el);
    }

    if (props.secret && !props.modelValue && props.secretVisibleDefault) {
        secretVisible.value = true;
        input.value.$el.type = 'text';
    } else if (props.secret && props.modelValue) {
        input.value.$el.type = 'password';
    }
});

function onInput(event) {
    emit('update:modelValue', event);
}

function onKeyup(event) {
    emit('keyup', event);
}

function toggleSecret() {
    secretVisible.value = !secretVisible.value;
    input.value.$el.type = secretVisible.value ? 'text' : 'password';
}

const field = computed(() => (props.label && props.label !== '' ? camelCase(props.label) : null));
const hasError = computed(() => props.error != '');
const isText = computed(() => type === 'text');

const getIconCode = icon => {
    switch (icon) {
        case 'search':
            return '"\\f002"';
    }
    return null;
};
const preIconCode = computed(() => {
    return getIconCode(props.preIcon);
});
const postIconCode = computed(() => {
    return getIconCode(props.postIcon);
});
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
        > input {
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
        > input {
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
    input {
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
    input {
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
