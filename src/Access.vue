<template>
  <div>
    <div v-if="sessionToken">
      <router-link class="btn btn-default" exact
      v-bind:to="'/profile/' + sessionUsername">Profile</router-link>
      <button class="btn btn-danger" type="button"
      v-on:click="signOut()">Sign Out</button>
    </div>
    <div v-else>
      <button class="btn btn-default" type="button"
      v-on:click="openSignInModal()">Sign In</button>
      <button class="btn btn-default" type="button"
      v-on:click="openSignUpModal()">Sign Up</button>
    </div>
    <modal name="signIn" width="300" v-bind:click-to-close="false"
    v-bind:adaptive="true">
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
    v-bind:adaptive="true">
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
    <modal name="signupSuccess" width="300" height="auto" v-bind:adaptive="true">
      <div class="container-fluid" style="margin-top:20px">
        <div class="panel panel-success">
          <div class="panel-heading">
            <h3 class="panel-title">Signup Successful</h3>
          </div>
          <div class="panel-body">
            <p>You can sign in with your username and password via the Sign In button</p>
          </div>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import axios from 'axios';
const cloudUrl = 'https://us-central1-filehub-f9a91.cloudfunctions.net/api';

export default {
  name: 'Account',
  data: function () {
    return {
      sessionUsername: '',
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
      if (!this.signInForm.username ||
          !this.signInForm.password) {
        return;
      }

      const vm = this;
      axios.post(cloudUrl + '/signin', {
          username: this.signInForm.username,
          password: this.signInForm.password
        })
        .then(function (response) {
          vm.sessionUsername = vm.signInForm.username;
          vm.sessionToken = response.data.token;
          vm.closeSignInModal();
        })
        .catch(function (error) {
          console.error(error);
          if (error.message) {
            console.error(error.message);
          }
        });
    },
    signOut: function () {
      const vm = this;
      axios.post(cloudUrl + '/signout', {
          username: this.sessionUsername,
          token: this.sessionToken
        })
        .then(function () {
          vm.sessionUsername = '';
          vm.sessionToken = null;
        });
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
      const vm = this;
      axios.post(cloudUrl + '/signup', {
          username: this.signUpForm.username,
          password: this.signUpForm.password
        })
        .then(function () {
          vm.closeSignUpModal();
          vm.$modal.show('signupSuccess');
        })
        .catch(function (error) {
          console.error(error);
          if (error.message) {
            console.error(error.message);
          }
        });
    }
  }
}
</script>

<style scoped>
</style>
