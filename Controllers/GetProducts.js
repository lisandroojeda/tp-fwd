const Product = require("../Models/Products");
const Types = require("../Models/Types");

const getProducts = async (req, res) => {
  const products = await Product.find();//vusco si hay productos
  if (products) {
   // const type = await Types.findById(pr)
    res.json({ products });
  } else {
    res.json({ mensaje: "No hay productos" });
  }
};

module.exports = getProducts;