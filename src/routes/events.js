const { Router } = require('express');
const router = Router();

//controllers
const { getEvents,createEvent,updateEvent,deleteEvent,getEvent } = require('../controllers/events.controller');

router.route('/')
    .get(getEvents)
    .post(createEvent)

router.route('/:id')
    .get(getEvent)
    .put(updateEvent)
    .delete(deleteEvent)

module.exports = router;