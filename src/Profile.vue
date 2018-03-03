<template>
  <div class="container-fluid">
	<div class="row">
	<div>
    <h3 class="profile-header animated slideInLeft">{{profileInfo.name}}'s Profile</h3>
	</div>
		<div class="col-md-3">
			<div>
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
					<ul>
						<h4 v-for="friend in profileInfo.friends">
							{{friend.userName}}
						</h4>
					</ul>
        		</div>
			</div>
		</div>
		<div class="col-md-3">
			<h3>Pastes</h3>
			<ul>
				<h4 v-for="paste in profileInfo.pastes">
					{{paste.text}}
				</h4>
			</ul>
		</div>
	</div>
</div>
</template>

<script>
import Vue from 'vue';
var profileInfo = {
  name: "Tim Struggles",
  email: "timstruggles@mail.com",
  userName: 'TheStruggle',
  pastes: [],
	friends: [
		{userName: "pasterer"},
		{userName: "teh pasterer"}
	]
}

export default {
  name: 'Profile',
  data: function () {
    return {
      profileInfo: profileInfo
    };
  }
}
</script>

<style scoped>

.subsection {
  outline: 1px solid black;
  padding: 5px;
}

.profile-header {
  text-align: center;
  /* padding-left: 5px; */
}
</style>
