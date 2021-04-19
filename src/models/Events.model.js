const { Schema, model } = require('mongoose');

const SaleSchema = new Schema({ 
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
    "date_init": {
        type: Date,
        require: true
    },
    "date_end": {
        type: Date,
        require: true
    }
},
{
    autoCreate: true,
    timestamps: true
});

module.exports = model('EVENTS', SaleSchema);