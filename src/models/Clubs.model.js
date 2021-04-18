const { Schema, model, Mongoose } = require('mongoose');

const ClubSchema = new Schema({ 
    "name": {
        type: String,
        require: true,
        trim: true,
        unique: true
    },  
    "desc": {
        type: String,
        require: true
    }, 
    "sales":[{
        type: Schema.Types.ObjectId,
        ref: 'sales',
        autopopulate: true,
        unique: true
    }],
    "event": {
        type: Boolean,
        require: true,
        trim: true
    }, 
    "covid": {
        type: Boolean,
        require: true
    }, 
    "prueba": {
        type: String,
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


module.exports = model('discotecas', ClubSchema);