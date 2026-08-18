const mongoose = require("mongoose");

const getHealth = (req, res) => {
  const isDbConnected = mongoose.connection.readyState === 1;

  res.status(200).json({
    status: "ok",
    message: "Server is running",
    database: isDbConnected ? "connected" : "disconnected"
  });
};

module.exports = {
  getHealth
};
