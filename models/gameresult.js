var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var GameResultSchema = new Schema({
    imgurl: String
});

var GameResult = mongoose.model('GameResult', GameResultSchema);
module.exports = GameResult;