const productsCtrl = {};
const ProductModel = require('../models/Products.model');
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
    const { name, price, status } = req.body;
    const imgRes = await cloudinary.v2.uploader.upload(req.file.path);
    await fs.unlink(req.file.path)
    const newproduct = new ProductModel({
        name,
        price,
        status,
        imageURL: imgRes.url,
        public_id: imgRes.public_id,
        club_id: req.params.id,
    });
    console.log(newproduct);
    const createproduct = await newproduct.save();
    res.json(createproduct);
};

/* productsCtrl.updateEvent = async (req, res) => {
    const { name, desc, date_init, date_end } = req.body;
    const event = await ProductModel.findOneAndUpdate(req.params.id, {
        $set: {
            name,
            desc,
            date_init,
            date_end
        }
    });
    res.json(event);
};
 */
productsCtrl.deleteProduct = async (req, res) => {
    const product = await ProductModel.findByIdAndDelete(req.params.id);
    res.json(product);
};


module.exports = productsCtrl;