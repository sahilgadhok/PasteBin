<template>
  <div>
    <button class="btn btn-default" type="button" v-on:click="searchFiles()">Search</button>
    <table>
      <thead>
        <tr>
          <th v-for="header in table.headers">{{header}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in table.data">
          <td>{{row.filename}}</td>
          <td>{{row.url}}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td v-bind:colspan="table.headers.length">1</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import fetchPonyfill from 'fetch-ponyfill';
const {fetch, Headers, Request, Response} = fetchPonyfill();

export default {
  name: 'Search',
  data: function () {
    return {
      table: {
        headers: [
          'filename',
          'url',
        ],
        data: []
      }
    };
  },
  methods: {
    searchFiles: function () {
      let vm = this;
      fetch('https://api.github.com/gists/public')
        .then(function (response) {
          return response.json();
        })
        .then(function (arr) {
          console.log(arr);
          // TODO - Reduce this array to a collection of files
          vm.table.data = arr.map(function (row) {
            return {
              filename: row.files[Object.keys(row.files)[0]].filename,
              url: row.html_url
            }
          });
        })
        .catch(function (error) {
          console.error(error);
        })
    }
  }
}
</script>

<style scoped>
</style>
