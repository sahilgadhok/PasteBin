<template>
  <div id="upload-page">
    <h2>Upload File or Paste Text</h2>
    <div class="bg-success" v-if="newFile.show">File Created!
      <a target="_blank" v-bind:href="newFile.url">{{newFile.url}}</a>
    </div>
    <div class="bg-danger" v-if="error">{{error}}</div>
    <form v:on-submit.prevent="onSubmit">
      <div class="form-group">
        <input id="upload-file" type="file" accept="text"
        v-on:change="checkFile($event)">
      </div>
      <div class="form-group">
        <input class="form-control" type="text" placeholder="Filename"
        v-model="paste.filename">
        <textarea class="form-control" rows="10" v-model="paste.content">
        </textarea>
      </div>
      <div class="form-group">
        <button class="btn btn-danger" type="reset">Reset</button>
        <button class="btn btn-primary" type="button"
        v-on:click="submitFile()">Submit</button>
      </div>
    </form>
  </div>
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
      error: '',
      newFile: {
        url: '',
        show: false,
      },
      paste: {
        filename: '',
        content: ''
      }
    };
  },
  methods: {
    checkFile: function (event) {
      const files = event.target.files;
      this.file = files.length > 0 ? files[0] : undefined;
    },
    submitFile: function () {
      const vm = this;

      if (!vm.file && !(vm.paste.filename && vm.paste.content)) {
        vm.error = 'No file or invalid paste';
        return;
      }
      vm.error = '';

      function send(filename, content) {
          vm.newFile.show = false;
          createFile({
              filename: filename,
              content: content
            })
            .then(function (response) {
              vm.newFile.url = response.data.html_url;
              vm.newFile.show = true;
            })
            .catch(function () {
              vm.error = 'Failed to create the file';
            });
      }

      if (vm.file) {
        const reader = new FileReader();
        reader.readAsText(vm.file);
        reader.onload = function (event) {
          send(vm.file.name, event.target.result);
        };
      } else {
        send(vm.paste.filename, vm.paste.content);
      }
    }
  }
}
</script>

<style scoped>
</style>
