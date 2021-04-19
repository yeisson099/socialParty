const eventsCtrl = {};
const EventModel = require('../models/Events.model');

eventsCtrl.getEvents = async (req, res) => {
    const events = await EventModel.find();
    res.json(events);
};

eventsCtrl.getEvent = async (req, res) => {
    const Event = await EventModel.findById(req.params.id);
    res.json(Event);
};

eventsCtrl.createEvent = async (req, res) => {
    const { name, desc, date_init, date_end } = req.body;
    const newEvent = new EventModel({
        name,
        desc,
        date_init,
        date_end
    });
    const createEvent = await newEvent.save();
    res.json(createEvent);
};

eventsCtrl.updateEvent = async (req, res) => {
    const { name, desc, date_init, date_end } = req.body;
    const event = await EventModel.findOneAndUpdate(req.params.id, {
        $set: {
            name,
            desc,
            date_init,
            date_end
        }
    });
    res.json(event);
};

eventsCtrl.deleteEvent = async (req, res) => {
    const Event = await EventModel.findByIdAndDelete(req.params.id);
    res.json(Event);
};


module.exports = eventsCtrl;