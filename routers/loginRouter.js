const { Router } = require("express");
const router = new Router();
const bcrypt = require("bcrypt");
const { toJWT } = require("../auth/jwt");
const { user: User } = require("../models");

router.get("/", async (req, res, next) => {
  try {
    res.json("does this work?");
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json("missing email/password");
    }
    const user = await User.findOne({ where: { email: email } });
    if (!user) {
      return res.status(404).json("email not found");
    }
    const matchingPassword = bcrypt.compareSync(
      password,
      user.dataValues.password
    );
    if (!matchingPassword) {
      return res.status(401).json("incorrect password/email combo");
    }
    res.json({
      jwt: toJWT({ userId: user.dataValues.id }),
    });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
