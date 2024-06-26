const { model, Schema } = require("mongoose");

const CartSchema = new Schema({
  name: { type: String, required: true, unique: true },
  img: { type: String, required: true },
  amount: { type: Number, required: true },
  price: { type: Number, required: true }, //precio total de operacion
 // idCliente:{ type: String, required: true },
 // tokenCliente:{ type: String, required: true },
 // products:[]
});

module.exports = model("Cart", CartSchema);