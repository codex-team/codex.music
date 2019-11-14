import Vue from 'vue';
import App from './App.vue';
import uniqueId from 'vue-unique-id';

Vue.config.productionTip = false;

Vue.use(uniqueId);

new Vue({
  render: h => h(App)
}).$mount('#app');
