<script setup>
const props = defineProps({ data: Object });
</script>
<template>
  <v-container class="relative p-0 overflow-hidden">
    <div
      class="flex items-center justify-center bg-gradient-to-b from-gray-300 to-gray-500"
    >
      <div class="text-center">
        <div class="relative overflow-hidden">
          <div class="flex justify-center">
            <img
              :src="props.data?.mempelai.pria.foto"
              alt="Amantrana"
              class="w-[100vh] h-[350px] object-cover object-top"
            />
          </div>
          <div class="absolute left-0 bottom-0 w-full h-full bg-black/50"></div>
          <div class="absolute left-0 bottom-10 w-full">
            <h3 class="text-3xl">
              {{ props.data?.mempelai.pria.nama_lengkap }}
            </h3>
            <p class="mb-0 text-[12px]">
              Putra
              {{ props.data?.mempelai.pria.anak_ke }} dari
            </p>
            <p class="text-[14px] mt-0">
              {{ props.data?.mempelai.pria.orang_tua?.ayah }} &
              {{ props.data?.mempelai.pria.orang_tua?.ibu }}
            </p>
            <p class="flex justify-center text-end mt-2">
              <v-icon icon="mdi-instagram" class="me-2" />
              {{ props.data?.mempelai.pria.nama_panggilan }}
            </p>
          </div>
        </div>
        <h2
          class="text-2xl mt-2 mb-3 flex justify-center items-center text-white gap-5"
          data-aos="zoom-in"
          data-aos-delay="1000"
        >
          <v-divider thickness="3" color="white" opacity="1" length="10" />
          Dengan
          <v-divider thickness="3" color="white" opacity="1" length="10" />
        </h2>

        <div class="relative overflow-hidden">
          <div class="flex justify-center">
            <img
              :src="props.data?.mempelai.wanita.foto"
              alt="Amantrana"
              class="w-[100vh] h-[350px] object-cover object-top"
            />
          </div>
          <div class="absolute left-0 bottom-0 w-full h-full bg-black/50"></div>
          <div class="absolute left-0 bottom-10 w-full">
            <h3 class="text-3xl">
              {{ props.data?.mempelai.wanita.nama_lengkap }}
            </h3>
            <p class="mb-0 text-[12px]">
              Putra
              {{ props.data?.mempelai.wanita.anak_ke }} dari
            </p>
            <p class="text-[14px] mt-0">
              {{ props.data?.mempelai.wanita.orang_tua?.ayah }} &
              {{ props.data?.mempelai.wanita.orang_tua?.ibu }}
            </p>
            <p class="flex justify-center text-end mt-2">
              <v-icon icon="mdi-instagram" class="me-2" />
              {{ props.data?.mempelai.wanita.nama_panggilan }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>
