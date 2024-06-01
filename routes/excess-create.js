const express = require("express");
const router = express.Router();
const isAuthentificated = require("../middlewares/isAuthentificated");

const User = require("../models/User");
const Collection = require("../models/Collection");
const tolerance = require("../tools/tolerance");

router.post(
  "/excess/create",
  tolerance,
  isAuthentificated,
  async (req, res) => {
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
        date: new Date(),
        owner: req.user,
        // allowance: req.body.allowance,
      });

      let weightExcess = 0;
      let price = [0, 125, 250, 375, 500, 625, 750, 875, 1000, 1125, 1250];
      let excessParameters = [
        0, -9, -18, -27, -36, -45, -54, -63, -72, -81, -90,
      ];

      let allowance = [46, 69, 92, 115, 138, 161, 184, 207, 230];

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
      newCollection.weightExcess.push(weightExcess);
      console.log(weightExcess);
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
      newCollection.price.push(price);

      const weight = newCollection.weight;
      for (k = 0; k < weight.length; k++) {
        if (!weight[k].a) {
          if (a) {
            weight[k].a = a;
          } else {
            weight[k].a = null;
          }
        }
        if (!weight[k].b) {
          if (b) {
            weight[k].b = b;
          } else {
            weight[k].b = null;
          }
        }
        if (!weight[k].c) {
          if (c) {
            weight[k].c = c;
          } else {
            weight[k].c = null;
          }
        }
        if (!weight[k].d) {
          if (d) {
            weight[k].d = d;
          } else {
            weight[k].d = null;
          }
        }
        if (!weight[k].e) {
          if (e) {
            weight[k].e = e;
          } else {
            weight[k].e = null;
          }
        }
        if (!weight[k].f) {
          if (f) {
            weight[k].f = f;
          } else {
            weight[k].f = null;
          }
        }
        if (!weight[k].g) {
          if (g) {
            weight[k].g = g;
          } else {
            weight[k].g = null;
          }
        }
        if (!weight[k].h) {
          if (h) {
            weight[k].h = h;
          } else {
            weight[k].h = null;
          }
        }
        if (!weight[k].i) {
          if (i) {
            weight[k].i = i;
          } else {
            weight[k].i = null;
          }
        }
        if (!weight[k].j) {
          if (j) {
            weight[k].j = j;
          } else {
            weight[k].j = null;
          }
        }
      }

      await newCollection.save();

      return res.status(201).json(newCollection);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  }
);

module.exports = router;
