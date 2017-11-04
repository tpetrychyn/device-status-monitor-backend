// config/passport.js

// load all the things we need
var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;

// load up the user model
var User = require('../models').user;

// load the auth variables
var configAuth = require('./auth');

module.exports = function (passport) {

    // used to serialize the user for the session
    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    // used to deserialize the user
    passport.deserializeUser(function (user, done) {
        User.findById(user.id).then(user => {
            done(null, user);
        }).catch(err => {
            done(err, null);
        });
    });

    // code for login (use('local-login', new LocalStategy))
    // code for signup (use('local-signup', new LocalStategy))

    // =========================================================================
    // FACEBOOK ================================================================
    // =========================================================================
    passport.use(new FacebookStrategy({

        // pull in our app id and secret from our auth.js file
        clientID: configAuth.facebookAuth.clientID,
        clientSecret: configAuth.facebookAuth.clientSecret,
        callbackURL: configAuth.facebookAuth.callbackURL

    },

        // facebook will send back the token and profile
        function (token, refreshToken, profile, done) {

            // asynchronous
            process.nextTick(function () {
                User.find({ where: { 'facebook_id': profile.id } }).then(user => {
                    // if the user is found, then log them in
                    if (user) {
                        return done(null, user); // user found, return that user
                    } else {
                        User.create({ 
                                facebook_id: profile.id,            
                                facebook_token: token,           
                                firstName: profile.displayName.split(' ')[0],
                                lastName: profile.displayName.split(' ')[1]
                                //email: profile.emails[0].value
                            })
                        .then((user) => {
                            return done(null, user)
                        })
                        .catch(err => {
                            return done(err);
                        });
                    }
                }).catch(err => {
                    return done(err);
                });
            });

        }));

};