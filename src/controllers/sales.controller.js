const clubsCtrl = {};
const SalesModel = require('../models/Sales.model');

clubsCtrl.getClubs = async (req, res) => {
    const clubs = await SalesModel.find();
    res.json(clubs);
};

clubsCtrl.getClub = async (req, res) => {
    const club = await SalesModel.findById(req.params.id);
    res.json(club);
};

clubsCtrl.createClub = async (req, res) => {
    const { name, desc, date_init, date_end } = req.body;
    const newClub = new SalesModel({
        name,
        desc,
        date_init,
        date_end
    });
    console.log(req.body)
    console.log(newClub)
    const createClub = await newClub.save();
    res.json(createClub);
};

clubsCtrl.updateClub = async (req, res) => {
    const { name, desc, event, covid, state } = req.body;
    const updateClub = new SalesModel({
        name,
        desc,
        event,
        covid,
        state
    });
    const club = await SalesModel.findOneAndUpdate(req.params.id, updateClub);
    res.json(club);
};

clubsCtrl.deleteClub = async (req, res) => {
    const club = await SalesModel.findByIdAndDelete(req.params.id);
    res.json(club);
};


module.exports = clubsCtrl;