const express = require("express");
const router = express.Router();
const Zakaznik = require("../models/Zakaznik");

router.get("/", async (req, res) => {
    const zakaznici = await Zakaznik.find();
    res.json(zakaznici);
});

router.post("/", async (req, res) => {
    const novyZakaznik = new Zakaznik(req.body);
    await novyZakaznik.save();
    res.status(201).json(novyZakaznik);
});

module.exports = router;