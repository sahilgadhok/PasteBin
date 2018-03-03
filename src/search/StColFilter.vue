<template>
  <input type="text" v-model="query">
</template>

<script>
import SmartTableVue from 'smart-table-vue';

export default {
  mixins: [SmartTableVue.filter],
  data: function () {
    return {
      query: ''
    }
  },
  watch: {
    query: function (newVal) {
      this.filter(newVal);
    }
  }
}
</script>
