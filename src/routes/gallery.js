const { Router } = require('express');
const router = Router();

//controllers
const { addImages, getImages, removePhoto, deletePhoto } = require('../controllers/gallery.controller');

//middlewares

router.route('/')
    .get(getImages)


router.route('/:id')
    .post(addImages)
    .put(removePhoto)
    .delete(deletePhoto)


module.exports = router;