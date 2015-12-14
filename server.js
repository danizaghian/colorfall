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

app.get('/gameresult/:id', function (req, res, next){
  var userAgent =req.headers['user-agent'];
  var socialScraper =false;
  if(userAgent !==undefined && (userAgent.indexOf('facebookexternalhit') >-1 || userAgent.indexOf('Facebot') >-1)) {
    socialScraper ='facebook';
  }
  else if(userAgent !==undefined && (userAgent.indexOf('Twitterbot') >-1)) {
    socialScraper ='twitter';
  }

  if(socialScraper) {

    db.GameResult.findOne({_id: req.params.id}, function (err, gameresult) {
      console.log(gameresult);
      //res.json(gameresult);

      var meta ={
        title: 'Colorfall',
        url: 'https://colorfall.herokuapp.com/gameresult/'+gameresult._id,
        image: 'https://colorfall.herokuapp.com' + gameresult.imgurl,
        // hack to get image to show up first time:
        // http://stackoverflow.com/a/27424085/5551755
        imageWidth: 360,
        imageHeight: 240,
        desc: 'I made art!'
      };

      var html ='';
      html ="<!DOCTYPE html>"+
      "<html lang='en'>"+
      "<head>";
      
      var title1 =meta.title;
      var desc1 =meta.desc;
      var siteName ='colorfall';
      var fbAppId ='1727020734193995';
        
      if(socialScraper =='facebook') {
        html +="<meta property='og:title' content='"+title1+"' />"+
        "<meta property='og:site_name' content='"+siteName+"' />"+
        "<meta property='og:url' content='"+meta.url+"' />"+
        "<meta property='og:description' content='"+desc1+"' />"+
        "<meta property='og:image' content='"+meta.image+"' />"+
        "<meta property='og:image:width' content='"+meta.imageWidth+"' />"+
        "<meta property='og:image:height' content='"+meta.imageHeight+"' />"+
        "<meta property='fb:app_id' content='"+fbAppId+"' />";
      }
       else if(socialScraper =='twitter') {
        html +="<meta name='twitter:card' content='summary_large_image' />"+
        "<meta name='twitter:site' content='@ColorfallGame' />"+
        "<meta name='twitter:creator' content='@ColorfallGame' />"+
        "<meta name='twitter:url' content='"+meta.url+"' />"+
        "<meta name='twitter:title' content='"+title1+"' />"+
        "<meta name='twitter:description' content='"+desc1+"' />"+
        "<meta name='twitter:image' content='"+meta.image+"' />";
      }
      html +="</head>"+
      "<body>"+
      "</body>"+
      "</html>";

      res.writeHeader(200, {"Content-Type": "text/html"});
      res.write(html);
      res.end();
    });
  }
  else {
    next();
  }
});

// api route to create new img
app.post("/gameresult", function (req, res){
  var newGameResult = req.body;
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

app.get('*', function (req, res){
	// res.sendfile('public/index.html');
  res.redirect('/');
});

app.listen(process.env.PORT || 3000, function (){
  console.log("listening on port 3000");
});