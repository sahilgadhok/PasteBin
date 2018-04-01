# Solutions

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

## API: Github Gist

The external API that we are using for Assignment 3 is the Github Gist API. It is being used to support the file storage features of our app.

[Assignment 1 Proposal][a1-proposal] mentions Pastebin for file storage but Github Gist provides the same functionality, has a better REST API, supports CORS for the front-end. Pastebin results are returned in XML while Github Gist results are returned in JSON.

## End-Users

In our app there are 2 main end-users to consider. 
- The first is the one that is using Filehub anonymously. This user is using Filehub not as a tool for personal file storage but as a way to share their files with other users of the site. Due to the fact that they can't access a profile to quickly view their uploaded files, this user is most likely going to use this a way to quickly share work with other users of the site. e.g. A useful code snippet

- The other end-user is the one that signs up for the website. This user is one that needs a quick and easy way to upload a file for use later, they also want share this upload with others to get reactions or feedback from other viewers of the file.

## API Documentation

## Features to be Completed
NOTE: The features mentioned below will be implemented in the back-end (A3). For the purposes of the front-end, we have used mock data to simulate the features.

- Groups: Users can create and join groups. When in a group, a user can share files that can only be viewed by other group members. Group creators can invite and/or kick other members from their group. Additionally, groups can be private or public.
- Friend Requests: A user can request to be friends with another user in order to share files with them. The list of friends can be viewed on the profile page. 
- Comments: Users can comment on the file view page underneath the raw text of the file.

[a1-proposal]: https://github.com/csc309-18s/assignment-1-jansanchitdanielshannon#project-proposal
