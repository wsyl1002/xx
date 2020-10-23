import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueAwesomeSwiper from "vue-awesome-swiper";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

// import style (>= Swiper 6.x)
import "swiper/css/swiper.css";

import Header from "./components/Header";
Vue.component("header", Header);

Vue.use(VueAwesomeSwiper /* { default options with global component } */);
Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
