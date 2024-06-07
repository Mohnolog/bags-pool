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
      const { a, b, c, d, e, f, g, h, i, j } = req.body.weight;

      const newCollection = new Collection({
        weight: [],
        freeAllowance: [],
        date: new Date(),
        owner: req.user,
      });

      const weight = newCollection.weight;
      if (!a) {
        weight.push(null);
      } else {
        weight.push(a);
      }

      if (!b) {
        weight.push(null);
      } else {
        weight.push(b);
      }

      if (!c) {
        weight.push(null);
      } else {
        weight.push(c);
      }
      if (!d) {
        weight.push(null);
      } else {
        weight.push(d);
      }
      if (!e) {
        weight.push(null);
      } else {
        weight.push(e);
      }
      if (!f) {
        weight.push(null);
      } else {
        weight.push(f);
      }
      if (!g) {
        weight.push(null);
      } else {
        weight.push(g);
      }
      if (!h) {
        weight.push(null);
      } else {
        weight.push(h);
      }
      if (!i) {
        weight.push(null);
      } else {
        weight.push(i);
      }
      if (!j) {
        weight.push(null);
      } else {
        weight.push(j);
      }

      let yBags = 0;
      let overAllNonJWeight = 0;
      const bagsCount = Object.keys(req.body.weight);
      for (let k = 0; k < bagsCount.length; k++) {
        if (req.body.weight[bagsCount[k]]) {
          yBags++;
          overAllNonJWeight = overAllNonJWeight + req.body.weight[bagsCount[k]];
        }
      }
      // console.log(yBags);
      // console.log(overAllNonJWeight);
      newCollection.yBags.push(yBags);

      const { l, m, n, o, p, q, r, s, t, u } = req.body.freeAllowance;
      const freeAllowance = newCollection.freeAllowance;
      if (!l) {
        freeAllowance.push(null);
      } else {
        freeAllowance.push(l);
      }
      if (!m) {
        freeAllowance.push(null);
      } else {
        freeAllowance.push(m);
      }
      if (!n) {
        freeAllowance.push(null);
      } else {
        freeAllowance.push(n);
      }
      if (!o) {
        freeAllowance.push(null);
      } else {
        freeAllowance.push(o);
      }
      if (!p) {
        freeAllowance.push(null);
      } else {
        freeAllowance.push(p);
      }
      if (!q) {
        freeAllowance.push(null);
      } else {
        freeAllowance.push(q);
      }
      if (!r) {
        freeAllowance.push(null);
      } else {
        freeAllowance.push(r);
      }
      if (!s) {
        freeAllowance.push(null);
      } else {
        freeAllowance.push(s);
      }
      if (!t) {
        freeAllowance.push(null);
      } else {
        freeAllowance.push(t);
      }
      if (!u) {
        freeAllowance.push(null);
      } else {
        freeAllowance.push(u);
      }

      let overAllJWeight = 0;
      let jBags = 0;
      const freeWeight = 32;
      const allowanceObjet = Object.keys(req.body.freeAllowance);
      for (let k = 0; k < allowanceObjet.length; k++) {
        if (allowanceObjet[k]) {
          jBags++;
          overAllJWeight =
            overAllJWeight + req.body.freeAllowance[allowanceObjet[k]];
        }
      }

      // console.log(jBags);
      newCollection.jBags.push(jBags);

      // console.log(overAllJWeight);

      let additionalAllowance;
      additionalAllowance = jBags * freeWeight - overAllJWeight;
      // console.log(additionalAllowance);

      let allowance = [46, 69, 92, 115, 138, 161, 184, 207, 230];
      let weightExcess = 0;

      if (yBags === 2) {
        weightExcess = allowance[0] - overAllNonJWeight + additionalAllowance;
      } else if (yBags === 3) {
        weightExcess = allowance[1] - overAllNonJWeight + additionalAllowance;
      } else if (yBags === 4) {
        weightExcess = allowance[2] - overAllNonJWeight + additionalAllowance;
      } else if (yBags === 5) {
        weightExcess = allowance[3] - overAllNonJWeight + additionalAllowance;
      } else if (yBags === 6) {
        weightExcess = allowance[4] - overAllNonJWeight + additionalAllowance;
      } else if (yBags === 7) {
        weightExcess = allowance[5] - overAllNonJWeight + additionalAllowance;
      } else if (yBags === 8) {
        weightExcess = allowance[6] - overAllNonJWeight + additionalAllowance;
      } else if (yBags === 9) {
        weightExcess = allowance[7] - overAllNonJWeight + additionalAllowance;
      } else if (yBags === 10) {
        weightExcess = allowance[8] - overAllNonJWeight + additionalAllowance;
      }

      let priceParameters = [
        0, 125, 250, 375, 500, 625, 750, 875, 1000, 1125, 1250,
      ];
      let excessParameters = [
        0, -9, -18, -27, -36, -45, -54, -63, -72, -81, -90,
      ];
      let price = 0;
      if (weightExcess === excessParameters[0]) {
        price = priceParameters[0];
      } else if (
        weightExcess < excessParameters[0] &&
        weightExcess >= excessParameters[1] /*less than 9 kilos excess*/
      ) {
        price = priceParameters[1]; /*125*/
      } else if (
        weightExcess < excessParameters[1] &&
        weightExcess >= excessParameters[2] /*9 kilos excess+*/
      ) {
        price = priceParameters[2]; /*250*/
      } else if (
        weightExcess < excessParameters[2] &&
        weightExcess >= excessParameters[3] /*18 kilos excess+*/
      ) {
        price = priceParameters[3]; /*375*/
      } else if (
        weightExcess < excessParameters[3] &&
        weightExcess >= excessParameters[4] /*27 kilos excess+*/
      ) {
        price = priceParameters[4]; /*500*/
      } else if (
        weightExcess < excessParameters[4] &&
        weightExcess >= excessParameters[5] /*36 kilos excess+*/
      ) {
        price = priceParameters[5]; /*625*/
      } else if (
        weightExcess < excessParameters[5] &&
        weightExcess >= excessParameters[6] /*45 kilos excess+*/
      ) {
        price = priceParameters[6]; /*750*/
      } else if (
        weightExcess < excessParameters[6] &&
        weightExcess >= excessParameters[7] /*54 kilos excess+*/
      ) {
        price = priceParameters[7]; /*875*/
      } else if (
        weightExcess < excessParameters[7] &&
        weightExcess >= excessParameters[8] /*63 kilos excess+*/
      ) {
        price = priceParameters[8]; /*1000*/
      } else if (
        weightExcess < excessParameters[8] &&
        weightExcess >= excessParameters[9] /*72 kilos excess+*/
      ) {
        price = priceParameters[9]; /*1125*/
      } else if (
        weightExcess < excessParameters[9] &&
        weightExcess >= excessParameters[10] /*81 kilos excess+*/
      ) {
        price = priceParameters[10]; /*1250*/
      } else if (weightExcess < excessParameters[10] /*90 kilos excess+*/) {
        console.log("unauthorized");
      }
      newCollection.price.push(price);

      if (weightExcess < 0) {
        weightExcess = weightExcess * -1;
        newCollection.weightExcess.push(weightExcess);
      } else {
        newCollection.weightExcess.push(`${weightExcess} kg available`);
      }
      // console.log(weightExcess);

      await newCollection.save();

      return res.status(201).json(newCollection);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  }
);

module.exports = router;
