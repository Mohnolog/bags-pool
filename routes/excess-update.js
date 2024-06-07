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
      const weightDB = collectionToUpdate.weight;

      if (a) {
        weightDB[0] = a;
      } else {
        weightDB[0] = null;
      }
      if (b) {
        weightDB[1] = b;
      } else {
        weightDB[1] = null;
      }
      if (c) {
        weightDB[2] = c;
      } else {
        weightDB[2] = null;
      }
      if (d) {
        weightDB[3] = d;
      } else {
        weightDB[3] = null;
      }
      if (e) {
        weightDB[4] = e;
      } else {
        weightDB[4] = null;
      }
      if (f) {
        weightDB[5] = f;
      } else {
        weightDB[5] = null;
      }
      if (g) {
        weightDB[6] = g;
      } else {
        weightDB[6] = null;
      }
      if (h) {
        weightDB[7] = h;
      } else {
        weightDB[7] = null;
      }
      if (i) {
        weightDB[8] = i;
      } else {
        weightDB[8] = null;
      }
      if (j) {
        weightDB[9] = j;
      } else {
        weightDB[9] = null;
      }

      collectionToUpdate.markModified("weight");

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

      await collectionToUpdate.yBags.pop(yBags);
      collectionToUpdate.yBags.push(yBags);

      const freeAllowanceDB = collectionToUpdate.freeAllowance;
      const { l, m, n, o, p, q, r, s, t, u } = req.body.freeAllowance;

      if (l) {
        freeAllowanceDB[0] = l;
      } else {
        freeAllowanceDB[0] = null;
      }
      if (m) {
        freeAllowanceDB[1] = m;
      } else {
        freeAllowanceDB[1] = null;
      }
      if (n) {
        freeAllowanceDB[2] = n;
      } else {
        freeAllowanceDB[2] = null;
      }
      if (o) {
        freeAllowanceDB[3] = o;
      } else {
        freeAllowanceDB[3] = null;
      }
      if (p) {
        freeAllowanceDB[4] = p;
      } else {
        freeAllowanceDB[4] = null;
      }
      if (q) {
        freeAllowanceDB[5] = q;
      } else {
        freeAllowanceDB[5] = null;
      }
      if (r) {
        freeAllowanceDB[6] = r;
      } else {
        freeAllowanceDB[6] = null;
      }
      if (s) {
        freeAllowanceDB[7] = s;
      } else {
        freeAllowanceDB[7] = null;
      }
      if (t) {
        freeAllowanceDB[8] = t;
      } else {
        freeAllowanceDB[8] = null;
      }
      if (u) {
        freeAllowanceDB[9] = u;
      } else {
        freeAllowanceDB[9] = null;
      }
      collectionToUpdate.markModified("freeAllowance");

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
      await collectionToUpdate.jBags.pop(jBags);
      collectionToUpdate.jBags.push(jBags);

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
      await collectionToUpdate.price.pop(price);
      collectionToUpdate.price.push(price);

      if (weightExcess < 0) {
        weightExcess = weightExcess * -1;
        await collectionToUpdate.weightExcess.pop(weightExcess);
        collectionToUpdate.weightExcess.push(weightExcess);
      } else {
        await collectionToUpdate.weightExcess.pop(weightExcess);
        collectionToUpdate.weightExcess.push(`${weightExcess} kg available`);
      }
      // console.log(weightExcess);

      await collectionToUpdate.save();

      return res.status(201).json(collectionToUpdate);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error.message });
    }
  }
);

module.exports = router;
