<template>
  <div id="app" class="container-fluid">
    <header class="app-header">
      <h1>FileHub</h1>
      <login class="pull-right"></login>
    </header>
    <ul class="nav nav-pills">
      <router-link tag="li" active-class="active" exact
      v-for="route in routes" v-bind:key="route.path" v-bind:to="route.path">
        <a href="javascript:void(0)">{{route.name}}</a>
      </router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import routes from './routes.js';
import Login from './Login.vue';

export default {
  name: 'App',
  data: function () {
    return {
      // Display public/named routes only
      routes: routes.filter(function (route) {
        return route.name && typeof route.name === 'string';
      })
    };
  },
  components: {
    login: Login
  }
}
</script>

<style scoped>
.app-header {
  margin-top: 20px;
}
.app-header > h1 {
  display: inline-block;
  margin-top: 0;
}
</style>
