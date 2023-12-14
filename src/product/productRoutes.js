const express = require("express");
const { newProduct, allProducts, productById } = require("./productController");

const router = express.Router();

router.post("/new", newProduct);
router.get("/products", allProducts);
router.get("/product", productById);

module.exports = router;
