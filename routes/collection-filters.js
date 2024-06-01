const express = require("express");
const router = express.Router();
const isAuthentificated = require("../middlewares/isAuthentificated");

const User = require("../models/User");
const Collection = require("../models/Collection");

router.get("/collection", isAuthentificated, async (req, res) => {
  try {
    const { a, b, c, d, e, f, g, h, i, j } = req.query;

    const collectionToUpdate = await Collection.findById(req.body.collectionId);

    const weight = collectionToUpdate.weight;
    for (k = 0; k < weight.length; k++) {
      if (weight[k].a) {
        if (a) {
          weight[k].a = a;
        } else {
          weight[k].a = null;
        }
      }
      if (weight[k].b) {
        if (b) {
          weight[k].b = b;
        } else {
          weight[k].b = null;
        }
      }
      if (weight[k].c) {
        if (c) {
          weight[k].c = c;
        } else {
          weight[k].c = null;
        }
      }
      if (weight[k].d) {
        if (d) {
          weight[k].d = d;
        } else {
          weight[k].d = null;
        }
      }
      if (weight[k].e) {
        if (e) {
          weight[k].e = e;
        } else {
          weight[k].e = null;
        }
      }
      if (weight[k].f) {
        if (f) {
          weight[k].f = f;
        } else {
          weight[k].f = null;
        }
      }
      if (weight[k].g) {
        if (g) {
          weight[k].g = g;
        } else {
          weight[k].g = null;
        }
      }
      if (weight[k].h) {
        if (h) {
          weight[k].h = h;
        } else {
          weight[k].h = null;
        }
      }
      if (weight[k].i) {
        if (i) {
          weight[k].i = i;
        } else {
          weight[k].i = null;
        }
      }
      if (weight[k].j) {
        if (j) {
          weight[k].j = j;
        } else {
          weight[k].j = null;
        }
      }
    }

    collectionToUpdate.markModified("weight");

    let result = 0;

    const freeWeight = [46, 69, 92, 115, 138, 161, 184, 207, 230];

    if (a === 24) {
      a = 23;
    } else {
      a;
    }
    if (b === 24) {
      b = 23;
    } else {
      b;
    }
    if (c === 24) {
      c = 23;
    } else {
      c;
    }
    if (d === 24) {
      d = 23;
    } else {
      d;
    }
    if (e === 24) {
      e = 23;
    } else {
      e;
    }
    if (f === 24) {
      f = 23;
    } else {
      f;
    }
    if (g === 24) {
      g = 23;
    } else {
      g;
    }
    if (h === 24) {
      h = 23;
    } else {
      h;
    }
    if (i === 24) {
      i = 23;
    } else {
      i;
    }
    if (j === 24) {
      j = 23;
    } else {
      j;
    }

    // for (let m = 0; m < freeWeight.length; m++) {
    if (a && b && !c && !d && !e && !f && !g && !h && !i && !j) {
      result = freeWeight[0] - (a + b);
    } else if (a && b && c && !d && !e && !f && !g && !h && !i && !j) {
      result = freeWeight[1] - (a + b + c);
    } else if (a && b && c && d && !e && !f && !g && !h && !i && !j) {
      result = freeWeight[2] - (a + b + c + d);
    } else if (a && b && c && d && e && !f && !g && !h && !i && !j) {
      result = freeWeight[3] - (a + b + c + d + e);
    } else if (a && b && c && d && e && f && !g && !h && !i && !j) {
      result = freeWeight[4] - (a + b + c + d + e + f);
    } else if (a && b && c && d && e && f && g && !h && !i && !j) {
      result = freeWeight[5] - (a + b + c + d + e + f + g);
    } else if (a && b && c && d && e && f && g && h && !i && !j) {
      result = freeWeight[6] - (a + b + c + d + e + f + g + h);
    } else if (a && b && c && d && e && f && g && h && i && !j) {
      result = freeWeight[7] - (a + b + c + d + e + f + g + h + i);
    } else if (a && b && c && d && e && f && g && h && i && j) {
      result = freeWeight[8] - (a + b + c + d + e + f + g + h + i + j);
    }
    // }
    console.log(result);
    let price = [0, 125, 250, 375, 500, 625, 750, 875, 1000, 1125, 1250];
    let weightExcess = [0, -9, -18, -27, -36, -45, -54, -63, -72, -81, -90];

    if (result === weightExcess[0]) {
      price = price[0];
    } else if (
      result < weightExcess[0] &&
      result >= weightExcess[1] /*less than 9 kilos excess*/
    ) {
      price = price[1]; /*125*/
    } else if (
      result < weightExcess[1] &&
      result >= weightExcess[2] /*9 kilos excess+*/
    ) {
      price = price[2]; /*250*/
    } else if (
      result < weightExcess[2] &&
      result >= weightExcess[3] /*18 kilos excess+*/
    ) {
      price = price[3]; /*375*/
    } else if (
      result < weightExcess[3] &&
      result >= weightExcess[4] /*27 kilos excess+*/
    ) {
      price = price[4]; /*500*/
    } else if (
      result < weightExcess[4] &&
      result >= weightExcess[5] /*36 kilos excess+*/
    ) {
      price = price[5]; /*625*/
    } else if (
      result < weightExcess[5] &&
      result >= weightExcess[6] /*45 kilos excess+*/
    ) {
      price = price[6]; /*750*/
    } else if (
      result < weightExcess[6] &&
      result >= weightExcess[7] /*54 kilos excess+*/
    ) {
      price = price[7]; /*875*/
    } else if (
      result < weightExcess[7] &&
      result >= weightExcess[8] /*63 kilos excess+*/
    ) {
      price = price[8]; /*1000*/
    } else if (
      result < weightExcess[8] &&
      result >= weightExcess[9] /*72 kilos excess+*/
    ) {
      price = price[9]; /*1125*/
    } else if (
      result < weightExcess[9] &&
      result >= weightExcess[10] /*81 kilos excess+*/
    ) {
      price = price[10]; /*1250*/
    } else if (result < weightExcess[10] /*90 kilos excess+*/) {
      console.log("unauthorized");
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
