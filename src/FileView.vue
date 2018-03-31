<template>
  <div class="container" v-if="file.name">
    <h2>{{file.name}}</h2>
    <pre>{{file.content}}</pre>
    <h3>Comments</h3>
    <ul class="comments">
      <li v-for="comment in file.comments" v-bind:key="makeRowKey(comment)">
        <strong>{{comment.user}}</strong>
        <p>{{comment.content}}</p>
      </li>
    </ul>
    <form v:on-submit.prevent="onSubmit" v-if="sessionToken">
      <div class="form-group">
        <label for="comment-self">Leave a Comment</label>
        <textarea id="comment-self" class="form-control" rows="5"
        v-model="comment"></textarea>
      </div>
      <button class="btn btn-primary" type="button"
      v-on:click="submitComment()">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

const firebase = (typeof window === 'object' &&
                  typeof window.firebase === 'object') ?
                  window.firebase : null;

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
      comment: '',
      file: {
        name: '',
        content: '',
        comments: []
      }
    };
  },
  store: ['sessionToken'],
  methods: {
    submitComment: function () {
      if (!this.comment) {
        return;
      }

      // TODO: submit to server via POST/PUT
      this.file.comments.push({
        id: [Date.now(), Date.now()].join('-'),
        user: 'timStruggle',
        content: this.comment
      });
      this.comment = '';
    },
    updateFile: function (hash) {
      if (!hash || !firebase) {
        return;
      }

      const vm = this;
      firebase.database().ref('/file/' + hash).once('value')
        .then(function (snapshot) {
          const file = snapshot.val();
          if (!file) {
            return;
          }

          vm.file.name = file.name;
          vm.file.content = file.content;
        })
        // comments
        // .then(function (response) {
        //   vm.file.comments = response.data.map(row => ({
        //     id: row.id,
        //     user: row.user.login,
        //     content: row.body
        //   }));
        // })
        .catch(function (error) {
          console.error(error);
        });
    },
    makeRowKey: function (row) {
      return [row.id, Date.now()].join('-');
    }
  },
  created: function () {
    this.updateFile(this.hash);
  },
  watch: {
    hash: function (newVal) {
      this.updateFile(newVal);
    }
  }
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
