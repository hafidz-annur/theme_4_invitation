<script setup>
import { ref } from "vue";
const props = defineProps({ data: Object });
</script>
<template>
  <v-container class="p-0">
    <div class="relative bg-white overflow-auto p-5">
      <h2 class="text-center text-2xl mb-3">Moment Kami</h2>
      <v-row no-gutters>
        <template v-for="(image, imgIdx) in props.data?.galeri" :key="imgIdx">
          <v-col :cols="image.cols" class="pa-1">
            <v-img :src="image.foto" height="100%" cover></v-img>
          </v-col>

          <v-col v-if="image.children" class="d-flex flex-column pa-1" cols="6">
            <v-row>
              <v-col
                v-for="(children, childIdx) in image.children"
                :key="childIdx"
                :cols="children.cols"
              >
                <v-img :src="children.foto" height="100%" cover></v-img>
              </v-col>
            </v-row>
          </v-col>
        </template>
      </v-row>
    </div>
  </v-container>
</template>
