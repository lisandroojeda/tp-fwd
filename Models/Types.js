const { model, Schema } = require("mongoose");

const TypesSchema = new Schema({
  name: { type: String, required: true, unique: true },
  img: { type: String, required: true },
  amount: { type: Number, required: true }, //contabiliza la cantidad de ocurrencias
  
});

module.exports = model("Types", TypesSchema);