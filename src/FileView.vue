<template>
  <div id="container">
    <div>{{filename}}</div>
    <pre>{{content}}</pre>
    <div class="comments-box">
      <h3>Comments</h3>
      <ul>
        <li v-for="comment in comments" v-bind:key="makeRowKey(comment)">
          <p class="comment-user">{{ comment.user }}</p>
          <div class="comment">{{ comment.content }}</div>
        </li>
      </ul>
      <h4>Leave a Comment</h4>
      <div class="form-group">
        <textarea class="form-control" rows="5">
        </textarea>
      </div>
      <div class="form-group">
        <button class="btn btn-primary" type="button"
        v-on:click="addComment()">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'FileView',
  props: ['hash'],
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
li {
  border: 1px solid #000;
  border-radius: 5px;
  list-style-type: none;
  margin: 5px;
  padding: 10px;
}

pre {
  width: 100%;
}

#container {
  width: 60%;
}

.comments-box {
  width: 80%;
}

.comment-user {
  font-size: 14pt
}
</style>
