require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cloudinary = require("cloudinary").v2;

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI);

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const userRoutes = require("./routes/user");
const collectionToUpdateRoutes = require("./routes/collection-update");
const collectionToCreateRoutes = require("./routes/collection-create");
const collectionFiltersRoutes = require("./routes/collection-filters");
const excessToCreateRoutes = require("./routes/excess-create");

app.use(collectionFiltersRoutes);
app.use(collectionToCreateRoutes);
app.use(collectionToUpdateRoutes);
app.use(userRoutes);
app.use(excessToCreateRoutes);

app.get("/", (req, res) => {
  res.status(201).json({
    message: "Welcome to the bagPool calculation API",
  });
});

app.all("*", (req, res) => {
  return res.status(404).json({ message: "page not found" });
});

app.listen(process.env.PORT, () => {
  console.log("3, 2,... ignition 🔥🔥🔥, server started 🚀🚀🚀");
});
