const mongoose = require("mongoose");
const { Schema } = mongoose;
//first create a schema
const userSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  gender: { type: String, required: true },
});

//second create a model
const User = mongoose.model("User", userSchema);
module.exports = User;
