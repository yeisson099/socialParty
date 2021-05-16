const clubsCtrl = {};
const ClubModel = require('../models/Clubs.model');
const cloudinary = require('../cloud/cloudinary');
const fs = require('fs-extra');


//CRUD
clubsCtrl.getClubs = async (req, res) => {
    if (Object.keys(req.query).length > 0) {
        const clubs = await clubsCtrl.filter(req.query);
        res.json(clubs);
    } else {
        const clubs = await ClubModel.find();
        res.json(clubs);
    }
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

//filter
clubsCtrl.filter = async (params) => {
    const { musical_genre, type, covid, cover, events } = params;
    const clubs = await ClubModel.find({
        musical_genre: musical_genre,
        type: type,
        events: { $not: { $size: Number(events) } },
        covid: covid,
        cover: { $lte: Number(cover) }
    });
    return clubs;
};




module.exports = clubsCtrl;