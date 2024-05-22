const User = require("../Models/Users");
const user = require("../Models/Users");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  const { email, pass } = req.body;
  console.log(email)
  console.log(pass)
  User.findOne({ email }).then((user) => {

    if (!user) {
      return res.json({ mensaje: "Usuario no encontrado" });
    }

    bcrypt.compare(pass, user.pass).then((esCorrecta) => {
      if (esCorrecta) {
        const { id, name } = user;
        res.json({ id, name });
        res.json({ mensaje: "Logueo correcto", user: { id, name } });
      }else{
        return res.json({mensaje: "contraseña incorrecta"})
      }
    });
  });
};

module.exports = login;
