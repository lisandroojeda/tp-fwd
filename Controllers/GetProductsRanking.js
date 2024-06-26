const Product = require("../Models/Products");


const getProductsRanking = async (req, res) => {
  const products = await Product.find().sort({amountInTime:-1}).limit(3);//vusco si hay productos
  if (products) {
   // const type = await Types.findById(pr)
    res.json({ products });
  } else {
    res.json({ mensaje: "No hay productos" });
  }
};

module.exports = getProductsRanking;
