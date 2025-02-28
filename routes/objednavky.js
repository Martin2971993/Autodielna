const express = require("express");
const router = express.Router();
const Objednavka = require("../models/Objednavka");

router.get("/", async (req, res) => {
    const objednavky = await Objednavka.find().populate("zakaznik").populate("diel");
    res.json(objednavky);
});

router.post("/", async (req, res) => {
    const novaObjednavka = new Objednavka(req.body);
    await novaObjednavka.save();
    res.status(201).json(novaObjednavka);
});

module.exports = router;