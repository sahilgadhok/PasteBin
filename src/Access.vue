<template>
  <div v-if="sessionToken">
    <router-link class="btn btn-default" exact
    v-bind:to="'/profile/' + sessionUsername">Profile</router-link>
    <button class="btn btn-danger" type="button"
    v-on:click="signOut()">Sign Out</button>
  </div>
  <div v-else>
    <modal name="signIn" width="300" v-bind:click-to-close="false"
    v-bind:adaptive="true" v-bind:scrollable="true">
      <div class="container-fluid" style="margin-top:20px">
        <form v:on-submit.prevent="onSubmit">
          <div class="form-group">
            <label for="acct-username">Username</label>
            <input id="acct-username" class="form-control" type="text"
            v-model="signInForm.username">
          </div>
          <div class="form-group">
            <label for="acct-password">Password</label>
            <input id="acct-password" class="form-control" type="password"
            v-model="signInForm.password">
          </div>
          <div class="pull-right">
            <button class="btn btn-danger" type="button"
            v-on:click="closeSignInModal()">Close</button>
            <button class="btn btn-primary" type="button"
            v-on:click="signIn()">Sign In</button>
          </div>
        </form>
      </div>
    </modal>
    <modal name="signUp" width="300" v-bind:click-to-close="false"
    v-bind:adaptive="true" v-bind:scrollable="true">
      <div class="container-fluid" style="margin-top:20px">
        <form v:on-submit.prevent="onSubmit">
          <div class="form-group">
            <label for="acct-username">Username</label>
            <input id="acct-username" class="form-control" type="text"
            v-model="signUpForm.username">
          </div>
          <div class="form-group">
            <label for="acct-password">Password</label>
            <input id="acct-password" class="form-control" type="password"
            v-model="signUpForm.password">
          </div>
          <div class="pull-right">
            <button class="btn btn-danger" type="button"
            v-on:click="closeSignUpModal()">Close</button>
            <button class="btn btn-primary" type="button"
            v-on:click="signUp()">Sign Up</button>
          </div>
        </form>
      </div>
    </modal>
    <button class="btn btn-default" type="button"
    v-on:click="openSignInModal()">Sign In</button>
    <button class="btn btn-default" type="button" disabled
    v-on:click="openSignUpModal()">Sign Up</button>
  </div>
</template>

<script>
export default {
  name: 'Account',
  data: function () {
    return {
      sessionUsername: 'TheStruggle',
      signInForm: {
        username: '',
        password: '',
      },
      signUpForm: {
        username: '',
        password: '',
      },
    };
  },
  store: ['sessionToken'],
  methods: {
    openSignInModal: function () {
      this.$modal.show('signIn');
    },
    closeSignInModal: function () {
      this.$modal.hide('signIn');
      // Reset user input
      this.signInForm.username = '';
      this.signInForm.password = '';
    },
    signIn: function () {
      this.closeSignInModal();
      this.sessionToken = 'foobar';
    },
    signOut: function () {
      this.sessionToken = null;
    },
    openSignUpModal: function () {
      this.$modal.show('signUp');
    },
    closeSignUpModal: function () {
      this.$modal.hide('signUp');
      // Reset user input
      this.signUpForm.username = '';
      this.signUpForm.password = '';
    },
    signUp: function () {
      this.closeSignUpModal();
    }
  }
}
</script>

<style scoped>
</style>
