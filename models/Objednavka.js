const mongoose = require("mongoose");

const ObjednavkaSchema = new mongoose.Schema({
    zakaznik: { type: mongoose.Schema.Types.ObjectId, ref: "Zakaznik" },
    Diel: { type: mongoose.Schema.Types.ObjectId, ref: "Diel" },
    datum: { type: Date, default: Date.now },
    stav: { type: String, default: "Čaká na vybavenie" }
});

module.exports = mongoose.model("Objednavka", ObjednavkaSchema);