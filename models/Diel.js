const mongoose = require("mongoose");

const DielSchema = new mongoose.Schema({
    nazov: String,
    cena: Number,
    skladom: Boolean
});

module.exports = mongoose.model("Diel", DielSchema);
