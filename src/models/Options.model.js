const { Schema, model } = require('mongoose');

const OptionSchema = new Schema({ 
    name : String,
    desc : String
},
{
    autoCreate: true,
    timestamps: true
});

module.exports = model('OPTIONS', OptionSchema);