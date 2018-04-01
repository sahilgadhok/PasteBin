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
import SmartTable from 'smart-table-core';
import SearchSmartTable from './SearchSmartTable.vue';

const firebase = (typeof window === 'object' &&
                  typeof window.firebase === 'object') ?
                  window.firebase : null;

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
            stTable.data.length = 0;
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
      if (!firebase) {
        return;
      }

      const vm = this;
      const db = firebase.database();
      db.ref('/public_files').once('value')
        .then(function (snapshot) {
          const fids = Object.keys(snapshot.val());
          const p = Promise.all(fids.map(function (fid) {
              return db.ref('/file/' + fid).once('value').then(function (snapshot) {
                const file = snapshot.val();
                return {
                  id: fid,
                  filename: file.name,
                  datetime: file.created,
                  url: '/file/' + fid
                };
              });
            }))
            .then(function (newData) {
              vm.table.refresh(newData);
            });
          return p;
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
