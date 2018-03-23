<template>
  <div id="search-page">
    <h2>File Search</h2>
    <div style="margin-bottom:10px">
      <button class="btn btn-primary" type="button"
      v-on:click="searchFiles()">Search</button>
    </div>
    <div class="table-responsive">
      <search-table v-bind:smart-table="table"></search-table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import SmartTable from 'smart-table-core';
import SearchSmartTable from './SearchSmartTable.vue';

export default {
  name: 'Search',
  components: {
    'search-table': SearchSmartTable
  },
  data: function () {
    return {
      table: SmartTable({
        data: []
      }, function (stTable) {
        stTable.tableState.slice.size = 10;
        return {
          refresh: function (newData) {
            stTable.data.splice();
            newData.forEach(function (row) {
              this.push(row);
            }, stTable.data);
            stTable.table.exec();
          }
        }
      })
    };
  },
  methods: {
    searchFiles: function () {
      const vm = this;
      // Get public files only
      // TODO - Allow user to search their private files
      axios.get('https://api.github.com/gists/public?per_page=100')
        .then(function (response) {
          const arr = response.data;
          const newData = arr.map(function (row) {
            const file = row.files[Object.keys(row.files)[0]];
            return {
              id: row.id,
              filename: file.filename,
              user: (row.owner && typeof row.owner === 'object' &&
                     typeof row.owner.login === 'string') ? row.owner.login : '',
              datetime: row.created_at,
              url: '#/file?hash=' + row.id
            };
          });
          vm.table.refresh(newData);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  }
};
</script>

<style scoped>
</style>
