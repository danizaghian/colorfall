// REQUIREMENTS //
var express = require("express"),
    app = express(),
    path = require("path"),
    bodyParser = require("body-parser");
    mongoose = require("mongoose");
    db = require('./models');
    fs = require("fs");

    //creating environmental variables from a file
    if(fs.existsSync('./.env')){
      var dotenv = require('dotenv');
      dotenv.load();
    }


// CONFIG //

// app.set('view engine', 'html');
// serve js & css files
app.use("/", express.static("public"));
// body parser config to accept our datatypes
// Set large request size for images
app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));

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
        // image: 'https://colorfall.herokuapp.com' + gameresult.imgurl,
        image: 'https://s3-us-west-1.amazonaws.com/colorfall-images/' + gameresult.imgurl,
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
        // temp data to make it work (in validator)
        // https://dev.twitter.com/cards/types/summary-large-image
        desc1 ="I made art! Check out my new colorfall app it's awesome it's totally the best you're going to love it I promise. The guest list and parade of limousines with celebrities emerging from them seemed more suited to a red carpet event in Hollywood or New York than than a gritty stretch of Sussex Avenue near the former site of the James M. Baxter Terrace public housing project here.";
        html +="<meta name='twitter:card' content='summary_large_image' />"+
        "<meta name='twitter:site' content='@ColorfallGame' />"+
        "<meta name='twitter:creator' content='@ColorfallGame' />"+
        "<meta name='twitter:url' content='"+meta.url+"' />"+
        "<meta name='twitter:title' content='"+meta.title+"' />"+
        "<meta name='twitter:description' content='"+desc1+"' />"+
        "<meta name='twitter:image:src' content='"+meta.image+"' />";
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

  //upload image to s3
  var AWS = require('aws-sdk');
  AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID, 
    secretAcessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'us-west-1'
  });
  var s3Bucket = new AWS.S3( { params: {Bucket: 'colorfall-images'} } );

  var imgUrl = 'gameresult-' + (Math.random() + 1).toString(36).substring(7)+".png";
  var buf = new Buffer(req.body.imgBase64.replace(/^data:image\/\w+;base64,/, ""),'base64');
  var data = {
    Key: imgUrl,
    Body: buf,
    ContentEncoding: 'base64',
    ContentType: 'image/png'
  };
  s3Bucket.putObject(data, function(err, data){
      if (err) { 
        console.log(err);
        console.log('Error uploading data: ', data); 
      } else {
        var newGameResult = req.body;
        newGameResult.imgurl = imgUrl;
        if(newGameResult.imgBase64) {
          delete newGameResult.imgBase64;
        }
        console.log(newGameResult);

        db.GameResult.create(newGameResult, function(err, gameresult){
          if (err) { return console.log("create error: " + err); }
          console.log("created ", gameresult.imgurl, gameresult._id);
          res.json(gameresult);
        });
      }
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