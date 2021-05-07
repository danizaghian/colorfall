var mongoose = require("mongoose");
mongoose.createConnection( process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || "mongodb://localhost/colorfall");

module.exports.GameResult = require("./gameresult.js");

