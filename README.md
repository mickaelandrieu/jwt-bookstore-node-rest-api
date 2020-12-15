# Book Store Node.js/Express.js REST API using JWT (for learning purposes only)

## Installation

```
git clone https://github.com/mickaelandrieu/jwt-bookstore-node-rest-api.git
cd jwt-bookstore-node-rest-api
npm i
```

## Security

This application demonstrates how to implement JWT in order to secure access to a simple REST API.

## Endpoints

### Login (obtain your token)

* `/login`

> Submit in the Body of your HTTP request the mail and the password of the user and you will obtain a JSON Web Token if the credentials are valid. 

### Books

* `/books`
* `/books/<isbn>`

### Users

* `/users`
* `/users/<mail>`

### Book Store management

* `/borrow/<mail>/<isbn>`: borrow a book from the book store as an user
* `/bring-back/<mail>/<isbn>`: bring back a book to the book store as an user

## Deploy on Heroku

Create [an account on Heroku](https://signup.heroku.com/) (Free/Hobby tiers is enough) and install [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).

Then, execute the following instruction in the `jwt-bookstore-node-rest-api` folder:

```
heroku login
heroku create
git push heroku master
```

And "voila", the REST API is deployed and ready to be tested.

This project is licensed under the [MIT license](https://opensource.org/licenses/MIT).
