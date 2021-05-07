var mongoose = require("mongoose");
mongoose.createConnection( process.env.MONGODB_URI || process.env.MONGOHQ_URL || "mongodb://localhost:27017/colorfall");

module.exports.GameResult = require("./gameresult.js");

