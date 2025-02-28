const Diel = require("../models/Diel");

exports.getDiely = async (req, res) => {
    const diely = await Diel.find();
    res.json(diely);
};

exports.createDiel = async (req, res) => {
    const novyDiel = new Diel(req.body);
    await novyDiel.save();
    res.status(201).json(novyDiel);
};