const { Router } = require("express");
const bcrypt = require("bcrypt");
const router = new Router();
const { user: User, order: Order } = require("../models");

// get all users
router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      include: [Order],
    });
    // users.map((u) => console.log(u.get({ plain: true })));
    res.json(users);
  } catch (e) {
    next(e);
  }
});

// get 1 user by id
router.get("/:userId", async (req, res, next) => {
  try {
    const { userId } = req.params;
    const user = await User.findByPk(userId, {
      include: [Order],
    });
    if (!user) {
      return res.status(404).json("user not found");
    }
    res.json(user);
  } catch (e) {
    next(e);
  }
});

// add a user with an empty order
router.post("/", async (req, res, next) => {
  try {
    const { name, email, password, isAdmin } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json("missing name/email/password");
    }
    const user = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, 10),
      isAdmin,
    });
    const order = await Order.create({ userId: user.dataValues.id });

    res.json({ user, order });
  } catch (e) {
    console.log(e.message);
    if (e.message === "Validation error") {
      return res.status(400).json("email already exists");
    }
    next(e);
  }
});

// update a user with userId
router.put("/:userId", async (req, res, next) => {
  try {
    const userId = Number(req.params.userId);
    const userToUpdate = await User.findByPk(userId);
    if (!userToUpdate) {
      res.status(404).json("user not found");
    } else {
      const updatedUser = await userToUpdate.update(req.body);
      res.json(updatedUser);
    }
  } catch (e) {
    if (e.message === "Validation error") {
      return res.status(400).json("email already exists");
    }
    next(e);
  }
});

module.exports = router;
