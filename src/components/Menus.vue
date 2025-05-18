<script setup>
import { ref, onMounted, watch } from "vue";

const props = defineProps({ data: String, active: String });
const emit = defineEmits(["selected"]);

let intervalId;
const audio = ref(null);
const autoplay_menu = ref(false);
const autoplay_music = ref(false);
const menus = ref([
  {
    icon: "mdi-home",
    title: "Pembukaan",
  },
  {
    icon: "mdi-account-heart-outline",
    title: "Mempelai",
  },
  {
    icon: "mdi-comment-quote-outline",
    title: "Quotes",
  },
  {
    icon: "mdi-calendar-star",
    title: "Acara",
  },
  {
    icon: "mdi-map-marker-radius-outline",
    title: "Lokasi",
  },
  {
    icon: "mdi-multimedia",
    title: "Galeri",
  },
  {
    icon: "mdi-gift-open-outline",
    title: "Hadiah",
  },
  {
    icon: "mdi-send-variant-outline",
    title: "RSVP",
  },
  {
    icon: "mdi-emoticon-wink-outline",
    title: "Penutupan",
  },
]);

const selected = ref(null);
const selectedMenu = () => {
  emit("selected", selected.value);
  if (autoplay_menu.value) {
    autoplay_menu.value = false;
    clearInterval(intervalId);
  }
};

const autoplayMenu = () => {
  if (autoplay_menu.value) {
    let index = menus.value.findIndex((menu) => menu.title === selected.value);
    const menus_count = menus.value.length;

    intervalId = setInterval(() => {
      if (index >= menus_count) {
        autoplay_menu.value = false;
        selected.value = "Pembukaan";
        clearInterval(intervalId);
        emit("selected", selected.value);
        return;
      }

      const element = menus.value[index].title;
      selected.value = element;
      emit("selected", selected.value);
      index++;
    }, 5000);
  } else {
    clearInterval(intervalId);
  }
};

const playMusic = () => {
  if (!audio.value) return;

  if (audio.value.paused) {
    audio.value
      .play()
      .then(() => {
        autoplay_music.value = true;
      })
      .catch((err) => {
        console.error("Audio play failed:", err);
      });
  } else {
    audio.value.pause();
    autoplay_music.value = false;
  }
};

watch(() => {
  if (props.active) {
    selected.value = props.active;
  }
});

onMounted(() => {
  audio.value = new Audio(props.data?.musik);
  autoplay_menu.value = true;
  autoplayMenu();
  playMusic();
});
</script>

<template>
  <div class="fixed bottom-[60px] right-7 z-[9999] flex flex-col">
    <v-btn
      size="x-small"
      color="primary"
      :icon="!autoplay_menu ? 'mdi-play-outline' : 'mdi-pause'"
      @click="
        autoplay_menu = !autoplay_menu;
        autoplayMenu();
      "
      class="mb-2"
    />
    <v-btn
      size="x-small"
      color="primary"
      :icon="!autoplay_music ? 'mdi-volume-off' : 'mdi-volume-high'"
      @click="playMusic()"
    />
  </div>
  <div class="fixed bottom-0 left-0 z-[9999] w-full">
    <v-tabs
      v-model="selected"
      align-tabs="center"
      height="50"
      stacked
      center-active
      class="bg-primary rounded-none"
      @update:model-value="selectedMenu()"
    >
      <v-tab
        density="compact"
        v-for="item in menus"
        :value="item.title"
        class="p-0"
        :class="item.title == selected ? 'bg-white text-primary' : null"
      >
        <v-icon :icon="item.icon" size="20" />
        <p class="text-[10px]" :class="item.title == selected ? 'text-primary' : null">
          {{ item.title }}
        </p>
      </v-tab>
    </v-tabs>
  </div>
</template>
