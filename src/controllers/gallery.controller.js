const SalesCtrl = {};
const SalesModel = require('../models/Sales.model');

SalesCtrl.getSales = async (req, res) => {
    const Sales = await SalesModel.find();
    res.json(Sales);
};

SalesCtrl.getSale = async (req, res) => {
    const Sale = await SalesModel.findById(req.params.id);
    res.json(Sale);
};

SalesCtrl.createSale = async (req, res) => {
    const { name, desc, date_init, date_end } = req.body;
    const newSale = new SalesModel({
        name,
        desc,
        date_init,
        date_end
    });
    console.log(req.body)
    console.log(newSale)
    const createSale = await newSale.save();
    res.json(createSale);
};

SalesCtrl.updateSale = async (req, res) => {
    const { name, desc, date_init, date_end } = req.body;
    const sale = await SalesModel.findOneAndUpdate(req.params.id, {
        $set: {
            name,
            desc,
            date_init,
            date_end
        }
    });
    res.json(sale);
};

SalesCtrl.deleteSale = async (req, res) => {
    const Sale = await SalesModel.findByIdAndDelete(req.params.id);
    res.json(Sale);
};


module.exports = SalesCtrl;