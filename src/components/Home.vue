<template>
  <img
    src="../assets/EN Logo horizontal dark.png"
    alt="Emergency Networking Logo"
  />
  <h2 class="">Advancing first responder software to the next level.</h2>
  <div>
    <div>
      <EnButton variant="save">Button</EnButton>
    </div>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <SwatchGroup
        v-for="swatchGroup in swatches"
        :key="swatchGroup.colorClass"
        :color-name="swatchGroup.colorName"
        :color-class="swatchGroup.colorClass"
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
        { colorName: "red", colorClass: "bg-red" },
        { colorName: "blue", colorClass: "bg-blue" },
        { colorName: "blue-light", colorClass: "bg-blue-light" },
        { colorName: "blue-rich", colorClass: "bg-blue-rich" },
        { colorName: "blue-deep", colorClass: "bg-blue-deep" },
        { colorName: "blue-dark", colorClass: "bg-blue-dark" },
        { colorName: "yellow", colorClass: "bg-yellow" },
        { colorName: "orange", colorClass: "bg-orange" },
        { colorName: "green", colorClass: "bg-green" },
        { colorName: "green-bright", colorClass: "bg-green-bright" },
        { colorName: "green-light", colorClass: "bg-green-light" },
        { colorName: "green-light-2", colorClass: "bg-green-light-2" },
        { colorName: "purple", colorClass: "bg-purple" },
        { colorName: "gray", colorClass: "bg-gray" },
        { colorName: "gray-light", colorClass: "bg-gray-light" },
      ])
</script>
