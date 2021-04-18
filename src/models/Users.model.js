const { Schema, model } = require('mongoose');

const UserSchema = new Schema({ 
    name : String,
    provider : String,
    provier_id : {
        type: String,
        unique: true
    },
    photo : String,
    createdAt : {
        type: Date,
        default: Date.now
    }
});

module.exports = model('users', UserSchema);