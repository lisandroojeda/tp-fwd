const bcrypt = require("bcrypt");
const User = require("../Models/Users");
const jwt = require("jsonwebtoken");

const SECRET = "AKLSJD129EDM42WDNSCIS";

const register = async (req, res) => {
  const { email, pass, name, token } = req.body;
  try {
    const userFound = await User.findOne({ email });
    if (userFound)
      return res.status(400).json({ message: "Email ya registrado" });

    const hash = await bcrypt.hash(pass, 10);

    const newUser = new User({
      email,
      pass: hash,
      name,
      token,
    });

    const userSaved = await newUser.save();

    jwt.sign(
      { id: userSaved._id },
      SECRET,
      { expiresIn: "1d" },
      (err, token) => {
        if (err) console.log(err);
        res.cookie("token", token, {
          httpOnly: process.env.NODE_ENV !== "development",
          secure: true,
          sameSite: "none",
        });
        userSaved.token = token;
        res.json({
          message: "Usuario Encontrado",
        });
      }
    ); // token

    res.json({
      id: userSaved._id,
      name: userSaved.name,
      email: userSaved.email,
      token: userSaved.token,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = register;
