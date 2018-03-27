<template>
  <div v-if="sessionToken">
    <router-link class="btn btn-default" exact
    v-bind:to="'/profile/' + sessionUsername">Profile</router-link>
    <button class="btn btn-default" type="button"
    v-on:click="logout()">Logout</button>
  </div>
  <form class="form-inline" v:on-submit.prevent="onSubmit" v-else>
    <div class="form-group">
      <label for="acct-username">Username</label>
      <input id="acct-username" type="text" v-model="form.username">
    </div>
    <div class="form-group">
      <label for="acct-password">Password</label>
      <input id="acct-password" type="password" v-model="form.password">
    </div>
    <button class="btn btn-default" type="button"
    v-on:click="login()">Login</button>
  </form>
</template>

<script>
export default {
  name: 'Account',
  data: function () {
    return {
      form: {
        username: '',
        password: '',
      },
      sessionUsername: 'TheStruggle'
    };
  },
  store: ['sessionToken'],
  methods: {
    login: function () {
      this.sessionToken = 'foobar';
    },
    logout: function () {
      this.sessionToken = null;
    }
  }
}
</script>

<style scoped>
</style>
