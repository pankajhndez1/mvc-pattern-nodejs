const mongoose = require("mongoose");
mongoose.set("strictQuery", true); // to remove deprecation warning
async function connectDB(url) {
  try {
    await mongoose.connect(url);
    console.log("Connected to MongoDB successfully");
  } catch (err) {
    console.log(err.message);
  }
}

module.exports=connectDB;
