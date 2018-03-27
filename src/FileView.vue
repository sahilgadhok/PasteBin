<template>
  <div class="container">
    <h2>{{filename}}</h2>
    <pre>{{content}}</pre>
    <h3>Comments</h3>
    <ul class="comments">
      <li v-for="comment in comments" v-bind:key="makeRowKey(comment)">
        <strong>{{comment.user}}</strong>
        <p>{{comment.content}}</p>
      </li>
    </ul>
    <form v:on-submit.prevent="onSubmit">
      <div class="form-group">
        <label for="comment-self">Leave a Comment</label>
        <textarea id="comment-self" class="form-control" rows="5"></textarea>
      </div>
      <button class="btn btn-primary" type="button" disabled>Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'FileView',
  props: {
    hash: {
      type: String,
      required: true
    }
  },
  data: function () {
    return {
      filename: '',
      content: '',
      comments: []
    };
  },
  methods: {
    makeRowKey: function (row) {
      return [row.id, Date.now()].join('-');
    }
  },
  created: function () {
    const vm = this;

    // Assume that the hash points to a valid Github Gist
    axios.get('https://api.github.com/gists/' + this.hash)
      // file
      .then(function (response) {
        const files = response.data.files;
        vm.filename = Object.keys(files)[0];
        vm.content = files[vm.filename].content;
        return axios.get(response.data.comments_url);
      })
      // comments
      .then(function (response) {
        vm.comments = response.data.map(row => ({
          id: row.id,
          user: row.user.login,
          content: row.body
        }));
      })
      .catch(function (error) {
        console.error(error);
      });
  },
}
</script>

<style scoped>
.comments {
  list-style-type: none;
  padding-left: 0;
}
.comments > li {
  border: 1px solid #000;
  border-radius: 5px;
  margin: 10px 0;
  padding: 10px;
}
</style>
