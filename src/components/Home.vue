<template>
  <img
    src="../assets/EN Logo horizontal dark.png"
    alt="Emergency Networking Logo"
  />
  <h2 class="">Advancing first responder software to the next level.</h2>
  <div>
    <div>
      <en-button variant="save">Button</en-button>
    </div>
    <div>
      <swatch-group
        v-for="swatchGroup in swatches"
        :key="swatchGroup"
        :colorName="swatchGroup"
        :baseColor="`bg-${swatchGroup}`"
      />
      <!-- <span
       // throwing this in here to get the swatches to render
        class="bg-blue bg-bright-green bg-dark-blue bg-deep-blue bg-gray bg-green bg-light-blue bg-light-gray bg-light-green bg-light-green-2 bg-orange bg-purple bg-red bg-rich-blue bg-yellow"
        >
      </span> -->
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import SwatchGroup from "./colors/SwatchGroup.vue";
import EnButton from "./buttons/en-button.vue";

const swatches = ref([
  "red",
  "light-blue",
  "blue",
  "rich-blue",
  "deep-blue",
  "dark-blue",
  "yellow",
  "orange",
  "green",
  "bright-green",
  "light-green",
  "light-green-2",
  "purple",
  "light-gray",
  "gray",
]);
</script>

<style scoped></style>
