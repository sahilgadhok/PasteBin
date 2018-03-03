<template>
  <div>
    <div>Username {{username}}</div>
    <div>Groups
      <span v-for="(group, index) in groups" v-bind:key="index">{{group}}</span>
    </div>
    <div>Files
      <a target="_blank" v-for="file in files" v-bind:key="file.url" v-bind:href="file.url">{{file.name}}</a>
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
        name: 'gistfile1.txt',
        url: '#/file?hash=janlazo/a828a18c9ea19b9f84b2cc0c640a870d/raw/04682927b385ecc2eee74c5e40f2e2f022254023/gistfile1.txt'
      }]
    };
  }
}
</script>

<style scoped>
</style>
