const { model, Schema } = require("mongoose");

const UsersSchema = new Schema({
  email: { type: String, required: true, unique: true },
  pass: { type: String, required: true },
  name: { type: String, required: true },
 
});

module.exports = model("User", UsersSchema);