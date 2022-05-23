import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

// libreria
import { library } from "@fortawesome/fontawesome-svg-core";
// iconos
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";



library.add(faBars, faGithub, faLinkedin, faInstagram, faCode, faPen, faMugHot, faCircleXmark)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(createPinia()).use(router).mount("#app");
