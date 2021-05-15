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
        console.log(imgRes.url,req.params.id);
        const newphoto = new GalleryModel({
            imageURL : imgRes.url ,
            public_id : imgRes.public_id,
            club_id: req.params.id,
        });
        await newphoto.save();
        console.log(newphoto)
        await ClubModel.findOneAndUpdate(req.params.id, {
            $push: { gallery: newphoto._id }
        });
    });
    res.send('fotos subidas')
};

galleryCtrl.updateSale = async (req, res) => {
    const { name, desc, date_init, date_end } = req.body;
    const sale = await GalleryModel.findOneAndUpdate(req.params.id, {
        $set: {
            name,
            desc,
            date_init,
            date_end
        }
    });
    res.json(sale);
};

galleryCtrl.removePhoto = async (req, res) => {
    const { gallery } = req.body;
    console.log(gallery)
    console.log(req.params.id)
    const removePhoto = await ClubModel.findOneAndUpdate(req.params.id, {
        $pull: { gallery: gallery }
    });
    res.json(removePhoto);
};

galleryCtrl.deleteSale = async (req, res) => {
    const Sale = await GalleryModel.findByIdAndDelete(req.params.id);
    res.json(Sale);
};


module.exports = galleryCtrl;