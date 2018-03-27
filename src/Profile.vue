<template>
  <div class="container-fluid" v-if="sessionToken && profileInfo">
    <div class="row panel">
      <div class="panel-heading">
        <!-- Differentiate friends from yourself -->
        <h3 class="profile-header" v-if="profileInfo.name == 'Tim Struggles'">Your Profile</h3>
        <h3 class="profile-header" v-if="profileInfo.name != 'Tim Struggles'">{{profileInfo.name}}'s Profile</h3>
      </div>
      <div class="col-md-4 col-sm-4 col-xs">
        <!-- The side panel containing the account info -->
        <div class="panel panel-primary" id="accountInfo">
          <div class="panel-heading ">
            <h5>Account Info </h5>
          </div>
          <div class="panel-body">
            <div class="form-group">
              <label for="email">Email Address</label>
              <h4 id="email">{{profileInfo.email}}</h4>
            </div>
            <div class="form-group">
              <label for="userName">User Name</label>
              <h4 id="userName">{{profileInfo.userName}}</h4>
            </div>
            <div class="form-group">
              <label for="friends">Friends</label>
              <h4 class="friendLink" v-for="friend in profileInfo.friends" v-bind:key="friend.name">
                <a v-on:click="switchInfo()">{{friend.userName}}</a>
              </h4>
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
          <div class="panel-body">
            <h4 v-for="paste in profileInfo.pastes" v-bind:key="paste.name">
              <a v-bind:href="paste.url">{{paste.name}}</a>
            </h4>
            <h4 v-if="profileInfo.pastes.length == 0">Your friend {{profileInfo.name}} hasn't uploaded andthing yet :(</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// The info of the currently logged in user
const timStruggles = {
  name: "Tim Struggles",
  email: "timstruggles@mail.com",
  userName: 'TheStruggle',
  pastes: [
    {
      name: 'gistfile1.txt',
      url: '#/file/a828a18c9ea19b9f84b2cc0c640a870d'
    }
  ],
  friends: [
    {userName: "Foo"}
  ]
}
// the info of the user's friend
const foo = {
  name: "Foo",
  email: "foo@mail.com",
  userName: 'Foo',
  pastes: [],
  friends: [
    {userName: "TheStruggle"}
  ]
}

export default {
  name: 'Profile',
  data: function () {
    return {
      index: 0
    };
  },
  store: ['sessionToken'],
  computed: {
    profileInfo: function () {
      if (!this.sessionToken) {
        return null;
      }

      if (this.index == 0) {
        return foo;
      }
      return timStruggles;
    }
  },
  methods: {
    // Switch the info when Friend is selected
    // Sice there is only front end create adhoc method
    // rather than pull from db
    switchInfo: function() {
      if (this.index == 0) {
        this.index = 1;
      } else {
        this.index = 0;
      }
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
