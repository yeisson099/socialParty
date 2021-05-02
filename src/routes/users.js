const { Router } = require('express');
const router = Router();

//controlers
const { signin,signup } = require('../controllers/users.controller');

router.route('/signin')
    .post(signin)

router.route('/signup')
    .post(signup)


module.exports = router;