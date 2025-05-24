<script setup>
import { ref } from "vue";
import moment from "moment";

const props = defineProps({ data: Object, caption: Object });
const deadline = ref(props.data?.acara.resepsi.raw_tanggal + "10:00:00");

const saveCalendar = () => {
  const title =
    "&text=Undangan Pernikahan " +
    props.data?.mempelai.pria.nama_panggilan +
    " - " +
    props.data?.mempelai.wanita.nama_panggilan;
  const description =
    "&details=Dalam+perjalanan+yang+penuh+rasa+dan+doa%2C%0Akami+memantapkan+hati+untuk+melangkah+bersama+dalam+ikatan+suci.%0AKami+mengundang+dengan+penuh+cinta+dan+harap%2C%0Aagar+Bapak%2FIbu%2FSaudara%2Fi+dapat+hadir%0Amerayakan+momen+bahagia+kami.";
  const location = "&location=" + props.data?.acara?.resepsi?.tempat;
  const dates =
    "&dates=" +
    moment(deadline.value).utc().format("YYYYMMDDTHHmmss[Z]") +
    "%2F" +
    moment(deadline.value).utc().format("YYYYMMDDTHHmmss[Z]");

  const url =
    "https://www.google.com/calendar/render?action=TEMPLATE" +
    title +
    description +
    location +
    dates;

  window.open(url, "_blank");
};
</script>
<template>
  <v-container height="100dvh" class="relative overflow-hidden p-0">
    <v-carousel
      height="89dvh"
      :show-arrows="false"
      :cycle="true"
      :interval="6000"
      hide-delimiters
    >
      <v-carousel-item
        v-for="(item, i) in props.data?.foto_opening"
        :key="i"
        :src="item"
        height="89dvh"
        cover
      ></v-carousel-item>
    </v-carousel>
    <div
      class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#A3B18A]/10 to-[#3c442d]"
    >
      <div class="p-5">
        <div
          class="text-center pt-5 animate__animated animate__zoomIn animate__delay-1s"
        >
          <p
            v-html="props.caption?.islam?.pembuka[0]"
            class="text-[12px] mt-3"
          ></p>
        </div>

        <div
          class="absolute bottom-[12rem] left-0 w-full flex justify-center animate__animated animate__zoomIn animate__delay-2s"
        >
          <div class="w-full text-center">
            <h1 class="text-4xl text-white">
              {{ props.data?.mempelai.pria.nama_panggilan }} &
              {{ props.data?.mempelai.wanita.nama_panggilan }}
            </h1>

            <p class="mb-3">
              {{ props.data?.acara.resepsi.tanggal_format }}
            </p>

            <vue3-flip-countdown
              countdownSize="1.4rem"
              labelSize=".8rem"
              mainColor="#fff"
              labelColor="#fff"
              :flipAnimation="false"
              :labels="{
                days: 'Hari',
                hours: 'Jam',
                minutes: 'Menit',
                seconds: 'Detik',
              }"
              :deadline="props.data?.acara?.resepsi?.raw_tanggal"
              class="animate__animated animate__zoomIn animate__delay-2s text-white"
            />

            <v-btn
              color="primary"
              size="small"
              prepend-icon="mdi-calendar"
              @click="saveCalendar"
              class="mt-3"
              rounded="0"
            >
              Simpan Tanggal
            </v-btn>
          </div>
        </div>
      </div>
    </div>
    <div class="absolute bottom-5 left-0">
      <div class="px-3">
        <Splide
          :options="{
            type: 'loop',
            perPage: 3,
            autoplay: true,
            interval: 1000,
            pagination: false,
            arrows: false,
            gap: 10,
          }"
          aria-label="Vue Splide Example"
        >
          <SplideSlide v-for="item in props.data?.foto_opening" :key="item">
            <img
              :src="item"
              alt="Amantrana"
              class="w-full h-[150px] object-cover rounded-lg"
            />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  </v-container>
</template>

<style>
.flip-clock__piece {
  margin: 0 10px !important;
}
</style>
