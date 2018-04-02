<template>
  <div class="container-fluid" v-if="profileInfo">
    <div class="row panel">
      <div class="panel-heading">
        <h2 class="profile-header">Your Profile</h2>
      </div>
      <div class="col-md-4 col-sm-4 col-xs">
        <!-- The side panel containing the account info -->
        <div class="panel panel-primary" id="accountInfo">
          <div class="panel-heading">
            <h3 class="panel-title">Account Info</h3>
          </div>
          <div class="panel-body">
            <div class="form-group">
              <label for="profile-username">User Name</label>
              <h4 id="profile-username">{{username}}</h4>
            </div>
            <div class="form-group">
              <label for="profile-email">Email Address</label>
              <input id="profile-email" class="form-control"
              v-model="profileInfo.email">
            </div>
            <button class="btn btn-default" type="button"
            v-on:click="updateInfo()">Update</button>
          </div>
        </div>
      </div>
      <!-- The main panel containing the users Files the user has uploaded -->
      <div class="col-md-8 col-sm-8">
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h3 class="panel-title">Uploads</h3>
          </div>
          <div class="panel-body" v-if="sessionToken && profileInfo.files">
            <h4 v-for="file in profileInfo.files" v-bind:key="makeRowKey(file)">
              <router-link exact v-bind:to="'/file/' + file.id">{{file.name}}</router-link>
            </h4>
          </div>
          <div class="panel-body" v-else>
            <h4>No Uploads available</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

const cloudUrl = 'https://us-central1-filehub-f9a91.cloudfunctions.net/api';

export default {
  name: 'Profile',
  props: {
    username: {
      type: String,
      required: true,
    }
  },
  data: function () {
    return {
      profileInfo: null
    }
  },
  store: ['sessionToken'],
  methods: {
    updateProfile: function (username) {
      if (!this.sessionToken) {
        this.profileInfo = null;
        return;
      }
      const vm = this;
      axios.post([cloudUrl, 'profile', username].join('/'), {
          token: this.sessionToken
        })
        .then(function (response) {
          const file = response.data.file;
          vm.profileInfo = {
            username: response.data.username,
            email: response.data.email,
            files: Object.keys(file).map((key) => ({
              id: key,
              name: file[key]
            }))
          }
        })
        .catch(function (error) {
          console.error(error);
        })
    },
    updateInfo: function () {
      const vm = this;
      axios.put([cloudUrl, 'user', this.username].join('/'), {
          email: this.profileInfo.email,
          token: this.sessionToken
        })
        .then(function () {
          vm.updateProfile(vm.username);
        })
        .catch(function (error) {
          console.error(error);
        })
    },
    makeRowKey: function (row) {
      return [row.id, Date.now()].join('-');
    }
  },
  created: function () {
    this.updateProfile(this.username);
  },
  watch: {
    username: function (newVal) {
      this.updateProfile(newVal);
    },
    sessionToken: function () {
      this.updateProfile(this.username);
    }
  }
}
</script>

<style scoped>
.panel {
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
  background: rgb(250, 250, 250)
}

.profile-header {
  text-align: center;
}

#accountInfo {
  overflow-wrap: break-word;
}

.form-group {
  border-bottom: 1px;
  border-bottom-style: solid;
  border-bottom-color: rgba(0,0,0,0.25);
}
</style>
