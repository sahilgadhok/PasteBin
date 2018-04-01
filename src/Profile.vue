<template>
  <div class="container-fluid" v-if="profileInfo">
    <div class="row panel">
      <div class="panel-heading">
        <!-- Differentiate friends from yourself -->
        <h3 class="profile-header" v-if="me">Your Profile</h3>
        <h3 class="profile-header" v-else>{{profileInfo.name}}'s Profile</h3>
      </div>
      <div class="col-md-4 col-sm-4 col-xs">
        <!-- The side panel containing the account info -->
        <div class="panel panel-primary" id="accountInfo">
          <div class="panel-heading ">
            <h5>Account Info </h5>
          </div>
          <div class="panel-body">
            <div class="form-group">
              <label for="profile-email">Email Address</label>
              <h4 id="profile-email">{{profileInfo.email}}</h4>
            </div>
            <div class="form-group">
              <label for="profile-username">User Name</label>
              <h4 id="profile-username">{{profileInfo.username}}</h4>
            </div>
            <div class="form-group">
              <label for="friends">Friends</label>
              <div v-if="profileInfo.friends">
                <h4 v-for="friend in profileInfo.friends" v-bind:key="friend.name">
                  <router-link exact v-bind:to="'/profile/' + friend.username"
                  >{{friend.username}}</router-link>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- The main panel containing the users Files the user has uploaded -->
      <div class="col-md-8 col-sm-8">
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h5>Uploads</h5>
          </div>
          <div class="panel-body" v-if="sessionToken && profileInfo.files">
            <h4 v-for="paste in profileInfo.files" v-bind:key="paste.name">
              <router-link exact v-bind:to="paste.url">{{paste.name}}</router-link>
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

// TODO: move to database
// const profiles = [
//   {
//     name: 'Tim Struggles',
//     email: 'timstruggles@mail.com',
//     username: 'TheStruggle',
//     pastes: [
//       {
//         name: 'gistfile1.txt',
//         url: '/file/a828a18c9ea19b9f84b2cc0c640a870d'
//       }
//     ],
//     friends: [
//       {username: 'Foo'}
//     ]
//   },
//   {
//     name: 'Foo',
//     email: 'foo@mail.com',
//     username: 'Foo',
//     friends: [
//       {username: 'TheStruggle'}
//     ]
//   }
// ];
// TODO: move to host server
// function getProfile(username) {
//   if (!username) {
//     return null;
//   }
//   const matches = profiles.filter(function (row) {
//     return row.username === this.toString();
//   }, username);
//   return matches.length > 0 ? matches[0] : null;
// }

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
  computed: {
    me: function () {
      return true;
    }
  },
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
          vm.profileInfo = response.data;
        })
        .catch(function (error) {
          console.error(error);
        })
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
