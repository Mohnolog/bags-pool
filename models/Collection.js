const mongoose = require("mongoose");

const Collection = mongoose.model("bag", {
  yBags: Array,
  jBags: Array,
  weightExcess: Array,
  price: Array,
  weight: Array,
  freeAllowance: Array,
  date: Date,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = Collection;
