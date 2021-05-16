const { Router } = require('express');
const router = Router();

//controllers
const { getProducts, getProduct, createProduct, deleteProduct, removeProduct, updateProduct } = require('../controllers/products.controller');


router.route('/')
    .get(getProducts)

router.route('/:id')
    .get(getProduct)
    .post(createProduct)
    .put(updateProduct)
    .delete(deleteProduct)

router.route('/remove/:id')
    .put(removeProduct)

module.exports = router;