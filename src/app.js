//imports
const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('morgan');
const createError = require('http-errors');
const passport = require('passport');


//settings
app.set('port', 8080);
app.use(logger('dev'));


//middlewares
app.use(cors());
app.use(express.json());
app.use(passport.initialize());

//routes
const clubsRouter = require('./routes/clubs');
const salesRouter = require('./routes/sales');

// api
app.use('/api/clubs', clubsRouter);
app.use('/api/sales', salesRouter);

/* app.get('/google', passport.authenticate('google', { scope: 'profile' }));
app.get('/google/callback', passport.authenticate('google',
    {
        failureRedirect: '/login'
    }), (req, res) => {
        res.redirect('/');
        res.end('logged in!')
    })


 */

module.exports = app;
