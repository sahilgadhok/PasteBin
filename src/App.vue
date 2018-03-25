<template>
  <div id="app" class="container-fluid">
    <h1>FileHub</h1>
    <form class="text-right">
      <div v-if="user">
        <router-link exact to="/profile">Profile</router-link>
        <button class="btn btn-default" type="button">Logout</button>
      </div>
      <div v-else>
        <label>Username</label>
        <label>Password</label>
        <button class="btn btn-default" type="button">Login</button>
      </div>
    </form>
    <ul class="nav nav-pills">
      <router-link tag="li" exact active-class="active"
      v-for="route in routes" v-bind:key="route.path" v-bind:to="route.path">
        <a href="javascript:void(0)">{{route.name}}</a>
      </router-link>
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
      user: false,
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
