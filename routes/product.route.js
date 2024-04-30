const express = require('express');
const router = express.Router();

const Product = require("../models/product.model");
const {getProducts, getProduct, postProduct, updateProducts, delteProducts} = require("../controllers/product.controller");


router.get("/", getProducts);

router.get("/:id", getProduct)

router.post("/", postProduct);

router.put("/:id", updateProducts);

router.delete("/:id", delteProducts)


module.exports = router;