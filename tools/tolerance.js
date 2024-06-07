const tolerance = (req, res, next) => {
  const weightReq = Object.keys(req.body.weight);

  for (let k = 0; k < weightReq.length; k++) {
    if (req.body.weight[weightReq[k]] === 24) {
      req.body.weight[weightReq[k]] = 23;
    }
  }

  return next();
};

module.exports = tolerance;
