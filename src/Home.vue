<template>
  <form v:on-submit.prevent="onSubmit">
    <div class="form-group">
      <label for="upload-file">File Upload</label>
      <input id="upload-file" type="file" accept="text" v-on:change="checkFile($event)">
    </div>
    <button class="btn btn-default" type="button" v-on:click="submitFile()">Submit</button>
  </form>
</template>

<script>
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
      if (!this.file) {
        console.error('Complete all form inputs first');
        return;
      }

      let reader = new FileReader();
      reader.readAsText(this.file);
      reader.onload = function (event) {
        console.log(event.target.result);
      };
    }
  }
}
</script>

<style scoped>
</style>
