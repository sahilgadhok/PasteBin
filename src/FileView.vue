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
  data: function () {
    let data = {
      filename: 'package.json',
      content: ''
    };

    axios.get(data.filename, {
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
