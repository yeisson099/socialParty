//imports
const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('morgan');
const multer = require('multer');
const path = require('path');
require('./cloud/cloudinary');

//settings
app.set('port', 8080);
app.use(logger('dev'));


//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '/public/uploads'))
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname )
    }
})
app.use(multer({ storage: storage }).array('image',4))


//routes
const clubsRouter = require('./routes/clubs');
const salesRouter = require('./routes/sales');
const eventsRouter = require('./routes/events');
const galleryRouter = require('./routes/gallery');
const productRouter = require('./routes/products');

// api
app.use('/api/clubs', clubsRouter);
app.use('/api/sales', salesRouter);
app.use('/api/events', eventsRouter);
app.use('/api/gallery', galleryRouter);
app.use('/api/products', productRouter);


module.exports = app;
