<script setup>
const props = defineProps({ name: String, data: Object });

const emits = defineEmits(["selected"]);
const openInvitation = () => {
  emits("selected", "Pembukaan");
};
</script>
<template>
  <v-container height="100dvh" class="relative p-0 overflow-hidden">
    <v-carousel
      height="100dvh"
      :show-arrows="false"
      :cycle="true"
      :interval="6000"
      hide-delimiters
    >
      <v-carousel-item
        v-for="(item, i) in props.data?.foto_cover"
        :key="i"
        :src="item"
        height="100dvh"
        cover
      ></v-carousel-item>
    </v-carousel>

    <div
      class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#6587bd]/20 to-[#6786b8]"
    >
      <div class="absolute bottom-10 left-0 w-full flex justify-center">
        <div class="md:w-[60%] w-[80%]">
          <div class="text-center mb-5">
            <p
              class="font-bold uppercase mb-3 text-dark animate__animated animate__zoomIn"
            >
              The Wedding of
            </p>
            <div class="flex items-center justify-center gap-2">
              <h1
                class="text-5xl animate__animated animate__zoomIn animate__delay-1s"
              >
                {{ props.data?.mempelai.pria.nama_panggilan }}
              </h1>

              <h2
                class="text-7xl mt-2 animate__animated animate__zoomIn animate__delay-1s"
              >
                &
              </h2>
              <h1
                class="text-5xl animate__animated animate__zoomIn animate__delay-1s"
              >
                {{ props.data?.mempelai.wanita.nama_panggilan }}
              </h1>
            </div>
          </div>
          <p
            class="text-center mb-3 animate__animated animate__zoomIn animate__delay-2s"
          >
            Kepada Yth; <br />
            Bapak/Ibu/Saudara/i
          </p>
          <v-card
            variant="tonal"
            color="dark"
            class="animate__animated animate__zoomIn animate__delay-2s"
            shadow
            rounded="0"
          >
            <v-card-text class="text-center">
              <p class="text-[15px]">
                {{ props.name ? props.name : "Belum Ada Nama" }}
              </p>
            </v-card-text>
          </v-card>
          <div
            class="text-center animate__animated animate__zoomIn animate__delay-2s"
          >
            <p class="text-[10px] mt-2">
              Mohon maaf apabila ada kesalahan penulisan nama/gelar.
            </p>
          </div>
          <div
            class="flex justify-center mt-3 animate__animated animate__zoomIn animate__delay-2s"
          >
            <v-btn
              rounded="0"
              @click="openInvitation"
              color="primary"
              size="small"
              prepend-icon="mdi-email-open-heart-outline"
            >
              Buka Undangan
            </v-btn>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>
