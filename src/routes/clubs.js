const { Router } = require('express');
const router = Router();

//controllers
const {
    getClubs,
    createClub,
    updateClub,
    deleteClub,
    getClub,
    addSale,
    removeSale,
    addEvent,
    removeEvent
} = require('../controllers/clubs.controller');

//CRUD

router.route('/')
    .get(getClubs)
    .post(createClub)

router.route('/:id')
    .get(getClub)
    .put(updateClub)
    .delete(deleteClub)

//Sales collection
router.route('/assingSale/:id')
    .put(addSale)

router.route('/removeSale/:id')
    .put(removeSale)

//Events collection
router.route('/assingEvent/:id')
.put(addEvent)

router.route('/removeEvent/:id')
.put(removeEvent)

module.exports = router;