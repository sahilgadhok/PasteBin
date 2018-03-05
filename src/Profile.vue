<template>
  <div class="container-fluid">
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
var timStruggles = {
  name: "Tim Struggles",
  email: "timstruggles@mail.com",
  userName: 'TheStruggle',
  pastes: [
    {
      name: 'gistfile1.txt',
      url: '#/file?hash=janlazo/a828a18c9ea19b9f84b2cc0c640a870d/raw/04682927b385ecc2eee74c5e40f2e2f022254023/gistfile1.txt'
    }
  ],
  friends: [
    {userName: "Foo"}
  ]
}
// the info of the user's friend
var foo = {
  name: "Foo",
  email: "foo@mail.com",
  userName: 'Foo',
  pastes: [],
  friends: [
    {userName: "TheStruggle"}
  ]
}

var profileInfo = timStruggles

export default {
  name: 'Profile',
  data: function () {
    return {
      timStruggles: timStruggles,
      foo: foo,
      profileInfo: profileInfo,
      index: 0
    };
  },
  methods: {
    // Switch the info when Friend is selected
    // Sice there is only front end create adhoc method
    // rather than pull from db
    switchInfo: function() {
      if (this.index == 0) {
        //console.log("tim")
        this.index = 1
        this.profileInfo = this.foo
      } else {
        //console.log("Foo")
        this.index = 0
        this.profileInfo = this.timStruggles
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
