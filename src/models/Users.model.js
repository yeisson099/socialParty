const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    id: String,
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
},
    {
        autoCreate: true,
        timestamps: true
    }
);

module.exports = model('USERS', UserSchema);