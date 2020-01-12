# graphql-playlist

A fullstack web application built with React, Apollo, MongoDb(Mongoose) and GraphQL.

## Project Overview

Given the issues that arises with building applications with the REST API pattern such as over-fetching and several trips for resources, GraphQL was designed to surmount these challenges and make building APIs more efficient.

GraphQLPlaylist is a simple demonstration of the powers of GraphQL. It is an application that allows users add book entries, given their name, genre, and author.

### Hosted App

The app is hosted on Netlify here: [GraphQLPlaylist](https://darasimi-graphql-playlist.netlify.com)

### Backend API.

The backend is hosted on Heroku here [GraphQLPlaylist-API](https://darasimi-graphql-playlist.herokuapp.com/graphql)

### Entities

- Authors
- Books

### Queries

- books
- authors
- book (id)
- author (id)

### Mutations

- addBook (name, genre, authorId)
- addAuthor (name, age)

### How To Set Up Locally

1. Clone repo by opening a terminal and running `git clone https://github.com/darasimiolaifa/graphql-playlist.git`
2. Change into the project directory by running `cd graphql-playlist`
3. Create a mongodb database, and store the connection uri in a variable (MONGODB_URI) in a .env file
4. Install `dotenv` and use it to manage your environment variables
5. change into the `server` folder and run `npm install`
6. change into the `client` folder and run `npm install`
7. The project should launch in your browser at `localhost:8080`

### Author

Darasimi Olaifa
