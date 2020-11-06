const express = require("express");
const app = express();
const PORT = 4000;
app.set("json spaces", 2);

app.use(express.json());

const {
  user: User,
  order: Order,
  orderItem: OrderItem,
  product: Product,
} = require("./models");

// get all users
app.get("/users", async (req, res, next) => {
  try {
    const users = await User.findAll();
    // users.map((u) => console.log(u.get({ plain: true })));
    res.json(users);
  } catch (e) {
    next(e);
  }
});

// get all products
app.get("/products", async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (e) {
    next(e);
  }
});

// add a product
app.post("/products", async (req, res, next) => {
  try {
    const { name, description, url } = req.body;
    const price = Number(req.body.price);
    const popularity = Number(req.body.popularity);

    if (isNaN(price) || isNaN(popularity)) {
      return res
        .status(400)
        .json("please provide a number for price/popularity");
    }

    const newProduct = await Product.create({
      name,
      description,
      url,
      price,
      popularity,
    });
    res.json(newProduct);
  } catch (e) {
    next(e);
  }
});

// remove a product with Id
app.delete("/products/:productId", async (req, res, next) => {
  try {
    const productId = Number(req.params.productId);
    const product = await Product.findByPk(productId);
    if (!product) {
      return res.status(404).json("product not found");
    }
    await product.destroy();
    res.json(`deleted product with id ${productId}`);
  } catch (e) {
    next(e);
  }
});

// get 1 product by id
app.get("/products/:productId", async (req, res, next) => {
  try {
    const { productId } = req.params;
    const product = await Product.findByPk(productId);
    if (!product) {
      return res.status(404).json("product not found");
    }
    res.json(product);
  } catch (e) {
    next(e);
  }
});

// get all orders of a user
app.get("/orders/:userId", async (req, res, next) => {
  try {
    const userId = Number(req.params.userId);
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json("user not found");
    }
    const order = await Order.findOne({ where: { userId: userId } });
    if (!order) {
      return res.status(404).json("this user has no order yet");
    }
    console.log(order);
    const orderId = order.id;
    const orderItems = await OrderItem.findAll({
      where: { orderId: orderId },
    });
    res.json(orderItems);
  } catch (e) {
    next(e);
  }
});

// get 1 user by id
app.get("/users/:userId", async (req, res, next) => {
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

// add a user with an order (without items)
app.post("/users", async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json("missing name/email/password");
    }
    const user = await User.create(req.body);
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

// update a user
app.put("/users/:userId", async (req, res, next) => {
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

// add an item to order with orderId..
app.post("/orders/:orderId", async (req, res, next) => {
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

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
