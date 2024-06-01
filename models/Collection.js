const mongoose = require("mongoose");

const Collection = mongoose.model("bag", {
  allowance: Number,
  price: Array,
  weight: Array,
  date: Date,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  weightExcess: Array,
});

module.exports = Collection;
