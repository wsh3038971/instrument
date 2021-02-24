import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import './assets/css/animate.min.css';

// import preview from "vue-photo-preview";
// import "vue-photo-preview/dist/skin.css";
// import _ from 'lodash'
// Vue.prototype._ = _
// 图片浏览插件
import gallery from 'img-vuer'

Vue.use(VueAwesomeSwiper)  // Swiper轮播组件
Vue.use(gallery)
Vue.use(Vant);
// Vue.use(preview);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
