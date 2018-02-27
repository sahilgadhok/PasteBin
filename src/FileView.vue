<template>
  <div>
    <div>{{filename}}</div>
    <pre>{{content}}</pre>
  </div>
</template>

<script>
import fetchPonyfill from 'fetch-ponyfill';
const {fetch} = fetchPonyfill();

export default {
  name: 'FileView',
  data: function () {
    let data = {
      filename: 'package.json',
      content: ''
    };

    fetch(data.filename)
      .then(function (response) {
        return response.text();
      })
      .then(function (text) {
        data.content = text;
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
