// Načítanie .env súboru
require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());

const app = express();
const PORT = process.env.PORT || 5000; // Ak PORT nie je v .env, použije 5000

// Middleware
app.use(express.json());
app.use(cors());

// Overenie, či existuje MONGO_URI v .env
if (!process.env.MONGO_URI) {
  console.error("❌ Chyba: MONGO_URI nie je definované v .env súbore!");
  process.exit(1); // Ak chýba MONGO_URI, ukončí aplikáciu
}

// 📌 Pripojenie k MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
   })
  .then(() => console.log("✅ MongoDB pripojené"))
  .catch((err) => console.error("❌ Chyba pri pripojení k MongoDB:", err));

// 📌 API routes
app.use("/api/diely", require("./routes/diely"));
app.use("/api/zakaznici", require("./routes/zakaznici"));
app.use("/api/objednavky", require("./routes/objednavky"));

// Domovská trasa
app.get("/", (req, res) => {
  res.send("Server beží!");
});

// 📌 Spustenie servera
app.listen(PORT, () => {
  console.log(`🚀 Server beží na http://localhost:${PORT}`);
});