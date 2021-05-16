const galleryCtrl = {};
const GalleryModel = require('../models/Gallery.model');
const ClubModel = require('../models/Clubs.model');
const cloudinary = require('../cloud/cloudinary');
const fs = require('fs-extra');

galleryCtrl.getImages = async (req, res) => {
    const photos = await GalleryModel.find();
    res.send(photos);
};

galleryCtrl.addImages = async (req, res) => {
    req.files.map(async (file) => {
        const imgRes = await cloudinary.v2.uploader.upload(file.path);
        await fs.unlink(file.path);
        const newphoto = new GalleryModel({
            imageURL : imgRes.url ,
            public_id : imgRes.public_id,
            club_id: req.params.id,
        });
        await newphoto.save();
        await ClubModel.findOneAndUpdate(req.params.id, {
            $push: { gallery: newphoto._id }
        });
    });
    res.send('fotos subidas')
};

galleryCtrl.removePhoto = async (req, res) => {
    const { gallery } = req.body;
    const removePhoto = await ClubModel.findOneAndUpdate(req.params.id, {
        $pull: { gallery: gallery }
    });
    await GalleryModel.findByIdAndDelete(gallery)
    res.json(removePhoto);
};

galleryCtrl.deletePhoto = async (req, res) => {
    const photo = await GalleryModel.findByIdAndDelete(req.params.id);
    res.json(photo);
};


module.exports = galleryCtrl;