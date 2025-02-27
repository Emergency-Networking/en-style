<template>
    <component :is="tag"
               :class="classes"
               :href="href"
               @click="onClick"
   >
    {{ label }} <span aria-hidden="true" v-if="type === 'text'">→</span>
    </component>
</template>

<script setup>
import { reactive, computed, defineEmits } from 'vue';

const emit = defineEmits(['click']);

const { color, href, label, size, type } = defineProps({
    label: {
        type: String,
        default: 'Button',
    },
    type: {
        type: String,
        default: 'primary',
    },
  color: {
      type: String,
      default: 'blue',
  },
    href: {
        type: String,
        default: '',
    },
    primary: {
        type: Boolean,
        default: false,
    },
    size: {
        type: String,
        validator: function (value) {
            return ['sm', 'wide'].indexOf(value) !== -1;
        },
        default: function () {
            return 'sm';
        }
    }
})

/**
 * primary, secondary, tertiary, text
 */

const classes = computed(() => {
    let classStr = `font-semibold hover:opacity-90 rounded btn-${color} btn-${type} btn-${size}`;

    if( type !== 'text' ) {
        classStr += ' shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';
    }

    if (type === 'primary') {
        classStr += ' bg-tsy-blue-primary text-white focus-visible:outline-tsy-blue-primary';
    }

    if (type === 'secondary') {
        classStr += ' bg-white border focus-visible:outline-white';
    }

    if( type === 'tertiary') {
        classStr += ' focus-visible:outline-white';
    }

    if( type === 'text') {
        classStr += ' bg-transparent text-tsy-blue-primary';
    }

    return classStr;
});

const tag = computed(() => href ? 'a' : 'button');

function onClick() {
    emit('click');
}
</script>