const mongoose = require("mongoose");

async function connectDB(url) {
  try {
    await mongoose.connect(url);
    console.log("Connected to MongoDB successfully");
  } catch (err) {
    console.log(err.message);
  }
}

module.exports=connectDB;
