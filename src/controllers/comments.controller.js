const clubsCtrl = {};
const ClubModel = require('../models/Clubs.model');

clubsCtrl.getClubs = async (req, res) => {
    const clubs = await ClubModel.find();
    res.json(clubs);
};

clubsCtrl.getClub = async (req, res) => {
    const club = await ClubModel.findById(req.params.id);
    res.json(club);
};

clubsCtrl.createClub = async (req, res) => {
    const { name, desc, event, covid, state } = req.body;
    const newClub = new ClubModel({
        name,
        desc,
        event,
        covid,
        state
    });
    console.log(req.body)
    console.log(newClub)
    const createClub = await newClub.save();
    res.json(createClub);
};

clubsCtrl.updateClub = async (req, res) => {
    const { name, desc, event, covid, state } = req.body;
    const updateClub = new ClubModel({
        name,
        desc,
        event,
        covid,
        state
    });
    const club = await ClubModel.findOneAndUpdate(req.params.id, updateClub);
    res.json(club);
};

clubsCtrl.deleteClub = async (req, res) => {
    const club = await ClubModel.findByIdAndDelete(req.params.id);
    res.json(club);
};


module.exports = clubsCtrl;