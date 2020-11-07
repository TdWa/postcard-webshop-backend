const User = require("../models").user;
const { toData } = require("./jwt");

async function authMiddleWare(req, res, next) {
  const auth =
    req.headers.authorization && req.headers.authorization.split(" ");
  if (auth && auth[0] === "Bearer" && auth[1]) {
    let data;
    try {
      data = toData(auth[1]);
    } catch (e) {
      return res.status(400).json("Invalid JWT token");
    }
    try {
      const user = await User.findByPk(data.userId);
      if (!user) {
        return res.status(404).json("no user found");
      }
      req.user = user;
      next();
    } catch (e) {
      next(e);
    }
  } else {
    res.status(401).json({
      message: "Please supply some valid credentials",
    });
  }
}

module.exports = authMiddleWare;
