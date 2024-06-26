const Type = require("../Models/Types");

const getTypes = async (req, res) => {
  const types = await Type.find(); //Busco si hay productos

  if (types) {
    res.json({ types });
  } else {
    res.json({ mensaje: "No hay productos" });
  }
};

module.exports = getTypes;