import 'es6-promise/auto';
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueStash from 'vue-stash';
import App from './App.vue';
import routes from './routes.js';

const router = new VueRouter({
  routes: routes
});

// Render the app component to start the application
Vue.use(VueRouter);
Vue.use(VueStash);
new Vue({
  el: '#app',
  data: {
    store: {
      userAccount: null
    }
  },
  render: function (h) {return h(App);},
  router: router
});
