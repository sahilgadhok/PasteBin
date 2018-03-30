<template>
  <div v-if="sessionToken">
    <router-link class="btn btn-default" exact
    v-bind:to="'/profile/' + sessionUsername">Profile</router-link>
    <button class="btn btn-danger" type="button"
    v-on:click="logout()">Logout</button>
  </div>
  <div v-else>
    <modal name="login" width="300" v-bind:click-to-close="false"
    v-bind:adaptive="true" v-bind:scrollable="true">
      <div class="container-fluid" style="margin-top:20px">
        <form v:on-submit.prevent="onSubmit">
          <div class="form-group">
            <label for="acct-username">Username</label>
            <input id="acct-username" class="form-control" type="text"
            v-model="form.username">
          </div>
          <div class="form-group">
            <label for="acct-password">Password</label>
            <input id="acct-password" class="form-control" type="password"
            v-model="form.password">
          </div>
          <div class="pull-right">
            <button class="btn btn-danger" type="button"
            v-on:click="closeModal()">Close</button>
            <button class="btn btn-primary" type="button"
            v-on:click="login()">Login</button>
          </div>
        </form>
      </div>
    </modal>
    <button class="btn btn-default" type="button"
    v-on:click="openModal()">Login</button>
  </div>
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
    openModal: function () {
      this.$modal.show('login');
    },
    closeModal: function () {
      this.$modal.hide('login');
    },
    login: function () {
      this.closeModal();
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
