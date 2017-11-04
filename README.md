# REC Backend

Backend RESTful server for REC Programming team 2017

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

Installing Depedencies

```
npm install
```

Running locally

```
npm run dev
```

## File Structure & Explanation

Building the web bundle with Webpack for deployment

```
app.js ~ Sets up the app, requires all the files
/routes
--auth.js ~ Routes for auth
--index.js ~ Manually defined routes
/models ~ Add files to define database entities
--index.js ~ Magic file to automatically include all model files
--user.js ~ The user model
/config
--auth.js ~ Defines auth strategy variables
--passport.js ~ Sets up the Passport strategy and auth functions
/bin
--www ~ Sets up the server listening
```

To add endpoints
```
1. Create a new js file in the routes folder
2. Define your route (get, post, put, etc)
3. Consider checking if req.user is defined, if not redirect to login, if necessary
4. Add a var [name] = require('./routes/[file].js); to app.js
5. Add an app.use('/[route]', [name]);
```

To add entities
```
1. Create a new js file in the models folder
2. Define your entity using the Sequelize ORM pattern
```

## Deployment

Not sure yet, probably on Heroku

## Built With

* [Express](https://expressjs.com/) - Web framework for NodeJS
* [Sequelize](http://docs.sequelizejs.com/) - ORM for defining entities and connecting to Postgres database
* [RESTful Express Sequelize](https://github.com/tpetrychyn/RESTful) - Autogenerates REST endpoints from Sequelize models
* [PassportJs](http://www.passportjs.org/) - Auth strategies


## Authors

* **Taylor Petrychyn** - *Creator* - [tpetrychyn](https://github.com/tpetrychyn)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License
