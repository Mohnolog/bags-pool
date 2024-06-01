const express = require("express");
const router = express.Router();
const isAuthentificated = require("../middlewares/isAuthentificated");

const User = require("../models/User");
const Collection = require("../models/Collection");
const tolerance = require("../tools/tolerance");

router.post(
  "/collection/create",
  tolerance,
  isAuthentificated,
  async (req, res) => {
    try {
      const { a, b, c, d, e, f, g, h, i, j } = req.body;

      let price = 0;

      if (a && b && c && d && e && f && g && h && i && j) {
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
        newCollection.price.push(price);

        await newCollection.save();

        return res.status(201).json(newCollection);
      } else if (a && b && c && d && e && f && g && h && i && !j) {
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
            { j: null },
          ],
          date: new Date(),
          owner: req.user,
          // allowance: req.body.allowance,
        });
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
        newCollection.price.push(price);

        await newCollection.save();

        return res.status(201).json(newCollection);
      } else if (a && b && c && d && e && f && g && h && !i && !j) {
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
            { i: null },
            { j: null },
          ],
          date: new Date(),
          owner: req.user,
          // allowance: req.body.allowance,
        });
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
        newCollection.price.push(price);

        await newCollection.save();

        return res.status(201).json(newCollection);
      } else if (a && b && c && d && e && f && g && !h && !i && !j) {
        const newCollection = new Collection({
          weight: [
            { a },
            { b },
            { c },
            { d },
            { e },
            { f },
            { g },
            { h: null },
            { i: null },
            { j: null },
          ],
          date: new Date(),
          owner: req.user,
          // allowance: req.body.allowance,
        });
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
        newCollection.price.push(price);

        await newCollection.save();

        return res.status(201).json(newCollection);
      } else if (a && b && c && d && e && f && !g && !h && !i && !j) {
        const newCollection = new Collection({
          weight: [
            { a },
            { b },
            { c },
            { d },
            { e },
            { f },
            { g: null },
            { h: null },
            { i: null },
            { j: null },
          ],
          date: new Date(),
          owner: req.user,
          // allowance: req.body.allowance,
        });
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
        newCollection.price.push(price);

        await newCollection.save();

        return res.status(201).json(newCollection);
      } else if (a && b && c && d && e && !f && !g && !h && !i && !j) {
        const newCollection = new Collection({
          weight: [
            { a },
            { b },
            { c },
            { d },
            { e },
            { f: null },
            { g: null },
            { h: null },
            { i: null },
            { j: null },
          ],
          date: new Date(),
          owner: req.user,
          // allowance: req.body.allowance,
        });
        if (a + b + c + d + e <= 115) {
          price = 0;
        } else if (a + b + c + d + e > 115 && a + b + c + d + e <= 124) {
          price = 125;
        } else if (a + b + c + d + e > 124 && a + b + c + d + e <= 133) {
          price = 250;
        } else if (a + b + c + d + e > 133 && a + b + c + d + e <= 142) {
          price = 375;
        } else if (a + b + c + d + e > 142 && a + b + c + d + e <= 151) {
          price = 500;
        } else {
          price = 625;
        }
        newCollection.price.push(price);

        await newCollection.save();

        return res.status(201).json(newCollection);
      } else if (a && b && c && d && !e && !f && !g && !h && !i && !j) {
        const newCollection = new Collection({
          weight: [
            { a },
            { b },
            { c },
            { d },
            { e: null },
            { f: null },
            { g: null },
            { h: null },
            { i: null },
            { j: null },
          ],
          date: new Date(),
          owner: req.user,
          // allowance: req.body.allowance,
        });
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
        newCollection.price.push(price);

        await newCollection.save();

        return res.status(201).json(newCollection);
      } else if (a && b && c && !d && !e && !f && !g && !h && !i && !j) {
        const newCollection = new Collection({
          weight: [
            { a },
            { b },
            { c },
            { d: null },
            { e: null },
            { f: null },
            { g: null },
            { h: null },
            { i: null },
            { j: null },
          ],
          date: new Date(),
          owner: req.user,
          // allowance: req.body.allowance,
        });
        if (a + b + c <= 69) {
          price = 0;
        } else if (a + b + c > 69 && a + b + c <= 78) {
          price = 125;
        } else if (a + b + c > 78 && a + b + c <= 87) {
          price = 250;
        } else {
          price = 375;
        }
        newCollection.price.push(price);

        await newCollection.save();

        return res.status(201).json(newCollection);
      } else if (a && b && !c && !d && !e && !f && !g && !h && !i && !j) {
        const newCollection = new Collection({
          weight: [
            { a },
            { b },
            { c: null },
            { d: null },
            { e: null },
            { f: null },
            { g: null },
            { h: null },
            { i: null },
            { j: null },
          ],
          date: new Date(),
          owner: req.user,
          // allowance: req.body.allowance,
        });
        if (a + b <= 46) {
          price = 0;
        } else if (a + b > 46 && a + b <= 55) {
          price = 125;
        } else {
          price = 250;
        }
        newCollection.price.push(price);

        await newCollection.save();

        return res.status(201).json(newCollection);
      }
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  }
);

module.exports = router;
