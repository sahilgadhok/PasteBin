<template>
  <form v:on-submit.prevent="onSubmit">
    <div class="form-group">
      <label for="upload-file">File Upload</label>
      <input id="upload-file" type="file" accept="text"
      v-on:change="checkFile($event)">
    </div>
    <button class="btn btn-default" type="button"
    v-on:click="submitFile()">Submit</button>
  </form>
</template>

<script>
import axios from 'axios';

// Create a new (Github) gist with the given file
// Return a promise of the POST request
function createFile(file) {
  const files = {};
  files[file.filename] = {content: file.content};
  const promise = axios.post('https://api.github.com/gists', {
    files: files,
    description: '',
    public: true
  });
  return promise;
}

export default {
  name: 'Home',
  data: function () {
    return {
    };
  },
  methods: {
    checkFile: function (event) {
      const files = event.target.files;
      this.file = files.length > 0 ? files[0] : undefined;
    },
    submitFile: function () {
      const vm = this;

      if (!vm.file) {
        console.error('Complete all form inputs first');
        return;
      }

      const reader = new FileReader();
      reader.readAsText(vm.file);
      reader.onload = function (event) {
        createFile({
            filename: vm.file.name,
            content: event.target.result
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.error(error);
          });
      }
    }
  }
}
</script>

<style scoped>
</style>
