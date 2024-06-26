const { model, Schema } = require("mongoose");

const UsersSchema = new Schema({
  email: { type: String, required: true, trim:true, unique: true },
  pass: { type: String, required: true },
  name: { type: String, required: true, trim:true},
  token: { type: String, required: true },
},{
  timestamps:true
});

module.exports = model('User', UsersSchema);