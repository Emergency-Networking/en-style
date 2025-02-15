<template>
  <div class="flex flex-col items-center gap-4">
    <p>{{ colorName }}</p>
    <div :class="`${colorClass} h-16 w-16`"></div>
  </div>
</template>

<script setup>
import {
  ref,
  computed,
  onBeforeMount,
  onMounted,
  onBeforeUnmount,
  watch,
  nextTick,
} from "vue";

// defineOptions({
//     name: '',
// });

// const emit = defineEmits(['']);

const { colorName, colorClass } = defineProps({
  colorName: String,
  colorClass: String,
});

// defineExpose({
// });
</script>
<style></style>
