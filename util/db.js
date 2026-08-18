const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/task_management_db");
    console.log("Connected to MongoDB successfully");
  } catch (err) {
    console.log("Failed to connect to MongoDB:", err.message);
  }
};

module.exports = connectDB;
