const { model, Schema } = require("mongoose");

const CartUserSchema = new mongoose.Schema({
    name: String,
    cart: [
      {
        productId: mongoose.Schema.Types.ObjectId,
        quantity: Number,
      },
    ],
});

module.exports = model("Cart", CartSchema);