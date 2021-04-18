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
    getByName
} = require('../controllers/clubs.controller');

//CRUD

router.route('/')
    .get(getClubs)
    .post(createClub)

router.route('/:id')
    .get(getClub)
    .put(updateClub)
    .delete(deleteClub)

//sales collection
router.route('/assingSale/:id')
    .put(addSale)

router.route('/removeSale/:id')
    .put(removeSale)

//filters
/* router.route('/getByType')
    .get(getClubs)
 */
router.route('/getByName/:name')
    .get(getByName)

module.exports = router;