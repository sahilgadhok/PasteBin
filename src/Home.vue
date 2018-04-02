<template>
  <div id="upload-page">
    <h2>Upload File or Paste Text</h2>
    <div class="bg-success" v-if="newFile.show">File Created!
      <router-link v-bind:to="newFile.url">{{'/#' + newFile.url}}</router-link>
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
        v-on:click="submitFile()" v-bind:disabled="inputDisabled">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

const firebase = (typeof window === 'object' &&
                  typeof window.firebase === 'object') ?
                  window.firebase : null;
const cloudUrl = 'https://us-central1-filehub-f9a91.cloudfunctions.net/api';

export default {
  name: 'Home',
  data: function () {
    return {
      inputDisabled: false,
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
      vm.inputDisabled = true;
      vm.error = '';

      function send(filename, content) {
          if (vm.sessionToken) {
            axios.post(cloudUrl + '/file', {
                name: filename,
                content: content,
                token: this.sessionToken
              })
              .then(function (response) {
                // refresh file contents
                console.log(response.data);
              })
              .catch(function (error) {
                console.error(error);
                if (error.message) {
                  console.error(error.message);
                }
              });

            return;
          }

          if (!firebase) {
            vm.error = 'Failed to create the file';
            vm.inputDisabled = false;
            return;
          }

          vm.newFile.show = false;
          const db = firebase.database();
          // TODO: What if the file object doesn't exist?
          const newFileEntry = db.ref('/file').push();
          newFileEntry.set({
              name: filename,
              content: content,
              created: (new Date()).toISOString()
            })
            .then(function () {
              return db.ref('/public_files/' + newFileEntry.key).set(1);
            })
            .then(function () {
              vm.newFile.url = '/file/' + newFileEntry.key;
              vm.newFile.show = true;
              vm.inputDisabled = false;
            });
      }

      if (vm.file) {
        const reader = new FileReader();
        reader.readAsText(vm.file);
        reader.onload = function (event) {
          if (!event.target.result) {
            vm.error = 'File is empty';
            vm.inputDisabled = false;
            return;
          }

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
