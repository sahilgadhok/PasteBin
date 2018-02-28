<template>
  <div>
    <button class="btn btn-default" type="button" v-on:click="searchFiles()">Search</button>
    <table>
      <thead>
        <tr>
          <th v-for="(prop, index) in table.props" v-bind:key="index">
            <span>{{table.headers[prop]}}</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in table.data" v-bind:key="row.id">
          <td v-for="(prop, index) in table.props" v-bind:key="index">
            <span>{{row[prop]}}</span>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td v-bind:colspan="table.props.length">1</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Search',
  data: function () {
    return {
      table: {
        props: ['filename', 'url'],
        headers: {
          filename: 'Filename',
          url: 'Url',
        },
        data: []
      }
    };
  },
  methods: {
    searchFiles: function () {
      let vm = this;
      axios.get('https://api.github.com/gists/public')
        .then(function (response) {
          const arr = response.data;
          console.log(arr);
          // TODO - Reduce this array to a collection of files
          vm.table.data = arr.map(function (row) {
            return {
              id: row.id,
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
