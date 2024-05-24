const express = require("express");
const router = express.Router();
const isAuthentificated = require("../middlewares/isAuthentificated");

const User = require("../models/User");
const Collection = require("../models/Collection");

router.put("/collection/update/:id", isAuthentificated, async (req, res) => {
  try {
    const { a, b, c, d, e, f, g, h, i, j } = req.body;
    const collectionToUpdate = await Collection.findById(req.params.id);

    const weight = collectionToUpdate.weight;
    for (k = 0; k < weight.length; k++) {
      if (weight[k].a || weight[k].a === null) {
        if (a) {
          weight[k].a = a;
        } else {
          weight[k].a = null;
        }
      }
      if (weight[k].b || weight[k].b === null) {
        if (b) {
          weight[k].b = b;
        } else {
          weight[k].b = null;
        }
      }
      if (weight[k].c || weight[k].c === null) {
        if (c) {
          weight[k].c = c;
        } else {
          weight[k].c = null;
        }
      }
      if (weight[k].d || weight[k].d === null) {
        if (d) {
          weight[k].d = d;
        } else {
          weight[k].d = null;
        }
      }
      if (weight[k].e || weight[k].e === null) {
        if (e) {
          weight[k].e = e;
        } else {
          weight[k].e = null;
        }
      }
      if (weight[k].f || weight[k].f === null) {
        if (f) {
          weight[k].f = f;
        } else {
          weight[k].f = null;
        }
      }
      if (weight[k].g || weight[k].g === null) {
        if (g) {
          weight[k].g = g;
        } else {
          weight[k].g = null;
        }
      }
      if (weight[k].h || weight[k].h === null) {
        if (h) {
          weight[k].h = h;
        } else {
          weight[k].h = null;
        }
      }
      if (weight[k].i || weight[k].i === null) {
        if (i) {
          weight[k].i = i;
        } else {
          weight[k].i = null;
        }
      }
      if (weight[k].j || weight[k].j === null) {
        if (j) {
          weight[k].j = j;
        } else {
          weight[k].j = null;
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

module.exports = router;
