const mongoose = require('mongoose');
const DB = require('./env.db');

const URI = 'mongodb://localhost/socialParty';

mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true, 
    useCreateIndex: true,
    useFindAndModify: false 
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('la rua es ',DB.database[0])
    console.log('DB is connected');
});