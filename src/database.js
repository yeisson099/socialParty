const mongoose = require('mongoose');

const URI = 'mongodb://localhost/socialParty';

mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true, 
    useCreateIndex: true,
    useFindAndModify: false 
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB is connected');
});