<template>
  <div id="app" class="container-fluid">
    <h1>File Host App</h1>
    <ul>
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
      routes: routes.filter(function (route) {
        return route.name && typeof route.name === 'string';
      })
    };
  }
}
</script>

<style scoped>
</style>
