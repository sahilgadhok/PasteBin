# Solutions

A one day extension was used for this assignment.

## Features
- Home:
  A user can upload a file and share it in a public domain.
  Users have the choice of uploading raw text or a file from their machine.
  Users can upload files ananymously or while logged in to the website.
- Search:
  A user can search for a particular file amongst all the files uploaded in the public domain.
  They can search by keywords, and results will dynamically filter, or they can press the search button to refresh the table.
- Profile: Each user has their own profile page, which lists their username, and list of uploaded files.
- File View: This will allow the users to view the raw data of the file as well as read and write comments.


## End-Users

In our app there are 2 main end-users to consider. 
- The first is the one that is using Filehub anonymously. This user is using Filehub not as a tool for personal file storage but as a way to share their files with other users of the site. Due to the fact that they can't access a profile to quickly view their uploaded files, this user is most likely going to use this a way to quickly share work with other users of the site. e.g. A useful code snippet

- The other end-user is the one that signs up for the website. This user is one that needs a quick and easy way to upload a file for use later, they also want share this upload with others to get reactions or feedback from other viewers of the file.

## API Documentation

### Users

  - POST '/signup' -> signup a new user for the website
    - Request:
      - username
      - password
    - Response
      - 400: if any param is missing
      - 403: is username is taken
      - 200: if the user was successfully created

  - POST '/signin' -> get session token for user
    - Request
      - username
      - password

    - Response
      - 400 if missing any params
      - 403 for invalid username/password combination
      - 200 and a seesion token is returned

  - POST '/profile/:username' -> get a user
    - Request
      - token - Valid Session Token

    - Response
      - 400 if username or token is missing
      - 403 if username is invalid
      - 200 if username is found and username is returned

  - POST '/comment/:file_id' -> Add a new comment
    - Request
      - token - Valid Session Token
      - comment - Comment text
    - Response
      - 400 if and param is missing
      - 403 if token or file_id is invalid
  

## Backend Services

### Hosting 
  - [Google Firebase][google-firebase]
    - Used for hosting app web app online

### Database
  - [Firebase database][firebase-database]
    - Data storage

### API
  - [Cloud Function][firebase-cloudFunction]
    - Integrated to handle http request to the server.


[google-firebase]: https://firebase.google.com/
[firebase-database]: https://firebase.google.com/docs/database/
[firebase-cloudFunction]: https://firebase.google.com/docs/functions/