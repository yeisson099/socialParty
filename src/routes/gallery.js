const { Router } = require('express');
const router = Router();

//controllers
const { addImages, getImages, removePhoto } = require('../controllers/gallery.controller');

//middlewares
//import auth from '../middlewares/auth';

router.route('/')
    .get(getImages)


router.route('/:id')
    .post(addImages)
    .put(removePhoto)


module.exports = router;