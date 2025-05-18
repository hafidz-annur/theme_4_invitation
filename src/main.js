import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Countdown from "vue3-flip-countdown";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Vuetify imports
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader

export default createVuetify({
  icons: {
    defaultSet: "mdi",
  },
});

const myCustomLightTheme = {
  dark: false,
  colors: {
    primary: "#274472", // Navy Blue (utama)
    secondary: "#41729F", // Muted Blue (aksen)
    background: "#F4F6FA", // Latar belakang abu kebiruan yang lembut
    surface: "#FFFFFF", // Permukaan putih bersih
    text: "#1C1C1C", // Teks utama: hampir hitam
    success: "#3CB371", // Hijau sejuk (elegan)
    warning: "#FFC107", // Kuning amber (masih cocok dengan biru)
    error: "#C0392B", // Merah elegan
    info: "#2980B9", // Biru terang tapi tetap kalem
  },
};

// Vuetify instance
const vuetify = createVuetify({
  theme: {
    defaultTheme: "myCustomLightTheme",
    themes: {
      myCustomLightTheme,
    },
  },
  components,
  directives,
});

// Styles
import "./assets/main.css";

AOS.init({
  duration: 1000,
});

const app = createApp(App);
app.use(vuetify);
app.use(router);
app.use(Countdown);
app.mount("#app");
