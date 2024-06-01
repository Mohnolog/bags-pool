const tolerance = (req, res, next) => {
  if (req.body.a === 24) {
    req.body.a = 23;
  } else {
    req.body.a = req.body.a;
  }
  if (req.body.b === 24) {
    req.body.b = 23;
  } else {
    req.body.b = req.body.b;
  }
  if (req.body.c === 24) {
    req.body.c = 23;
  } else {
    req.body.c = req.body.c;
  }
  if (req.body.d === 24) {
    req.body.d = 23;
  } else {
    req.body.d = req.body.d;
  }
  if (req.body.e === 24) {
    req.body.e = 23;
  } else {
    req.body.e = req.body.e;
  }
  if (req.body.f === 24) {
    req.body.f = 23;
  } else {
    req.body.f = req.body.f;
  }
  if (req.body.g === 24) {
    req.body.g = 23;
  } else {
    req.body.g = req.body.g;
  }
  if (req.body.h === 24) {
    req.body.h = 23;
  } else {
    req.body.h = req.body.h;
  }
  if (req.body.i === 24) {
    req.body.i = 23;
  } else {
    req.body.i = req.body.i;
  }
  if (req.body.j === 24) {
    req.body.j = 23;
  } else {
    req.body.j = req.body.j;
  }

  return next();
};

module.exports = tolerance;
