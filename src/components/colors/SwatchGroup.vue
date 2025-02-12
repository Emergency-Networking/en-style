<template>
  <div>
    <p>
      <span class="">
        {{ colorName }}
      </span>
      <span class="pl-2">
        {{ baseColor }}
      </span>
    </p>
    <div class="">
      <div :class="`${baseColor} h-16 w-16`"></div>
    </div>
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

const props = defineProps({
  colorName: String,
  baseColor: String,
});

// defineExpose({
// });
</script>
<style></style>
