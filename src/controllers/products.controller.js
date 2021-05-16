const productsCtrl = {};
const ProductModel = require('../models/Products.model');
const ClubModel = require('../models/Clubs.model');
const cloudinary = require('../cloud/cloudinary');
const fs = require('fs-extra');


productsCtrl.getProducts = async (req, res) => {
    const products = await ProductModel.find();
    res.json(products);
};

productsCtrl.getProduct = async (req, res) => {
    const product = await ProductModel.findById(req.params.id);
    res.json(product);
};

productsCtrl.createProduct = async (req, res) => {
    const { name, price, status, type } = req.body;
    const imgRes = await cloudinary.v2.uploader.upload(req.files[0].path);
    await fs.unlink(req.files[0].path)
    const newproduct = new ProductModel({
        name,
        price,
        status,
        type,
        imageURL: imgRes.url,
        public_id: imgRes.public_id,
        club_id: req.params.id,
    });
    console.log(newproduct);
    const createproduct = await newproduct.save();
    await ClubModel.findOneAndUpdate(req.params.id, {
        $push: { products: newproduct._id }
    });
    res.json(createproduct);
};

productsCtrl.updateProduct = async (req, res) => {
    const { name, price, status, type } = req.body;
    const product = await ProductModel.findOneAndUpdate(req.params.id, {
        $set: {
            name,
            price,
            status,
            type
        }
    });
    res.json('producto actualizado');
};


productsCtrl.removeProduct = async (req, res) => {
    const { product } = req.body;
    const removePhoto = await ClubModel.findOneAndUpdate(req.params.id, {
        $pull: { products: product }
    });
    await ProductModel.findByIdAndDelete(product)
    res.json(removePhoto);
};

productsCtrl.deleteProduct = async (req, res) => {
    const product = await ProductModel.findByIdAndDelete(req.params.id);
    res.json(product);
};


module.exports = productsCtrl;