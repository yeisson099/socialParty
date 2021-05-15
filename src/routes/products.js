const { Router } = require('express');
const router = Router();

//controllers
const {  getProducts ,getProduct, createProduct, deleteProduct } = require('../controllers/products.controller');


router.route('/')
    .get(getProducts)

router.route('/:id')
    .post(createProduct)
    .delete(deleteProduct)

module.exports = router;