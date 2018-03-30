import 'es6-promise/auto';
import Vue from 'vue';
import VueModal from 'vue-js-modal';
import VueRouter from 'vue-router';
import VueStash from 'vue-stash';
import App from './App.vue';
import routes from './routes.js';

// Register plugins
Vue.use(VueModal);
Vue.use(VueRouter);
Vue.use(VueStash);

// Render the app component to start the application
const router = new VueRouter({
  routes: routes
});
new Vue({
  el: '#app',
  data: {
    store: {
      sessionToken: null
    }
  },
  render: function (h) {return h(App);},
  router: router
});
