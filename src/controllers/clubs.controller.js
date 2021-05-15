const clubsCtrl = {};
const ClubModel = require('../models/Clubs.model');
const cloudinary = require('../cloud/cloudinary');
const fs = require('fs-extra');


//CRUD
clubsCtrl.getClubs = async (req, res) => {
    const clubs = await ClubModel.find();
    res.json(clubs);
};

clubsCtrl.getClub = async (req, res) => {
    const club = await ClubModel.findById(req.params.id);
    res.json(club);
};

clubsCtrl.createClub = async (req, res) => {
    const { name, desc, type, covid, state, cover, addres, musical_genre } = req.body;
    const imgRes = await cloudinary.v2.uploader.upload(req.files[0].path);
    await fs.unlink(req.files[0].path)
    const newClub = new ClubModel({
        name,
        background: imgRes.url,
        public_id: imgRes.public_id,
        desc,
        type,
        covid,
        state,
        cover, 
        addres, 
        musical_genre
    });
    const createClub = await newClub.save();
    res.send(createClub);
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
    const { type } = req.params;
    console.log(type)
    const clubs = await ClubModel.find({
        type
    });
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
clubsCtrl.getBygenre = async (req, res) => {
    const { genre } = req.params;
    console.log(genre)
    const clubs = await ClubModel.find({
        musical_genre : genre
    });
    res.json(clubs);
};




module.exports = clubsCtrl;