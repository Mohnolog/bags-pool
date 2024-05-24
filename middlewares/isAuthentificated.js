const User = require("../models/User");

const isAuthentificated = async (req, res, next) => {
  const receivedToken = req.headers.authorization.replace("Bearer ", "");

  if (receivedToken) {
    const existingUser = await User.findOne({ token: receivedToken }).select(
      "account _id"
    );
    if (existingUser) {
      req.user = existingUser;
      return next;
    } else {
      res.status(401).json({ Error: "unauthorized" });
    }
  } else {
    res.status(401).json({ Error: "unauthorized" });
  }
};

module.exports = isAuthentificated;
