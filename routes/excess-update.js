const express = require("express");
const router = express.Router();
const isAuthentificated = require("../middlewares/isAuthentificated");
const tolerance = require("../tools/tolerance");

const User = require("../models/User");
const Collection = require("../models/Collection");

router.put(
  "/excess/update/:id",
  tolerance,
  isAuthentificated,
  async (req, res) => {
    try {
      const { a, b, c, d, e, f, g, h, i, j } = req.body.weight;
      const collectionToUpdate = await Collection.findById(req.params.id);

      let yBags = 0;
      const bagsCount = Object.keys(req.body.weight);
      for (let k = 0; k < bagsCount.length; k++) {
        if (req.body.weight[bagsCount[k]]) {
          yBags++;
        }
      }
      //   console.log(yBags);
      await collectionToUpdate.yBags.pop(yBags);
      collectionToUpdate.yBags.push(yBags);

      const weight = collectionToUpdate.weight;

      //   console.log(collectionToUpdate.weight);
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

      //   const freeAllowance = collectionToUpdate.freeAllowance;
      //   const { l, m, n, o, p, q, r, s, t, u } = req.body.freeAllowance;

      //   //   console.log(l);
      //   if (l) {
      //     freeAllowance[0] = l;
      //   } else {
      //     freeAllowance[0] = null;
      //   }
      //   if (m) {
      //     freeAllowance[1] = m;
      //   } else {
      //     freeAllowance[0] = null;
      //   }
      //   if (n) {
      //     freeAllowance[2] = n;
      //   } else {
      //     freeAllowance[0] = null;
      //   }
      //   if (o) {
      //     freeAllowance[3] = o;
      //   } else {
      //     freeAllowance[0] = null;
      //   }
      //   if (p) {
      //     freeAllowance[4] = p;
      //   } else {
      //     freeAllowance[0] = null;
      //   }
      //   if (q) {
      //     freeAllowance[5] = q;
      //   } else {
      //     freeAllowance[0] = null;
      //   }
      //   if (r) {
      //     freeAllowance[6] = r;
      //   } else {
      //     freeAllowance[0] = null;
      //   }
      //   if (s) {
      //     freeAllowance[7] = s;
      //   } else {
      //     freeAllowance[0] = null;
      //   }
      //   if (t) {
      //     freeAllowance[8] = t;
      //   } else {
      //     freeAllowance[0] = null;
      //   }
      //   if (u) {
      //     freeAllowance[9] = u;
      //   } else {
      //     freeAllowance[0] = null;
      //   }
      //   collectionToUpdate.markModified("freeAllowance");

      let allowance = [46, 69, 92, 115, 138, 161, 184, 207, 230];

      let weightExcess = collectionToUpdate.weightExcess;

      if (a && b && !c && !d && !e && !f && !g && !h && !i && !j) {
        weightExcess = allowance[0] - (a + b);
      } else if (a && b && c && !d && !e && !f && !g && !h && !i && !j) {
        weightExcess = allowance[1] - (a + b + c);
      } else if (a && b && c && d && !e && !f && !g && !h && !i && !j) {
        weightExcess = allowance[2] - (a + b + c + d);
      } else if (a && b && c && d && e && !f && !g && !h && !i && !j) {
        weightExcess = allowance[3] - (a + b + c + d + e);
      } else if (a && b && c && d && e && f && !g && !h && !i && !j) {
        weightExcess = allowance[4] - (a + b + c + d + e + f);
      } else if (a && b && c && d && e && f && g && !h && !i && !j) {
        weightExcess = allowance[5] - (a + b + c + d + e + f + g);
      } else if (a && b && c && d && e && f && g && h && !i && !j) {
        weightExcess = allowance[6] - (a + b + c + d + e + f + g + h);
      } else if (a && b && c && d && e && f && g && h && i && !j) {
        weightExcess = allowance[7] - (a + b + c + d + e + f + g + h + i);
      } else if (a && b && c && d && e && f && g && h && i && j) {
        weightExcess = allowance[8] - (a + b + c + d + e + f + g + h + i + j);
      }

      console.log(weightExcess);
      await collectionToUpdate.weightExcess.pop(weightExcess);
      collectionToUpdate.weightExcess.push(weightExcess);

      let price = [0, 125, 250, 375, 500, 625, 750, 875, 1000, 1125, 1250];
      let excessParameters = [
        0, -9, -18, -27, -36, -45, -54, -63, -72, -81, -90,
      ];

      if (weightExcess === excessParameters[0]) {
        price = price[0];
      } else if (
        weightExcess < excessParameters[0] &&
        weightExcess >= excessParameters[1] /*less than 9 kilos excess*/
      ) {
        price = price[1]; /*125*/
      } else if (
        weightExcess < excessParameters[1] &&
        weightExcess >= excessParameters[2] /*9 kilos excess+*/
      ) {
        price = price[2]; /*250*/
      } else if (
        weightExcess < excessParameters[2] &&
        weightExcess >= excessParameters[3] /*18 kilos excess+*/
      ) {
        price = price[3]; /*375*/
      } else if (
        weightExcess < excessParameters[3] &&
        weightExcess >= excessParameters[4] /*27 kilos excess+*/
      ) {
        price = price[4]; /*500*/
      } else if (
        weightExcess < excessParameters[4] &&
        weightExcess >= excessParameters[5] /*36 kilos excess+*/
      ) {
        price = price[5]; /*625*/
      } else if (
        weightExcess < excessParameters[5] &&
        weightExcess >= excessParameters[6] /*45 kilos excess+*/
      ) {
        price = price[6]; /*750*/
      } else if (
        weightExcess < excessParameters[6] &&
        weightExcess >= excessParameters[7] /*54 kilos excess+*/
      ) {
        price = price[7]; /*875*/
      } else if (
        weightExcess < excessParameters[7] &&
        weightExcess >= excessParameters[8] /*63 kilos excess+*/
      ) {
        price = price[8]; /*1000*/
      } else if (
        weightExcess < excessParameters[8] &&
        weightExcess >= excessParameters[9] /*72 kilos excess+*/
      ) {
        price = price[9]; /*1125*/
      } else if (
        weightExcess < excessParameters[9] &&
        weightExcess >= excessParameters[10] /*81 kilos excess+*/
      ) {
        price = price[10]; /*1250*/
      } else if (weightExcess < excessParameters[10] /*90 kilos excess+*/) {
        console.log("unauthorized");
      }

      console.log(price);

      await collectionToUpdate.price.pop(price);
      collectionToUpdate.price.push(price);

      return res.status(201).json(collectionToUpdate);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error.message });
    }
  }
);

module.exports = router;
