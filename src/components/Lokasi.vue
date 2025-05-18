<script setup>
const props = defineProps({ data: Object });
</script>
<template>
  <v-container class="relative p-0 overflow-hidden">
    <div
      class="flex items-center justify-center bg-white/80 pb-10"
    >
      <div
        class="text-center w-[100%]" data-aos="zoom-in" data-aos-delay="500"
      >
        <div
          v-html="props.data?.lokasi?.maps_embed"
          class="h-[300px] relative overflow-hidden"
        ></div>
        <v-btn
          :href="props.data?.lokasi?.maps_link"
          target="_blank"
          class="mt-5"
          append-icon="mdi-google-maps"
          prepend-icon="mdi-google-maps"
          color="primary"
          size="small"
          rounded="0"
        >
          Lihat Lokasi
        </v-btn>
      </div>
    </div>
  </v-container>
</template>
