const express = require("express");
const router = express.Router();
const isAuthentificated = require("../middlewares/isAuthentificated");
const tolerance = require("../tools/tolerance");

const User = require("../models/User");
const Collection = require("../models/Collection");

router.put("/excess", tolerance, isAuthentificated, async (req, res) => {
  try {
    const collection = await Collection.find().populate({
      path: "owner",
      select: "account",
    });
    const count = await Collection.countDocuments();

    res.json({
      count: count,
      collection: collection,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
});

module.exports = router;
