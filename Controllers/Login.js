/*const bcrypt = require("bcrypt");
const User = require("../Models/Users");
const jwt = require("jsonwebtoken");


const login = async (req, res) => {
  const { email, pass } = req.body;

  try {
 
    const userFound = await User.findOne({email})
    if (!userFound) return res.status(400).json({message:"Usuario no encontrado"})

    const isPass = await bcrypt.compare(pass, userFound.pass);

    if(!isPass) return res.status(400).json({message:"Contraseña incorrecta"})
 
    jwt.sign(
      { id: userFound._id },
      "secret",
      { expiresIn: "1d" },
      (err, token) => {
        if (err) console.log(err);
        res.cookie("token", token);
        res.json({
          message: "Usuario Encontrado",
        });
      }
    ); // token

    res.json({
      id: userFound._id,
      name: userFound.name,
      email: userFound.email,
    });
  } catch (error) {
   res.status(500).json({message: error.message})
  }
};

module.exports = login;
*/