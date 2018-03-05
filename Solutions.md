# Solutions

## Features
- Home:
  A user can upload a file and share it in a public domain.
  Users have the choice of uploading raw text or a file from their machine.
  Only anonymous file upload is supported because there is no backend to store user information.
- Search:
  A user can search for a particular file amongst all the files uploaded in the public domain.
  They can search by keywords, and results will dynamically filter, or they can press the search button to refresh the table.
- Profile: Each user has their own profile page, which lists their name, email, friends, and list of uploaded files. Users can only view another user's profile after they have accepted a friend request.
- File View: This will allow the users to view the raw data of the file as well as read and write comments.

## Why use Github Gist?

[Assignment 1 Proposal][a1-proposal] mentions Pastebin for file storage but Github Gist provides the same functionality, has a better REST API, supports CORS for the front-end. Pastebin results are returned in XML while Github Gist results are returned in JSON.

## Features to be Completed
NOTE: The features mentioned below will be implemented in the back-end (A3). For the purposes of the front-end, we have used mock data to simulate the features.

- Groups: Users can create and join groups. When in a group, a user can share files that can only be viewed by other group members. Group creators can invite and/or kick other members from their group. Additionally, groups can be private or public.
- Friend Requests: A user can request to be friends with another user in order to share files with them. The list of friends can be viewed on the profile page. 
- Comments: Users can comment on the file view page underneath the raw text of the file.

[a1-proposal]: https://github.com/csc309-18s/assignment-1-jansanchitdanielshannon#project-proposal
