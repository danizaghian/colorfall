var mongoose = require("mongoose");
mongoose.createConnection( process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || process.env.MONGODB_URI || "mongodb://127.0.0.1/colorfall");

module.exports.GameResult = require("./gameresult.js");

