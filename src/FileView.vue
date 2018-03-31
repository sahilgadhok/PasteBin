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
    <form v:on-submit.prevent="onSubmit" v-if="inputEnabled">
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
      inputEnabled: !!firebase,
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
    updateComments: function (hash) {
      if (!hash || !firebase) {
        return;
      }

      const vm = this;
      const db = firebase.database();
      db.ref('/comment/' + hash).orderByChild('created').once('value')
        .then(function (snapshot) {
          const comments = snapshot.val();
          if (!comments) {
            return;
          }

          vm.file.comments = Object.keys(comments).map(key => ({
            id: key,
            user: comments[key].user,
            content: comments[key].content,
            created: comments[key].created,
          }));
        })
        .catch(function (error) {
          console.error(error);
        });
    },
    updateFile: function (hash) {
      if (!hash || !firebase) {
        return;
      }

      const vm = this;
      const db = firebase.database();
      db.ref('/file/' + hash).once('value')
        .then(function (snapshot) {
          const file = snapshot.val();
          if (!file) {
            return;
          }

          vm.file.name = file.name;
          vm.file.content = file.content;
          vm.updateComments(hash);
        })
        .catch(function (error) {
          console.error(error);
        });
    },
    submitComment: function () {
      if (!this.comment || !firebase) {
        return;
      }

      const db = firebase.database();
      const newComment = db.ref('/comment/' + this.hash).push();
      newComment.set({
        user: 'timStruggle',
        content: this.comment,
        created: (new Date()).toISOString()
      })
      this.updateComments(this.hash);
      this.comment = '';
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
