const { Router } = require("express");
const router = new Router();
const {
  user: User,
  order: Order,
  orderItem: OrderItem,
  product: Product,
} = require("../models");

// trying some middleware
const checkIfUserExists = async (req, res, next) => {
  try {
    const userId = Number(req.params.userId);
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json("user not found");
    }
    next();
  } catch (e) {
    next(e);
  }
};

// get all orders of a user
router.get("/:userId", checkIfUserExists, async (req, res, next) => {
  try {
    const userId = Number(req.params.userId);
    const order = await Order.findOne({ where: { userId: userId } });
    if (!order) {
      return res.status(404).json("this user has no order yet");
    }
    const orderId = order.id;
    const orderItems = await OrderItem.findAll({
      where: { orderId: orderId },
    });
    res.json(orderItems);
  } catch (e) {
    next(e);
  }
});

// add an item to order with orderId..
router.post("/:orderId", async (req, res, next) => {
  try {
    const orderId = Number(req.params.orderId);
    const order = await Order.findByPk(orderId);
    if (!order) {
      return res.status(404).json("order not found");
    }
    const productId = Number(req.body.productId);
    const amount = Number(req.body.amount);
    if (!productId || !amount) {
      return res.status(400).json("missing productId/amount");
    }
    const product = await Product.findByPk(productId);
    if (!product) {
      return res.status(404).json("product not found");
    }
    const newOrderItem = await OrderItem.create({ orderId, productId, amount });
    res.json(newOrderItem);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
