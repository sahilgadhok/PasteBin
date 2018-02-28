<template>
  <div>
    <div>Username {{username}}</div>
    <div>Groups
      <span v-for="(group, index) in groups" v-bind:key="index">{{group}}</span>
    </div>
    <div>Files
      <a v-for="file in files" v-bind:key="file.url" v-bind:href="file.url">{{file.name}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data: function () {
    return {
      username: 'Foo',
      groups: ['Bar'],
      files: [{
        name: 'package.json',
        url: './index.html#/file',
      }]
    };
  }
}
</script>

<style scoped>
</style>
