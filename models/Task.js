const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  status: {
    type: String,
    default: "pending",
  },
  priority: {
    type: String,
    default: "medium",
  },
  dueDate: {
    type: Date,
  },
});

module.exports = mongoose.model("Task", taskSchema);
