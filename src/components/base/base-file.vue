<template>
    <div class="file has-name is-flex-wrap-wrap">
        <div v-if="usingExisting">
            <a :href="props.current" target="_blank" :class="{ 'button is-success': !currentIsImage }">
                <img v-if="currentIsImage" :src="props.current" class="is-150x150-thumb mx-auto" />
                <span v-else>View Attachment</span>
            </a>

            <en-button class="ml-4" type="button" @click="usingExisting = false">Change File</en-button>
        </div>
        <label v-else class="file-label">
            <input class="file-input" type="file" ref="fileElement" @input="handleChange($event)" :name="name" :accept="props.accept" />
            <span class="file-cta">
                <span class="file-icon">
                    <i class="fas fa-upload" />
                </span>
                <span class="file-label"> {{ props.label }} </span>
            </span>
            <span class="file-name"> {{ fileLabel }} </span>
        </label>

        <div v-if="!usingExisting && props.current">
            <en-button intent="cancel" class="ml-4" @click="usingExisting = true" type="button">Cancel</en-button>
        </div>

        <div style="flex-basis: 100%" />
        <div>
            <slot name="help" />
            <p class="help is-danger" v-if="hasError" v-text="props.error" />
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import { camelCase } from 'lodash';
import EnButton from '../buttons/en-button.vue';

defineOptions({
    name: 'BaseFile',
});

const props = defineProps({
    label: {
        type: String,
        default: 'Choose a file…',
    },
    noFile: {
        type: String,
        default: 'No file uploaded',
    },
    accept: {
        type: String,
        default: '',
    },
    modelValue: {},
    current: {},
    error: {
        type: String,
        default: '',
    },
});

const emit = defineEmits(['update:modelValue']);

const usingExisting = ref(false);
const fileElement = ref(null);

watch(
    () => props.current,
    val => {
        if (val) {
            usingExisting.value = true;
        }
    },
);
watch(
    () => props.modelValue,
    val => {
        if (val === null) {
            fileElement.value.value = null;
        }
    },
);

onMounted(() => {
    if (props.current) {
        usingExisting.value = true;
    }
});
const name = computed(() => {
    return camelCase(props.label);
});
const fileLabel = computed(() => {
    return props.modelValue ? props.modelValue.name : props.noFile;
});
const currentIsImage = computed(() => {
    if (typeof props.current !== 'string') return false;
    return props.current.match(/^http[^\?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gim) != null;
});
const hasError = computed(() => {
    return props.error != '';
});
const handleChange = $event => {
    let file = $event.target.files[0];
    emit('update:modelValue', file);
};
</script>
