var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/colorfall");

module.exports.GameResult = require("./gameresult.js");

