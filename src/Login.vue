<template>
  <div v-if="sessionToken">
    <router-link class="btn btn-default" exact
    v-bind:to="'/profile/' + sessionUsername">Profile</router-link>
    <button class="btn btn-danger" type="button"
    v-on:click="logout()">Logout</button>
  </div>
  <div v-else>
    <modal name="login" width="400"
    v-bind:adaptive="true" v-bind:click-to-close="false">
      <div class="container-fluid" style="margin-top:20px">
        <form class="form-horizontal" v:on-submit.prevent="onSubmit">
          <div class="form-group">
            <label class="col-sm-3" for="acct-username">Username</label>
            <div class="col-sm-9">
              <input id="acct-username" class="form-control" type="text"
              v-model="form.username">
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-3" for="acct-password">Password</label>
            <div class="col-sm-9">
              <input id="acct-password" class="form-control" type="password"
              v-model="form.password">
            </div>
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
