import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './routes.js';

const router = new VueRouter({
  routes: routes
});

Vue.use(VueRouter);
new Vue({
  el: '#app',
  render: function (h) {return h(App);},
  router: router
});
