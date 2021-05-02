const { Schema, model } = require('mongoose');

const ClubSchema = new Schema({
    "name": {
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    "background": {
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    "desc": {
        type: String,
        require: true,
        trim: true
    },
    "type":{
        type: String,
        require: true,
        trim: true
    },
    "products": [{
        type: Schema.Types.ObjectId,
        ref: 'PRODUCTS',
        autopopulate: true,
        unique: true,
        trim: true
    }],
    "sales": [{
        type: Schema.Types.ObjectId,
        ref: 'SALES',
        autopopulate: true,
        unique: true,
        trim: true
    }],
    "events": [{
        type: Schema.Types.ObjectId,
        ref: 'EVENTS',
        autopopulate: true,
        unique: true,
        trim: true
    }],
    "covid": {
        type: Boolean,
        require: true
    },
    "state": {
        type: String,
        require: true,
        trim: true
    }
},
    {
        autoCreate: true,
        timestamps: true
    });
ClubSchema.plugin(require('mongoose-autopopulate'));


module.exports = model('CLUBS', ClubSchema);