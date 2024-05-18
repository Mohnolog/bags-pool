const express = require("express");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/test");

const app = express();
app.use(express.json());

const Passenger = mongoose.model("bag", {
  allowance: Number,
  price: Number,
  weight: Number,
  date: new Date(),
});
app.get("/", (req, res) => {
  res.status(201).json({ message: "Welcome to this test session" });
});
app.post("/passenger/create", async (req, res) => {
  try {
    const newPassenger = new Passenger({
      weight: req.body.weight,
      allowance: req.body.allowance,
    });

    if (req.body.weight <= 32 && req.body.weight >= 0) {
      if (req.body.allowance > 1 || req.body.weight <= 24) {
        newPassenger.price = 0;
      } else {
        newPassenger.price = 125;
      }
    } else {
      return res.status(404).json({ message: "wrong entries" });
    }
    await newPassenger.save();

    return res.status(201).json(`You must pay ${newPassenger.price} euros`);
  } catch (error) {
    return res.status(500).json({ error: message.error });
  }
});

app.put("/passenger/update", async (req, res) => {
  try {
    const newPassenger = new Passenger({
      weight: req.body.weight,
      allowance: req.body.allowance,
    });
    if (req.body.weight <= 32 && req.body.weight >= 0 && allowance > 1) {
      price = 0;
    }
    await newPassenger.save();
    const sum = (a, b) => {
      let result = 0;

      if (a <= 32 && b <= 32 && a >= 0 && b >= 0) {
        if (a + b <= 46 && a + b >= 0) {
          result = 0;
        } else if (a + b >= 46 && a + b <= 55) {
          if (a === 24 && b === 24) {
            result = 0;
          } else if ((a === 24 || b === 24) && a + b <= 47) {
            result = 0;
          } else {
            result = 125;
          }
        } else if ((a === 24 || b === 24) && a + b <= 56) {
          result = 125;
        } else {
          result = 250;
        }
      }

      return result;
    };
    // console.log(sum(23, 25));

    // const multiply = (c, d, callback, v) => {
    //   return callback(c, d) * v;
    // };

    console.log(`You must pay ${sum(24, 32)} euros`);

    return res.status(201).json(`You must pay ${sum(24, 32)} euros`);
  } catch (error) {
    return res.status(500).json({ error: message.error });
  }
});

app.all("*", (req, res) => {
  return res.status(404).json({ message: "page not found" });
});

app.listen(3000, () => {
  console.log("3, 2,... ignition, server started 🔥🔥🔥🚀");
});
