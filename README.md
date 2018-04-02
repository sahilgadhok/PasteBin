# Assignment #3

## Team Members
- Jan Edmund Lazo (999700408)
- Shannon Lee (100303637)
- Sanchit Luthra (1001429643)
- Sahil Gadhok (997782555)

## Usage

The public deployment of the service is located at [https://filehub-f9a91.firebaseapp.com][filehub-hosting].

## For self hosting

Sign up for google account to create firebase account and enable hosting. Refer to Firebase documentation for more info.

```sh
git clone https://github.com/csc309-18s/assignment-3-jansanchitdanielshannon my_repo
cd my_repo
npm install -g firebase tools

# Update the project_id to point to your firebase hosting server
vim .firebaserc

# Deploy to hosting server only
firebase deploy --only hosting
```

By default, this repo centralizes all hosting, database, and cloud functions into one firebase account and setups the web application through the default firebase scripts in the hosting server. Each of them are deployed in different servers so you can use the endpoints mentioned in Solution.md to gain access to database and cloud even with a different app hosting server.

## Dependencies

- CSS
    - [Bootstrap][bootstrap-3]
- Javascript
    - AJAX ([axios][github-axios])
    - UI ([vue][github-vue])
    - Server Routing ([express][github-expressjs])

## Browser Support

- Internet Explorer 10+
- Firefox ESR
- Chrome 56+

[filehub-hosting]: https://filehub-f9a91.firebaseapp.com
[bootstrap-3]: https://getbootstrap.com/docs/3.3/
[github-axios]: https://github.com/axios/axios
[github-es6-promise]: https://github.com/stefanpenner/es6-promise
[github-vue]: https://github.com/vuejs/vue
[github-vue-router]: https://github.com/vuejs/vue-router
[github-expressjs]: https://github.com/expressjs/express
