const Product = require("../Models/Products");

const getProducts = async (req, res) => {
  const products = await Product.find(); //vusco si hay productos

  if (products) {
    res.json({ products });
  } else {
    res.json({ mensaje: "No hay productos" });
  }
};

module.exports = getProducts;