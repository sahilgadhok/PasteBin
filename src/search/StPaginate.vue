<template>
  <nav class="btn-group">
    <button class="btn" type="button" v-bind:disabled="disabled.prev"
    v-on:click="selectPage(1)">First</button>
    <button class="btn" type="button" v-bind:disabled="disabled.prev"
    v-on:click="selectPreviousPage">Prev</button>
    <button class="btn" type="button" v-for="page in pages"
    v-bind:key="makePageKey(page)" v-on:click="selectPage(page)"
    v-bind:class="{'btn-primary': page === stState.page}">{{page}}</button>
    <button class="btn" type="button" v-bind:disabled="disabled.next"
    v-on:click="selectNextPage">Next</button>
    <button class="btn" type="button" v-bind:disabled="disabled.next"
    v-on:click="selectPage(lastPage)">Last</button>
  </nav>
</template>

<script>
import SmartTableVue from 'smart-table-vue';

export default {
  mixins: [SmartTableVue.pagination],
  props: {
    numPages: {
      type: Number,
      default: 5,
      validator: function (value) {
        return typeof value === 'number' && value > 0;
      },
    }
  },
  data: function () {
    return {
      disabled: {
        first: true,
        prev: true,
        next: true,
        last: true
      },
      lastPage: 1,
      pages: [1],
    };
  },
  methods: {
    // Return a unique key for the given value.
    makePageKey: function (val) {
      return val + '-' + Date.now();
    }
  },
  watch: {
    stState: function () {
      const lastPage =
        this.stState.filteredCount > 0 ?
          Math.ceil(this.stState.filteredCount / this.stState.size) : 1;
      const half = Math.floor(this.numPages / 2);

      // Determine the page range, displayed in the table footer
      let pages = [];
      if (this.stState.page <= half) {
        // Left Edge
        for (let i = 1; i <= this.numPages && i <= lastPage; i++) {
          pages.push(i);
        }
      } else if (this.stState.page + half >= lastPage) {
        // Right Edge
        for (let i = lastPage; i >= 1 && lastPage - i < this.numPages; i--) {
          pages.unshift(i);
        }
      } else {
        // Center
        for (let i = half * -1; i <= half; i++) {
          pages.push(this.stState.page + i);
        }
      }

      this.pages = pages;
      this.lastPage = lastPage;
      this.disabled.prev = !this.stDirective.isPreviousPageEnabled();
      this.disabled.next = !this.stDirective.isNextPageEnabled();
    }
  }
}
</script>
