const { Schema, model } = require('mongoose');

const GallerySchema = new Schema({ 
    imageURL : String,
    public_id : String,
    club_id: String,
},
{
    autoCreate: true,
    timestamps: true
});

module.exports = model('PHOTOS', GallerySchema);