const mongoose = require("mongoose");

const Collection = mongoose.model("bag", {
  allowance: Number,
  price: Array,
  weight: Array,
  date: Date,
});

module.exports = Collection;
