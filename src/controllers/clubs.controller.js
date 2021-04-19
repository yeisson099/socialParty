const clubsCtrl = {};
const ClubModel = require('../models/Clubs.model');


//CRUD
clubsCtrl.getClubs = async (req, res) => {
    const clubs = await ClubModel.find()
    res.json(clubs);
};

clubsCtrl.getClub = async (req, res) => {
    const club = await ClubModel.findById(req.params.id);
    res.json(club);
};

clubsCtrl.createClub = async (req, res) => {
    const { name, desc, type, covid, state } = req.body;
    const newClub = new ClubModel({
        name,
        desc,
        type,
        covid,
        state
    });
    console.log(req.body)
    console.log(newClub)
    const createClub = await newClub.save();
    res.json(createClub);
};

clubsCtrl.updateClub = async (req, res) => {
    const { name, desc, type, covid, state } = req.body;
    const updateClub = await EventModel.findOneAndUpdate(req.params.id, {
        $set: {
            name,
            desc,
            type,
            covid,
            state
        }
    });
    res.json(updateClub);
};

clubsCtrl.deleteClub = async (req, res) => {
    const club = await ClubModel.findByIdAndDelete(req.params.id);
    res.json(club);
};

//sales collection
clubsCtrl.addSale = async (req, res) => {
    const { sales } = req.body;
    console.log(sales)
    console.log(req.params.id)
    const addSale = await ClubModel.findOneAndUpdate(req.params.id, {
        $push: { sales: sales }
    });
    res.json(addSale);
};

clubsCtrl.removeSale = async (req, res) => {
    const { sales } = req.body;
    console.log(sales)
    console.log(req.params.id)
    const addSale = await ClubModel.findOneAndUpdate(req.params.id, {
        $pull: { sales: sales }
    });
    res.json(addSale);
};

//Events collection
clubsCtrl.addEvent = async (req, res) => {
    const { events } = req.body;
    console.log(events)
    console.log(req.params.id)
    const addEvent = await ClubModel.findOneAndUpdate(req.params.id, {
        $push: { events: events }
    });
    res.json(addEvent);
};

clubsCtrl.removeEvent = async (req, res) => {
    const { events } = req.body;
    console.log(events)
    console.log(req.params.id)
    const addEvent = await ClubModel.findOneAndUpdate(req.params.id, {
        $pull: { events: events }
    });
    res.json(addEvent);
}

//filters
clubsCtrl.getByType = async (req, res) => {
    const clubs = await ClubModel.find()
    res.json(clubs);
};

clubsCtrl.getByName = async (req, res) => {
    const { name } = req.params;
    console.log(name)
    const clubs = await ClubModel.find({
        name
    });
    res.json(clubs);
};



module.exports = clubsCtrl;