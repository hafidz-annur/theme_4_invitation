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
    <img
      :src="props.data?.foto_opening"
      alt="Amantrana"
      class="h-full object-cover"
    />
    <div
      class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#41729F]/40 to-[#6786b8] "
    >
      <div class="p-5">
        <div
          class="text-center pt-5 animate__animated animate__zoomIn animate__delay-1s"
        >
          <p
            v-html="props.caption?.islam?.pembuka[2]"
            class="text-[12px] mt-3"
          ></p>
        </div>

        <div
          class="absolute bottom-[7rem] left-0 w-full flex justify-center animate__animated animate__zoomIn animate__delay-2s"
        >
          <div class="w-full text-center">
            <h1 class="text-4xl">
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
              Save Calendar
            </v-btn>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<style>
.flip-clock__piece {
  margin: 0 10px !important;
}
</style>
