const Color = require("../Models/Colors");

const getColors = async (req, res) => {
  const colors = await Color.find(); //vusco si hay productos

  if (colors) {
    res.json({ colors });
  } else {
    res.json({ mensaje: "No hay productos" });
  }
};

module.exports = getColors;