var gameresult;
ColorFall.MainMenu = function(game){};
ColorFall.MainMenu.prototype = {
  create: function(){
    /* Background */
    this.add.tileSprite(0, 0, 640, 960, 'background');

    /* Music */
    music = this.add.audio('music');
    music.play('', 0, 1, true, true);

    /* Title */
    this.add.sprite((ColorFall.GAME_WIDTH-470)/2, 260, 'danis');
    this.add.sprite((ColorFall.GAME_WIDTH-490)/2, 300, 'title');

    /* Intro Text */
    var fontstyle = { font: '20px Helvetica', fill: '#666', align: 'center' };
    var introtext = this.add.text(ColorFall.GAME_WIDTH/2, 600, 'Use the arrow keys to catch colors as they fall.\nOnce you catch 64, see your masterpiece!', fontstyle);
    introtext.anchor.set(0.5);

    /* Penguin */
    var penguin = this.add.sprite(292, 840, 'penguin');
    penguin.animations.add('jump', [0,1,2,3,4,5,6,7,8,9]);
    penguin.animations.play('jump', 15, true);

    /* Start */

    //TODO
    this.add.button((ColorFall.GAME_WIDTH-155)/2, 300, 'fb', this.saveGameResult, this);
    this.add.button((ColorFall.GAME_WIDTH-155)/2, 400, 'fb', this.shareFB, this);
    this.add.button((ColorFall.GAME_WIDTH-155)/2, 520, 'start', this.startGame, this);
  },
  startGame: function() {
    this.state.start('Game');
  },
  shareFB: function() {
    var url = "https://colorfall.herokuapp.com/gameresult/" + gameresult._id;
    var shareURL = "https://www.facebook.com/sharer/sharer.php?u=" +encodeURIComponent(url);
    window.open(shareURL, "", "height=440,width=640,scrollbars=yes");
  },
  saveGameResult: function() {
    this.drawCanvasImage(function(base64Url) {
        var gameResult = {
            imgBase64: base64Url
        };
        var self = this;
        $.post('/gameresult', gameResult, function(data){
            gameresult =data;
            console.log(data);
        });
    });
  },

  drawCanvasImage: function(callback) {
    var img2 = new Image();
        var eleId ='canvasSaveImage';
        var context2 = document.getElementById(eleId).getContext('2d');

        var colorBoard =[
            ["blue", "red", "green", "yellow"],
            ["red", "#7FFFD4", "yellow", "purple"],
            ["green", "yellow", "orange", "blue"],
            ["yellow", "purple", "black", "green"]
        ];
        var boxWidth =40;
        var boxHeight =40;

        // draw our image row by row
        var left;
        var top;
        for (var row = 0; row < colorBoard.length; row ++) {
            for( var col =0; col <colorBoard[row].length; col++) {
                context2.fillStyle =colorBoard[row][col];
                left =col * boxWidth;
                top =row * boxHeight;
                context2.fillRect(left, top, boxWidth, boxHeight);
            }
        } 
        context2.drawImage(img2,0,0);
        var base64Url =document.getElementById(eleId).toDataURL("image/png");
        callback(base64Url);
  }
};