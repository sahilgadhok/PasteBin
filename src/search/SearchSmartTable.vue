<template>
  <table class="table table-striped">
    <col class="col-xs-4">
    <col class="col-xs-4">
    <col class="col-xs-4">
    <thead>
      <tr>
        <th v-for="(prop, index) in table.props" v-bind:key="index">
          <span>{{table.headers[prop]}}</span>
        </th>
      </tr>
      <tr>
        <th>
          <st-col-filter v-bind:smart-table="smartTable" st-filter="filename">
          </st-col-filter>
        </th>
      </tr>
    </thead>
    <tbody v-if="displayed.length > 0">
      <tr v-for="row in displayed" v-bind:key="makeRowKey(row)">
        <td v-for="(prop, index) in table.props" v-bind:key="index">
          <router-link v-if="prop === 'url'"
          v-bind:to="row.value[prop]">Link</router-link>
          <span v-else-if="prop === 'datetime'">{{prettifyDate(row.value[prop])}}</span>
          <span v-else>{{row.value[prop]}}</span>
        </td>
      </tr>
    </tbody>
    <tbody v-else>
      <tr><td v-bind:colspan="table.props.length">No data</td></tr>
    </tbody>
    <tfoot>
      <tr class="text-center">
        <td v-bind:colspan="table.props.length">
          <st-paginate v-bind:smart-table="smartTable"></st-paginate>
        </td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
import SmartTableVue from 'smart-table-vue';
import StColFilter from './StColFilter.vue';
import StPaginate from './StPaginate.vue';
import moment from 'moment';

export default {
  name: 'SearchSmartTable',
  mixins: [SmartTableVue.table],
  components: {
    'st-col-filter': StColFilter,
    'st-paginate': StPaginate,
  },
  data: function () {
    return {
      table: {
        // Table Column Order
        props: ['filename', 'datetime', 'url'],
        // Table Header
        headers: {
          filename: 'Filename',
          datetime: 'Datetime (UTC)',
          url: 'Url',
        },
      }
    };
  },
  methods: {
    // Assume row is from SmartTable's "displayed" array
    // Return a unique key for the given row.
    makeRowKey: function (row) {
      return [row.value.id, row.value.filename, Date.now()].join('-');
    },
    prettifyDate: function (date) {
      if (!date) {
        return '';
      }
      const utcDate = moment.utc(date);
      if (!utcDate) {
        return '';
      }
      return utcDate ? utcDate.format('MM-DD-YYYY HH:mm:ss') : '';
    }
  }
};
</script>

<style scoped>
</style>
