<template>
  <div id="app" class="container-fluid">
    <h1>FileHub</h1>
    <ul class="nav nav-tabs">
      <li v-for="route in routes" v-bind:key="route.path">
        <router-link exact v-bind:to="route.path">{{route.name}}</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import routes from './routes.js';

export default {
  name: 'App',
  data: function () {
    return {
      // Display public/named routes only
      routes: routes.filter(function (route) {
        return route.name && typeof route.name === 'string';
      })
    };
  }
}
</script>

<style scoped>
</style>
