<template>
    <div></div>
</template>
<script setup>
/*
import { ref, onMounted, computed, watch } from 'vue';
import flatpickr from 'flatpickr';
import useTimeFrames, { TIME_FRAME_OPTIONS, TIME_FRAMES } from '../../composables/use-time-frames.js';
import BaseSelect from '../base/base-select.vue';
import BaseField from '../base/base-field.vue';
const props = defineProps({
    modelValue: {
        type: Object,
    },
    showTimeFrameSelector: {
        type: Boolean,
        default: true,
    },
    timeFramesLabel: {
        type: String,
        default: 'Time Frame',
    },
    timeFramesConfig: {
        type: Object,
        default: () => ({
            options: TIME_FRAME_OPTIONS,
            optionIdProperty: 'id',
            optionLabelProperty: 'label',
        }),
    },
    showTimes: {
        type: Boolean,
        default: false,
    },
    startDateLabel: {
        type: String,
        default: 'Start Date',
    },
    endDateLabel: {
        type: String,
        default: 'End Date',
    },
    stacked: {
        type: Boolean,
        default: false,
    },
    labelsInline: {
        type: Boolean,
        default: false,
    },
    defaultTimeFrame: {
        type: String,
    },
    wrap: {
        type: Boolean,
        default: false,
    },
    hideEndTime: {
        type: Boolean,
    },
    hideLabels: {
        type: Boolean,
    },
});

const emit = defineEmits(['update:modelValue', 'timeframeOpen', 'timeframeClose']);

const { getTimeFrame, getLastXTimeFrame } = useTimeFrames();
const selectedTimeFrame = ref(TIME_FRAMES.customRange.id);
const showLastXFields = ref(false);
const lastXValue = ref(1);
const lastXUnits = ref('days');
const lastSelectedTimeFrame = ref(null);

const startInput = ref(null);
const endInput = ref(null);
const start = props.modelValue && props.modelValue.start ? new Date(props.modelValue.start) : new Date();
const end = props.modelValue && props.modelValue.end ? new Date(props.modelValue.end) : new Date();
let startPicker = null;
let endPicker = null;
let startValue = null;
let endValue = null;

const onDateChange = () => {
    if (lastSelectedTimeFrame.value && (startValue !== lastSelectedTimeFrame.value.start || endValue !== lastSelectedTimeFrame.value.end)) {
        showLastXFields.value = false;
        lastSelectedTimeFrame.value = null;
        selectedTimeFrame.value = TIME_FRAMES.customRange.id;
    }
    if (!startValue) {
        startValue = startInput.value.value;
    }
    if (!endValue) {
        endValue = endInput.value.value;
    }
    emit('update:modelValue', {
        start: startValue,
        end: endValue,
        id: selectedTimeFrame.value,
    });
};

const dateFormat = computed(() => {
    return 'Y-m-d' + (props.showTimes ? ' H:i' : '');
});

onMounted(() => {
    startPicker = flatpickr(startInput.value, {
        enableTime: props.showTimes,
        time_24hr: props.showTimes,
        defaultDate: start,
        dateFormat: 'Z',
        altInput: true,
        altFormat: dateFormat.value,
        onChange: (selectedDates, dateStr) => {
            startValue = dateStr;
            onDateChange();
        },
    });
    endPicker = flatpickr(endInput.value, {
        enableTime: props.showTimes,
        time_24hr: props.showTimes,
        defaultDate: end,
        dateFormat: 'Z',
        altInput: true,
        altFormat: dateFormat.value,
        onChange: (selectedDates, dateStr) => {
            endValue = dateStr;
            onDateChange();
        },
    });

    if (props.modelValue && props.modelValue.id) {
        onTimeFrameChanged(props.modelValue.id, true);
    } else if (props.defaultTimeFrame) {
        onTimeFrameChanged(props.defaultTimeFrame, true);
    } else if (!props.modelValue) {
        onTimeFrameChanged(TIME_FRAMES.yearToDate.id, true);
    }
});

watch(
    () => props.modelValue,
    newValue => {
        const start = newValue && newValue.start ? new Date(newValue.start) : new Date();
        const end = newValue && newValue.end ? new Date(newValue.end) : new Date();
        setTimeFrame({ start, end });
    },
);

// In case we want to keep the quick buttons...
const setYTD = () => {
    onTimeFrameChanged(TIME_FRAMES.yearToDate.id);
};

const lastYear = () => {
    onTimeFrameChanged(TIME_FRAMES.lastYear.id);
};

const setLastThreeMonths = () => {
    lastXValue.value = 3;
    lastXUnits.value = 'months';
    onTimeFrameChanged(TIME_FRAMES.lastX.id);
    onLastXChanged();
};

const setCurrentMonth = () => {
    onTimeFrameChanged(TIME_FRAMES.thisMonth.id);
};

const setLastMonth = () => {
    onTimeFrameChanged(TIME_FRAMES.lastMonth.id);
};

const setTimeFrame = (timeFrame, emitEvent = false) => {
    startPicker.setDate(timeFrame.start, false);
    endPicker.setDate(timeFrame.end, false);

    // set the start and end values to the formatted date strings
    startValue = startPicker.input.value;
    endValue = endPicker.input.value;

    lastSelectedTimeFrame.value = {
        start: startValue,
        end: endValue,
        id: selectedTimeFrame.value,
    };

    if (emitEvent) {
        onDateChange();
    }
};

const onTimeFrameChanged = (value, emitEvent = false) => {
    selectedTimeFrame.value = value;

    if (!value) {
        lastSelectedTimeFrame.value = null;
        return;
    }

    showLastXFields.value = value === TIME_FRAMES.lastX.id;

    if (value === TIME_FRAMES.lastX.id || value === TIME_FRAMES.customRange.id) {
        lastSelectedTimeFrame.value = null;
        return;
    }
    const timeFrame = getTimeFrame(value);
    setTimeFrame(timeFrame, emitEvent);
};

const onLastXChanged = () => {
    if (lastXValue.value >= 0) {
        const timeFrame = getLastXTimeFrame(lastXValue.value, lastXUnits.value);
        setTimeFrame(timeFrame, true);
    } else {
        // Invalid parameters
    }
};

const lastXUnitOptions = computed(() => {
    return [
        { id: 'days', label: `Day${parseInt(lastXValue.value) === 1 ? '' : 's'}` },
        { id: 'weeks', label: `Week${parseInt(lastXValue.value) === 1 ? '' : 's'}` },
        { id: 'months', label: `Month${parseInt(lastXValue.value) === 1 ? '' : 's'}` },
        { id: 'quarters', label: `Quarter${parseInt(lastXValue.value) === 1 ? '' : 's'}` },
        { id: 'years', label: `Year${parseInt(lastXValue.value) === 1 ? '' : 's'}` },
    ];
});
*/
</script>
<style lang="scss">
/*
.time-frame {
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;

    &.stacked {
        flex-direction: column;
        align-items: flex-start;
    }

    &.labels-inline {
        .field {
            display: flex;
            align-items: center;
            max-width: inherit;
            .control {
                flex-grow: 1;
            }
            .label {
                line-height: 1.2;
                margin: 0 0.5rem 0 0;
            }
        }
        .time-frame-selector {
            min-width: 20rem;
            flex-grow: 1;
            max-width: 30rem;
        }
        .time-frame-pickers {
            align-items: flex-start;
            .field {
                margin-right: 1rem;
            }
        }
    }
}
.time-frame-selector {
    display: flex;
    align-items: flex-end;

    margin-right: 1rem;
    > * {
        margin-right: 0.5rem;
        margin-bottom: 0 !important;
        flex: auto;
        max-width: 12rem;
    }
    .time-frame-options {
        min-width: 12rem;
    }
    .last-x-value,
    .last-x-units {
        label {
            display: none;
        }
    }
    .last-x-value {
        flex: none;
        width: 5rem;
        height: 2.25rem;
        input {
            max-height: 2.25rem;
        }
    }
    .last-x-units {
        min-width: 8rem;
    }
}
.time-frame-pickers {
    display: flex;
    > * {
        flex: auto;
        min-width: 12rem;
        max-width: 15rem;
        margin-right: 0.5rem;

        .control {
            position: relative;
        }

        .input {
            padding-left: 2.25rem;
        }

        .icon {
            position: absolute;
            left: 0.65rem;
            margin-top: auto;
            height: 100%;
            color: #bbb;
            pointer-events: none;
        }
    }
}
*/
</style>
