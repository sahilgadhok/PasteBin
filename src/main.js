import axios from 'axios';
import 'es6-promise/auto';
import Vue from 'vue';
import VueLoadingOverlay from 'vue-loading-overlay';
import VueModal from 'vue-js-modal';
import VueRouter from 'vue-router';
import VueStash from 'vue-stash';
import App from './App.vue';
import routes from './routes.js';

// Register plugins
Vue.use(VueLoadingOverlay);
Vue.use(VueModal);
Vue.use(VueRouter);
Vue.use(VueStash);

// Render the app component to start the application
const router = new VueRouter({
  routes: routes
});
const root = new Vue({
  el: '#app',
  data: {
    store: {
      sessionToken: null
    }
  },
  render: function (h) {return h(App);},
  router: router
});

// Show/Hide loading overlay on any AJAX request
let curloader;
function showLoader() {
  if (!curloader) {
    curloader = root.$loading.show();
  }
}
function hideLoader() {
  if (curloader) {
    curloader.hide();
    curloader = null;
  }
}
axios.interceptors.request.use(function (config) {
  showLoader();
  return config;
}, function (error) {
  hideLoader();
  return Promise.reject(error);
});
axios.interceptors.response.use(function (response) {
  hideLoader();
  return response;
}, function (error) {
  hideLoader();
  return Promise.reject(error);
});
