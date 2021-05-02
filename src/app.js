//imports
const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('morgan');
const multer = require('multer');
const path = require('path');
const createError = require('http-errors');
const passport = require('passport');


//settings
app.set('port', 8080);
app.use(logger('dev'));


//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(multer({dest: path.join(__dirname, 'public/img/uploads')}).single('image'))
/* app.use(passport.initialize());
require('./auth') */


//routes
const clubsRouter = require('./routes/clubs');
const salesRouter = require('./routes/sales');
const eventsRouter = require('./routes/events');

// api
app.use('/api/clubs', clubsRouter);
app.use('/api/sales', salesRouter);
app.use('/api/events', eventsRouter);

/* app.get('/google', passport.authenticate('google', { scope: 'profile' }));
app.get('/google/callback', passport.authenticate('google',
    {
        failureRedirect: '/login'
    }), (req, res) => {
        res.end('logged in!')
    })
 */



module.exports = app;
