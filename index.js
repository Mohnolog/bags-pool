const express = require("express");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/pool");

const app = express();
app.use(express.json());

const Collection = mongoose.model("bag", {
  allowance: Number,
  price: Array,
  weight: Array,
  date: Date,
});
app.get("/", (req, res) => {
  res.status(201).json({
    message: "Welcome to the bagPool API for passengers or professionals",
  });
});

app.post("/collection/create", async (req, res) => {
  try {
    const { a, b, c, d, e, f, g, h, i, j } = req.body;
    const newCollection = new Collection({
      weight: [
        { a },
        { b },
        { c },
        { d },
        { e },
        { f },
        { g },
        { h },
        { i },
        { j },
      ],
      // allowance: req.body.allowance,
    });

    let price = 0;
    if (
      a <= 32 &&
      b <= 32 &&
      c <= 32 &&
      d <= 32 &&
      e <= 32 &&
      f <= 32 &&
      g <= 32 &&
      h <= 32 &&
      i <= 32 &&
      j <= 32 &&
      a >= 0 &&
      b >= 0 &&
      c >= 0 &&
      d >= 0 &&
      e >= 0 &&
      f >= 0 &&
      g >= 0 &&
      h >= 0 &&
      i >= 0 &&
      j >= 0
    ) {
      if ((a, b)) {
        if (a + b <= 46) {
          price = 0;
        } else if (a + b > 46 && a + b <= 55) {
          price = 125;
        } else {
          price = 250;
        }
      }
      if ((a, b, c)) {
        if (a + b + c <= 69) {
          price = 0;
        } else if (a + b + c > 69 && a + b + c <= 78) {
          price = 125;
        } else if (a + b + c > 78 && a + b + c <= 87) {
          price = 250;
        } else {
          price = 375;
        }
      }
      if ((a, b, c, d)) {
        if (a + b + c + d <= 92) {
          price = 0;
        } else if (a + b + c + d > 92 && a + b + c + d <= 101) {
          price = 125;
        } else if (a + b + c + d > 101 && a + b + c + d <= 110) {
          price = 250;
        } else if (a + b + c + d > 110 && a + b + c + d <= 119) {
          price = 375;
        } else {
          price = 500;
        }
      }
      if ((a, b, c, d, e)) {
        if (a + b + c + d + e <= 115) {
          price = 0;
        } else if (a + b + c + d + e > 115 && a + b + c + d + e <= 114) {
          price = 125;
        } else if (a + b + c + d + e > 114 && a + b + c + d + e <= 123) {
          price = 250;
        } else if (a + b + c + d + e > 123 && a + b + c + d + e <= 132) {
          price = 375;
        } else if (a + b + c + d + e > 132 && a + b + c + d + e <= 141) {
          price = 500;
        } else {
          price = 625;
        }
      }
      if ((a, b, c, d, e, f)) {
        if (a + b + c + d + e + f <= 138) {
          price = 0;
        } else if (
          a + b + c + d + e + f > 138 &&
          a + b + c + d + e + f <= 147
        ) {
          price = 125;
        } else if (
          a + b + c + d + e + f > 147 &&
          a + b + c + d + e + f <= 156
        ) {
          price = 250;
        } else if (
          a + b + c + d + e + f > 156 &&
          a + b + c + d + e + f <= 165
        ) {
          price = 375;
        } else if (
          a + b + c + d + e + f > 165 &&
          a + b + c + d + e + f <= 174
        ) {
          price = 500;
        } else if (
          a + b + c + d + e + f > 174 &&
          a + b + c + d + e + f <= 183
        ) {
          price = 625;
        } else {
          price = 750;
        }
      }
      if ((a, b, c, d, e, f, g)) {
        if (a + b + c + d + e + f + g <= 161) {
          price = 0;
        } else if (
          a + b + c + d + e + f + g > 161 &&
          a + b + c + d + e + f + g <= 170
        ) {
          price = 125;
        } else if (
          a + b + c + d + e + f + g > 170 &&
          a + b + c + d + e + f + g <= 179
        ) {
          price = 250;
        } else if (
          a + b + c + d + e + f + g > 179 &&
          a + b + c + d + e + f + g <= 188
        ) {
          price = 375;
        } else if (
          a + b + c + d + e + f + g > 188 &&
          a + b + c + d + e + f + g <= 197
        ) {
          price = 500;
        } else if (
          a + b + c + d + e + f + g > 197 &&
          a + b + c + d + e + f + g <= 206
        ) {
          price = 625;
        } else if (
          a + b + c + d + e + f + g > 206 &&
          a + b + c + d + e + f + g <= 215
        ) {
          price = 750;
        } else {
          price = 875;
        }
      }
      if ((a, b, c, d, e, f, g, h)) {
        if (a + b + c + d + e + f + g + h <= 184) {
          price = 0;
        } else if (
          a + b + c + d + e + f + g + h > 184 &&
          a + b + c + d + e + f + g + h <= 193
        ) {
          price = 125;
        } else if (
          a + b + c + d + e + f + g + h > 193 &&
          a + b + c + d + e + f + g + h <= 202
        ) {
          price = 250;
        } else if (
          a + b + c + d + e + f + g + h > 202 &&
          a + b + c + d + e + f + g + h <= 211
        ) {
          price = 375;
        } else if (
          a + b + c + d + e + f + g + h > 211 &&
          a + b + c + d + e + f + g + h <= 220
        ) {
          price = 500;
        } else if (
          a + b + c + d + e + f + g + h > 220 &&
          a + b + c + d + e + f + g + h <= 229
        ) {
          price = 625;
        } else if (
          a + b + c + d + e + f + g + h > 229 &&
          a + b + c + d + e + f + g + h <= 238
        ) {
          price = 750;
        } else if (
          a + b + c + d + e + f + g + h > 238 &&
          a + b + c + d + e + f + g + h <= 247
        ) {
          price = 875;
        } else {
          price = 1000;
        }
      }
      if ((a, b, c, d, e, f, g, h, i)) {
        if (a + b + c + d + e + f + g + h + i <= 207) {
          price = 0;
        } else if (
          a + b + c + d + e + f + g + h + i > 207 &&
          a + b + c + d + e + f + g + h + i <= 216
        ) {
          price = 125;
        } else if (
          a + b + c + d + e + f + g + h + i > 216 &&
          a + b + c + d + e + f + g + h + i <= 225
        ) {
          price = 250;
        } else if (
          a + b + c + d + e + f + g + h + i > 225 &&
          a + b + c + d + e + f + g + h + i <= 234
        ) {
          price = 375;
        } else if (
          a + b + c + d + e + f + g + h + i > 234 &&
          a + b + c + d + e + f + g + h + i <= 243
        ) {
          price = 500;
        } else if (
          a + b + c + d + e + f + g + h + i > 243 &&
          a + b + c + d + e + f + g + h + i <= 252
        ) {
          price = 625;
        } else if (
          a + b + c + d + e + f + g + h + i > 252 &&
          a + b + c + d + e + f + g + h + i <= 261
        ) {
          price = 750;
        } else if (
          a + b + c + d + e + f + g + h + i > 261 &&
          a + b + c + d + e + f + g + h + i <= 270
        ) {
          price = 875;
        } else if (
          a + b + c + d + e + f + g + h + i > 270 &&
          a + b + c + d + e + f + g + h + i <= 279
        ) {
          price = 1000;
        } else {
          price = 1125;
        }
      }
      if ((a, b, c, d, e, f, g, h, i, j)) {
        if (a + b + c + d + e + f + g + h + i + j <= 230) {
          price = 0;
        } else if (
          a + b + c + d + e + f + g + h + i + j > 230 &&
          a + b + c + d + e + f + g + h + i + j <= 239
        ) {
          price = 125;
        } else if (
          a + b + c + d + e + f + g + h + i + j > 239 &&
          a + b + c + d + e + f + g + h + i + j <= 248
        ) {
          price = 250;
        } else if (
          a + b + c + d + e + f + g + h + i + j > 248 &&
          a + b + c + d + e + f + g + h + i + j <= 257
        ) {
          price = 375;
        } else if (
          a + b + c + d + e + f + g + h + i + j > 257 &&
          a + b + c + d + e + f + g + h + i + j <= 266
        ) {
          price = 500;
        } else if (
          a + b + c + d + e + f + g + h + i + j > 266 &&
          a + b + c + d + e + f + g + h + i + j <= 275
        ) {
          price = 625;
        } else if (
          a + b + c + d + e + f + g + h + i + j > 275 &&
          a + b + c + d + e + f + g + h + i + j <= 284
        ) {
          price = 750;
        } else if (
          a + b + c + d + e + f + g + h + i + j > 284 &&
          a + b + c + d + e + f + g + h + i + j <= 293
        ) {
          price = 875;
        } else if (
          a + b + c + d + e + f + g + h + i + j > 293 &&
          a + b + c + d + e + f + g + h + i + j <= 302
        ) {
          price = 1000;
        } else if (
          a + b + c + d + e + f + g + h + i + j > 302 &&
          a + b + c + d + e + f + g + h + i + j <= 311
        ) {
          price = 1125;
        } else {
          price = 1250;
        }
      }
    } else {
      console.log("wrong entry");
    }
    newCollection.price.push(price);

    await newCollection.save();

    return res.status(201).json(price);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

app.put("/collection/update/:id", async (req, res) => {
  try {
    const { a, b, c, d, e, f, g, h, i, j } = req.body;
    const collectionToUpdate = await Collection.findById(req.params.id);

    const weight = collectionToUpdate.weight;
    for (k = 0; k < weight.length; k++) {
      if (weight[k].a) {
        if (req.body.a) {
          weight[k].a = req.body.a;
          // const a = req.body.a;
          // return a;
        }
      }
      if (weight[k].b) {
        if (b) {
          weight[k].b = b;
          // const b = req.body.b;
          // return b;
        }
      }
      if (weight[k].c) {
        if (c) {
          weight[k].c = c;
          // const c = req.body.c;
          // return c;
        }
      }
      if (weight[k].d) {
        if (d) {
          weight[k].d = d;
          // const d = req.body.d;
          // return d;
        }
      }
      if (weight[k].e) {
        if (e) {
          weight[k].e = e;
          // const e = req.body.e;
          // return e;
        }
      }
      if (weight[k].f) {
        if (f) {
          weight[k].f = f;
          // const f = req.body.f;
          // return f;
        }
      }
      if (weight[k].g) {
        if (g) {
          weight[k].g = g;
          // const g = req.body.g;
          // return g;
        }
      }
      if (weight[k].h) {
        if (h) {
          weight[k].h = h;
          // const h = req.body.h;
          // return h;
        }
      }
      if (weight[k].i) {
        if (i) {
          weight[k].i = i;
          // const i = req.body.i;
          // return i;
        }
      }
      if (weight[k].j) {
        if (j) {
          weight[k].j = j;
          // const j = req.body.j;
          // return j;
        }
      }
    }

    collectionToUpdate.markModified("weight");

    let price = 0;

    if ((a, b)) {
      if (a + b <= 46) {
        price = 0;
      } else if (a + b > 46 && a + b <= 55) {
        price = 125;
      } else {
        price = 250;
      }
    }
    if ((a, b, c)) {
      if (a + b + c <= 69) {
        price = 0;
      } else if (a + b + c > 69 && a + b + c <= 78) {
        price = 125;
      } else if (a + b + c > 78 && a + b + c <= 87) {
        price = 250;
      } else {
        price = 375;
      }
    }
    if ((a, b, c, d)) {
      if (a + b + c + d <= 92) {
        price = 0;
      } else if (a + b + c + d > 92 && a + b + c + d <= 101) {
        price = 125;
      } else if (a + b + c + d > 101 && a + b + c + d <= 110) {
        price = 250;
      } else if (a + b + c + d > 110 && a + b + c + d <= 119) {
        price = 375;
      } else {
        price = 500;
      }
    }
    if ((a, b, c, d, e)) {
      if (a + b + c + d + e <= 115) {
        price = 0;
      } else if (a + b + c + d + e > 115 && a + b + c + d + e <= 114) {
        price = 125;
      } else if (a + b + c + d + e > 114 && a + b + c + d + e <= 123) {
        price = 250;
      } else if (a + b + c + d + e > 123 && a + b + c + d + e <= 132) {
        price = 375;
      } else if (a + b + c + d + e > 132 && a + b + c + d + e <= 141) {
        price = 500;
      } else {
        price = 625;
      }
    }
    if ((a, b, c, d, e, f)) {
      if (a + b + c + d + e + f <= 138) {
        price = 0;
      } else if (a + b + c + d + e + f > 138 && a + b + c + d + e + f <= 147) {
        price = 125;
      } else if (a + b + c + d + e + f > 147 && a + b + c + d + e + f <= 156) {
        price = 250;
      } else if (a + b + c + d + e + f > 156 && a + b + c + d + e + f <= 165) {
        price = 375;
      } else if (a + b + c + d + e + f > 165 && a + b + c + d + e + f <= 174) {
        price = 500;
      } else if (a + b + c + d + e + f > 174 && a + b + c + d + e + f <= 183) {
        price = 625;
      } else {
        price = 750;
      }
    }
    if ((a, b, c, d, e, f, g)) {
      if (a + b + c + d + e + f + g <= 161) {
        price = 0;
      } else if (
        a + b + c + d + e + f + g > 161 &&
        a + b + c + d + e + f + g <= 170
      ) {
        price = 125;
      } else if (
        a + b + c + d + e + f + g > 170 &&
        a + b + c + d + e + f + g <= 179
      ) {
        price = 250;
      } else if (
        a + b + c + d + e + f + g > 179 &&
        a + b + c + d + e + f + g <= 188
      ) {
        price = 375;
      } else if (
        a + b + c + d + e + f + g > 188 &&
        a + b + c + d + e + f + g <= 197
      ) {
        price = 500;
      } else if (
        a + b + c + d + e + f + g > 197 &&
        a + b + c + d + e + f + g <= 206
      ) {
        price = 625;
      } else if (
        a + b + c + d + e + f + g > 206 &&
        a + b + c + d + e + f + g <= 215
      ) {
        price = 750;
      } else {
        price = 875;
      }
    }
    if ((a, b, c, d, e, f, g, h)) {
      if (a + b + c + d + e + f + g + h <= 184) {
        price = 0;
      } else if (
        a + b + c + d + e + f + g + h > 184 &&
        a + b + c + d + e + f + g + h <= 193
      ) {
        price = 125;
      } else if (
        a + b + c + d + e + f + g + h > 193 &&
        a + b + c + d + e + f + g + h <= 202
      ) {
        price = 250;
      } else if (
        a + b + c + d + e + f + g + h > 202 &&
        a + b + c + d + e + f + g + h <= 211
      ) {
        price = 375;
      } else if (
        a + b + c + d + e + f + g + h > 211 &&
        a + b + c + d + e + f + g + h <= 220
      ) {
        price = 500;
      } else if (
        a + b + c + d + e + f + g + h > 220 &&
        a + b + c + d + e + f + g + h <= 229
      ) {
        price = 625;
      } else if (
        a + b + c + d + e + f + g + h > 229 &&
        a + b + c + d + e + f + g + h <= 238
      ) {
        price = 750;
      } else if (
        a + b + c + d + e + f + g + h > 238 &&
        a + b + c + d + e + f + g + h <= 247
      ) {
        price = 875;
      } else {
        price = 1000;
      }
    }
    if ((a, b, c, d, e, f, g, h, i)) {
      if (a + b + c + d + e + f + g + h + i <= 207) {
        price = 0;
      } else if (
        a + b + c + d + e + f + g + h + i > 207 &&
        a + b + c + d + e + f + g + h + i <= 216
      ) {
        price = 125;
      } else if (
        a + b + c + d + e + f + g + h + i > 216 &&
        a + b + c + d + e + f + g + h + i <= 225
      ) {
        price = 250;
      } else if (
        a + b + c + d + e + f + g + h + i > 225 &&
        a + b + c + d + e + f + g + h + i <= 234
      ) {
        price = 375;
      } else if (
        a + b + c + d + e + f + g + h + i > 234 &&
        a + b + c + d + e + f + g + h + i <= 243
      ) {
        price = 500;
      } else if (
        a + b + c + d + e + f + g + h + i > 243 &&
        a + b + c + d + e + f + g + h + i <= 252
      ) {
        price = 625;
      } else if (
        a + b + c + d + e + f + g + h + i > 252 &&
        a + b + c + d + e + f + g + h + i <= 261
      ) {
        price = 750;
      } else if (
        a + b + c + d + e + f + g + h + i > 261 &&
        a + b + c + d + e + f + g + h + i <= 270
      ) {
        price = 875;
      } else if (
        a + b + c + d + e + f + g + h + i > 270 &&
        a + b + c + d + e + f + g + h + i <= 279
      ) {
        price = 1000;
      } else {
        price = 1125;
      }
    }
    if ((a, b, c, d, e, f, g, h, i, j)) {
      if (a + b + c + d + e + f + g + h + i + j <= 230) {
        price = 0;
      } else if (
        a + b + c + d + e + f + g + h + i + j > 230 &&
        a + b + c + d + e + f + g + h + i + j <= 239
      ) {
        price = 125;
      } else if (
        a + b + c + d + e + f + g + h + i + j > 239 &&
        a + b + c + d + e + f + g + h + i + j <= 248
      ) {
        price = 250;
      } else if (
        a + b + c + d + e + f + g + h + i + j > 248 &&
        a + b + c + d + e + f + g + h + i + j <= 257
      ) {
        price = 375;
      } else if (
        a + b + c + d + e + f + g + h + i + j > 257 &&
        a + b + c + d + e + f + g + h + i + j <= 266
      ) {
        price = 500;
      } else if (
        a + b + c + d + e + f + g + h + i + j > 266 &&
        a + b + c + d + e + f + g + h + i + j <= 275
      ) {
        price = 625;
      } else if (
        a + b + c + d + e + f + g + h + i + j > 275 &&
        a + b + c + d + e + f + g + h + i + j <= 284
      ) {
        price = 750;
      } else if (
        a + b + c + d + e + f + g + h + i + j > 284 &&
        a + b + c + d + e + f + g + h + i + j <= 293
      ) {
        price = 875;
      } else if (
        a + b + c + d + e + f + g + h + i + j > 293 &&
        a + b + c + d + e + f + g + h + i + j <= 302
      ) {
        price = 1000;
      } else if (
        a + b + c + d + e + f + g + h + i + j > 302 &&
        a + b + c + d + e + f + g + h + i + j <= 311
      ) {
        price = 1125;
      } else {
        price = 1250;
      }
    }
    await collectionToUpdate.price.pop(price);
    collectionToUpdate.price.push(price);

    await collectionToUpdate.save();

    return res.status(201).json(collectionToUpdate);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
});

app.all("*", (req, res) => {
  return res.status(404).json({ message: "page not found" });
});

app.listen(3000, () => {
  console.log("3, 2,... ignition, server started 🔥🔥🔥🚀");
});
