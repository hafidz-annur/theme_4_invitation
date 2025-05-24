<script setup>
const props = defineProps({ quote: Object });
</script>
<template>
  <v-container class="relative p-0">
    <div class="flex items-center justify-center bg-gradient-to-b from-[#3c442d] to-green-800 px-5 py-20">
      <div class="text-center" data-aos="zoom-in" data-aos-delay="500">
        <p class="text-[14px] text-white">
          {{ props.quote?.islam[2].quote }}
        </p>
        <h3 class="text-xl mt-3 text-white">
          {{ props.quote?.islam[2].sumber }}
        </h3>
      </div>
    </div>
  </v-container>
</template>
