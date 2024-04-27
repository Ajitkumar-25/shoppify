const express = require("express");
const router = express.Router();
const Product = require("../Models/Product");

router.post("/addproduct", async (req, resp) => {
  let products = await Product.find({});
  let id;
  if (products.length > 0) {
    id = Number(products[products.length - 1].id) + 1;
  } else {
    id = 1;
  }

  const product = new Product({
    id: id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    old_price: req.body.old_price,
    new_price: req.body.new_price,
  });

  try {
    const productAdded = await product.save();
    // console.log("productAdded");
    console.log(productAdded);
    resp.json(productAdded);
  } catch (err) {
    console.log(err);
  }
});

//remove product

router.post("/removeproduct", async (req, resp) => {
  const productId = req.body.id;
  try {
    const product = await Product.findOneAndDelete({ id: productId });
    resp.json(product);
    // console.log("product removed");
  } catch (err) {
    console.log(err);
  }
});

//get all products
router.get("/getallproducts", async (req, resp) => {
  try {
    const products = await Product.find({});
    resp.json(products);
    // console.log("products fetched");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
