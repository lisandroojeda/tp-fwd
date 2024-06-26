const Cart = require("../Models/Cart");
const Product = require("../Models/Products");

const User = mongoose.model('User', UserSchema);

const addPCartUsuario = async (req, res) => {
   const { name, products } = req.body;

  let user = await User.findOne({ name });
  if (!user) {
    user = new User({ name, cart: products });
  } else {
    user.cart = products;
  }

  await user.save();
  res.send(user);
};

module.exports = addProductCart;