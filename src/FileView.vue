<template>
  <div>
    <div>{{filename}}</div>
    <pre>{{content}}</pre>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'FileView',
  props: ['hash'],
  data: function () {
    // Assume that the hash points to a valid Github Gist
    const resourcePrefix = 'https://gist.githubusercontent.com/';
    const filepathArr = this.hash.split('/');
    const data = {
      filename: filepathArr[filepathArr.length - 1],
      content: ''
    };

    axios.get(resourcePrefix + this.hash, {
        responseType: 'text',
      })
      .then(function (response) {
        data.content = response.data;
      })
      .catch(function (error) {
        console.error(error);
      });

    return data;
  }
}
</script>

<style scoped>
</style>
