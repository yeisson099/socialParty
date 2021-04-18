const mongoose = require('mongoose');
const UserModel = require('./models/Users.model');

const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport')
const config = require('./config');

passport.serializeUser((user, done) => {
    done(null, user.id);
});


passport.deserializeUser((user, done) => {
    done(null, user.id);
});

passport.use(new GoogleStrategy({
    consumerKey: '761974429051-8fipi4qc1aiaau9qmut85pivp14utl31.apps.googleusercontent.com',
    consumerSecret: '2hIA2KOtTLyaC8Qwuhr615j_',
    callbackURL: "http://localhost:8080/google/callback"
  },
  function(token, tokenSecret, profile, cb) {
    //register user here
    cb(null, profile)
  }
));

module.exports = function (passport) {



}

