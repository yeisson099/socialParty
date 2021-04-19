const { Router } = require('express');
const router = Router();

//controllers
const { getSales,createSale,updateSale,deleteSale,getSale } = require('../controllers/sales.controller');

router.route('/')
    .get(getSales)
    .post(createSale)

router.route('/:id')
    .get(getSale)
    .put(updateSale)
    .delete(deleteSale)

module.exports = router;