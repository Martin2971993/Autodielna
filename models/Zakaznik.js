const mongoose = require("mongoose");

const ZakaznikSchema = new mongoose.Schema({
    meno: String,
    email: String,
    telefon: String
});

module.exports = mongoose.model("Zakaznik", ZakaznikSchema);