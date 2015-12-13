// REQUIREMENTS //
var express = require("express"),
    app = express(),
    path = require("path"),
    bodyParser = require("body-parser");
    mongoose = require("mongoose");
    db = require('./models');


// CONFIG //

// app.set('view engine', 'html');
// serve js & css files
app.use("/", express.static("public"));
// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));

//ROUTES

app.get('/gameresult/:id', function (req, res){
	db.GameResult.findOne({_id: req.params.id}, function (err, gameresult) {
		console.log(gameresult);
    res.json(gameresult);
	});
});

// api route to create new img
app.post("/gameresult", function (req, res){
  var newGameResult = {imgurl: "img/colors.png"};
  console.log(newGameResult);

  db.GameResult.create(newGameResult, function(err, gameresult){
    if (err) { return console.log("create error: " + err); }
    console.log("created ", gameresult.imgurl, gameresult._id);
    res.json(gameresult);
	});
});

app.get("/gameresultnew", function (req, res){
  console.log('yes');
  var newGameResult = {imgurl: "/img/colors.png"};
  console.log(newGameResult);

  db.GameResult.create(newGameResult, function(err, gameresult){
    if (err) { return console.log("create error: " + err); }
    console.log("created ", gameresult.imgurl, gameresult._id);
    res.json(gameresult);
	});
});

// app.get('*', function (req, res){
// 	res.sendfile(staticFilePath + staticPath+ '/index.html');
// });

app.listen(3000, function (){
  console.log("listening on port 3000");
});