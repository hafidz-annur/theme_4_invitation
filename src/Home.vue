<script setup>
import { ref, onBeforeMount, onMounted, onUnmounted } from "vue";

import Cover from "./components/Cover.vue";
import Opening from "./components/Opening.vue";
import Mempelai from "./components/Mempelai.vue";
import Quotes from "./components/Quotes.vue";
import Acara from "./components/Acara.vue";
import Lokasi from "./components/Lokasi.vue";
import Galeri from "./components/Galeri.vue";
import Hadiah from "./components/Hadiah.vue";
import RSVP from "./components/RSVP.vue";
import Closing from "./components/Closing.vue";
import Menus from "./components/Menus.vue";
import biodata from "@/biodata/mempelai.js";
import quote from "@/biodata/quotes.js";
import caption from "@/biodata/caption.js";

const props = defineProps({ name: String });
const menu = ref();

const loading = ref(true);
const progress = ref(0);
const checkMenu = (values) => {
  menu.value = values;
  const element = document.getElementById(menu.value);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const data = ref(biodata);
const quotes = ref(quote);
const captions = ref(caption);

onBeforeMount(async () => {
  // Simulasi progress naik perlahan (0% ke 100%)
  while (progress.value < 100) {
    await new Promise((resolve) => setTimeout(resolve, 100)); // tiap 50ms
    progress.value += 10;
  }

  // Setelah progress penuh, matikan loading
  loading.value = false;
});

const clientHeight = ref(0);
const sectionIds = [
  "Pembukaan",
  "Mempelai",
  "Quotes",
  "Acara",
  "Lokasi",
  "Galeri",
  "Hadiah",
  "RSVP",
  "Penutupan",
];

onMounted(() => {
  const handleScroll = () => {
    clientHeight.value = document.documentElement.clientHeight;

    // Loop semua section dan cari yang sedang terlihat
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        const visible = rect.top >= 0 && rect.top <= clientHeight.value * 0.4; // 40% atas viewport

        if (visible) {
          menu.value = id;
          break; // berhenti di yang pertama terlihat
        }
      }
    }
  };

  window.addEventListener("scroll", handleScroll);
  // Jalankan sekali untuk inisialisasi
  handleScroll();

  // Bersihkan listener saat unmounted (opsional tapi disarankan)
  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });
});
</script>

<template>
  <v-app class="bg-gradient-to-r from-[#274472] to-[#172f57]">
    <div
      class="flex flex-col justify-center items-center w-full h-[100dvh]"
      v-if="loading"
    >
      <div
        class="flex justify-center animate__animated animate__pulse animate__infinite"
      >
        <img src="/public/favicon.png" alt="Āmantrana" class="w-14" />
      </div>

      <div class="w-[200px] mt-2">
        <v-progress-linear v-model="progress" color="white" height="20" rounded>
          <template v-slot:default="{ value }">
            <strong class="text-gray-700 text-[10px]"
              >{{ Math.ceil(value) }}%</strong
            >
          </template>
        </v-progress-linear>
      </div>
      <div class="px-5 text-center mt-3">
        <p class="text-md">
          Bersiaplah untuk kisah indah kami... <br />
          sebentar lagi tampil 💑
        </p>
      </div>
    </div>
    <v-container class="p-0 my-0" v-else>
      <v-row justify="center" class="p-0 m-0" no-gutters>
        <v-col md="5" cols="12">
          <div class="relative overflow-hidden">
            <Cover
              v-if="!menu"
              :data="data"
              :name="props?.name"
              @selected="checkMenu"
            />
            <div v-else>
              <Opening :data="data" :caption="captions" id="Pembukaan" />
              <Mempelai :data="data" id="Mempelai" />
              <Quotes :quote="quotes" id="Quotes" />
              <Acara :data="data" id="Acara" />
              <Lokasi :data="data" id="Lokasi" />
              <Galeri :data="data" id="Galeri" />
              <Hadiah :data="data" id="Hadiah" />
              <RSVP id="RSVP" />
              <Closing :data="data" :caption="captions" id="Penutupan" />

              <Menus :data="data" :active="menu" @selected="checkMenu" />
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<style></style>
