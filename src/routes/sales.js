const { Router } = require('express');
const router = Router();

//controllers
const { getClubs,createClub,updateClub,deleteClub,getClub } = require('../controllers/sales.controller');

router.route('/')
    .get(getClubs)
    .post(createClub)

router.route('/:id')
    .get(getClub)
    .put(updateClub)
    .delete(deleteClub)

module.exports = router;