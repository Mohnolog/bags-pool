const mongoose = require("mongoose");

const Collection = mongoose.model("bag", {
  weight: Array,
  yBags: Array,
  freeAllowance: Array,
  jBags: Array,
  weightExcess: Array,
  price: Array,
  date: Date,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = Collection;
