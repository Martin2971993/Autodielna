const express = require("express");
const router = express.Router();
const DielyController = require("../controllers/DielyController");

router.get("/", DielyController.getDiely);
router.post("/", DielyController.createDiel);

module.exports = router;
