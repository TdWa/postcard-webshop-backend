const { Router } = require("express");
const router = new Router();
const { product: Product } = require("../models");

// get all products with pagination option
router.get("/", async (req, res, next) => {
  try {
    const limit = req.query.limit ? Number(req.query.limit) : 50;
    const offset = req.query.offset ? Number(req.query.offset) : 0;

    if (isNaN(limit) || isNaN(offset)) {
      return res.status(400).json("limit and offset must be a number");
    }

    const products = await Product.findAll({ limit, offset });

    res.json(products);
  } catch (e) {
    next(e);
  }
});

// get 1 product by id
router.get("/:productId", async (req, res, next) => {
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

// add a product
router.post("/", async (req, res, next) => {
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
router.delete("/:productId", async (req, res, next) => {
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

module.exports = router;
