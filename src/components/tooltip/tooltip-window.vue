<template>
    <div ref="tooltipElement" :style="tooltipEnabled ? { display: 'none' } : {}">
        <slot />
    </div>
</template>

<script setup>
import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue';
import useTooltip from '../../composables/use-tooltip.js';

const props = defineProps({
    target: {},
    tooltipEnabled: {
        type: Boolean,
        default: true,
    },
    options: {
        type: Object,
    },
    appendToElement: {},
    destroyOnHide: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(['tooltipActive']);

const { setupTooltip, showTooltip, hideTooltip, destroyTooltip, MENU_DEFAULT } = useTooltip();

const tooltipElement = ref(null);
const active = ref(null);
const element = ref(null);

const onTooltipShown = () => {
    active.value = true;
    emit('tooltipActive', true);
};

const onTooltipHidden = () => {
    active.value = false;
    emit('tooltipActive', false);
};

const initTooltip = () => {
    const options = { ...MENU_DEFAULT, ...props.options };
    if (props.appendToElement) {
        options.appendTo = props.appendToElement;
    }
    setupTooltip(element.value, tooltipElement.value, options, onTooltipShown, onTooltipHidden, props.destroyOnHide);
};

onMounted(() => {
    if (!props.target) {
        return;
    }
    element.value = props.target.$el ? props.target.$el : props.target;
    if (props.tooltipEnabled) {
        nextTick(() => {
            initTooltip();
        });
    }
});

onUnmounted(() => {
    destroyTooltip();
});

watch(
    () => props.target,
    newTarget => {
        element.value = newTarget.hasOwnProperty('$el') ? newTarget.$el : newTarget;
        if (props.tooltipEnabled) {
            nextTick(() => {
                destroyTooltip();
                initTooltip();
            });
        }
    },
);

watch(
    () => props.tooltipEnabled,
    enable => {
        if (enable) {
            nextTick(() => {
                initTooltip();
            });
        } else {
            destroyTooltip();
        }
    },
);

defineExpose({
    active,
    showTooltip,
    hideTooltip,
    destroyTooltip,
});
</script>
<style lang="scss"></style>
