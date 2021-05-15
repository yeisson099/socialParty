const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
    name: String,
    price: String,
    status: String,
    imageURL: String,
    public_id: String,
    club_id: String,
},
    {
        autoCreate: true,
        timestamps: true
    });

module.exports = model('PRODUCTS', ProductSchema);