const Accesories = require("../Models/Accesories");

const getAccesories = async (req, res) => {
  const accesories = await Accesories.find(); //Busco si hay productos

  if (accesories) {
    res.json({ accesories });
  } else {
    res.json({ mensaje: "No hay productos" });
  }
};

module.exports = getAccesories;