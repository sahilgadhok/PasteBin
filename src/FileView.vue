<template>
  <div id="container">
    <div>{{filename}}</div>
    <pre>{{content}}</pre>
    <div class="comments-box">
      <h3>Comments</h3>
      <ul>
        <li v-for="comment in comments">
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
    // Assume that the hash points to a valid Github Gist
    const resourcePrefix = 'https://gist.githubusercontent.com/';
    const filepathArr = this.hash.split('/');
    const data = {
      filename: filepathArr[filepathArr.length - 1],
      content: '',
      // Mock data for comments. To be implemented in the back-end
      comments: [
        {
          user: 'Alice',
          content: 'Test comment'
        },
        {
          user: 'Bob',
          content: 'Test comment 2'
        }
      ]
    };

    axios.get(resourcePrefix + this.hash, {
        responseType: 'text',
      })
      .then(function (response) {
        data.content = response.data;
      })
      .catch(function (error) {
        console.error(error);
      });

    return data;
  }
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
