// Dependencias
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

// Iconos
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { libraryIcons } from "./hook/iconos.fontAwesome";
libraryIcons()

// Lanzamiento de la app
createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(createPinia())
  .use(router)
  .mount("#app");
