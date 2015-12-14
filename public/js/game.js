var colorsMap = {
  '0': '390000',
  '1': '710000',
  '2': '6e2d2f',
  '3': 'a26163',
  '4': 'd69596',
  '5': 'ffc8c9',
  '6': 'ff8f92',
  '7': 'dc5a5e',
  '8': 'ff4e57',
  '9': 'ff0000',
  '10': 'ff0000',
  '11': 'ff0000',
  '12': 'df0017',
  '13': 'df0000',
  '14': 'e00000',
  '15': 'a72300',
  '16': 'a80000',
  '17': 'a72028',
  '18': '',
  '19': '',
  '20': '',
  '21': '',
  '22': '',
  '23': '',
  '24': '',
  '25': '',
  '26': '',
  '27': '',
  '28': '',
  '29': '',
  '30': '',
  '31': '',
  '32': '',
  '33': '',
  '34': '',
  '35': '',
  '36': '',
  '37': '',
  '38': '',
  '39': '',
  '40': '',

};
console.log(colorsMap);

ColorFall.Game = function(game){
  this._pauseButton = null;
  this._fontStyle = null;
  this._countText = null;

  this._colorGroup = null;
  this._spawnColorTimer = 0;

  this._cursors = null;

  this._penguin = null;

  caughtColors = [];
  colorCount = 0;
  colorSplash = null;

  paletteSig = null;
  this._colorPalette = null;
  paletteX = 0;
  paletteY = 160;
  stopDispatch = 0;
  stopControls = 0;
};

ColorFall.Game.prototype = {
  create: function(){
    /* Background */
    this.add.tileSprite(0, 0, 640, 960, 'background');

    /* Pause Button */
    this._pauseButton = this.add.button(ColorFall.GAME_WIDTH-42, 16, 'pause', this.pauseGame, this, 0, 0, 0);

    /* Mute Button */
    //this._muteButton = this.add.button(20, 16, 'pause', this.muteSound, this, 0, 0, 0);

    /* Count Text */
    this._fontStyle = { font: '20px Helvetica', fill: '#ccc', align: 'left' };
    this._countText = this.add.text((ColorFall.GAME_WIDTH/2 - 16), 20, colorCount+' / 64', this._fontStyle);

    /* Physics */
    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.physics.arcade.gravity.y = 200;

    /* Falling Colors */
    this._spawnColorTimer = 0;
    this._colorGroup = this.add.group();
    ColorFall.item.spawnColor(this);

    /* Splash Emitter */
    colorSplash = this.add.emitter(0, 840, 5);
    colorSplash.gravity = 200;

    /* Add Key Input */
    this._cursors = this.input.keyboard.createCursorKeys();

    /* Final Palette Creation */
    paletteSig = new Phaser.Signal();
    paletteSig.add(function() {
      stopControls = 1;
      this._cursors = this.input.keyboard.stop();
      this._colorPalette = this.add.group();
      console.log(caughtColors);

      this.add.button((ColorFall.GAME_WIDTH-324)/2, 80, 'again', this.resetGame, this);
      this.add.button((ColorFall.GAME_WIDTH-155)/2, 350, 'twitter', this.shareTwitter, this);
      this.add.button((ColorFall.GAME_WIDTH-155)/2, 400, 'fb', this.shareFB, this);

      //seeding canvas
      var canvasImg = new Image();
      var eleId ='canvasSaveImage';
      var canvasDrawing = document.getElementById(eleId).getContext('2d');
      var boxWidth =60;
      var boxHeight =60;
      var left;
      var top;
      var row = 0;
      var col = 0;

      for (var i = 0; i < caughtColors.length; i++) {
        var tweenDelay = i * 200;
        var pX = this._penguin.position.x + 16,
            pY = this._penguin.position.y + 14;
        var paletteSprite = this.add.sprite(pX, pY, 'colors', caughtColors[i]);
        paletteSprite.alpha = 0;

        this.add.tween(paletteSprite).to( { x: paletteX, y: paletteY, alpha: 1 }, 250, Phaser.Easing.Linear.None, true, tweenDelay);
        this.add.tween(paletteSprite.scale).to({x: 4, y: 4}, 250, Phaser.Easing.Linear.None, true, tweenDelay);

        this._colorPalette.add(paletteSprite);

        //output canvas for image saving
        canvasDrawing.fillStyle = '#'+colorsMap[caughtColors[i].toString()];
        if (!canvasDrawing.fillStyle) {
          canvasDrawing.fillStyle = "black";
        }
        left =col * boxWidth;
        top =row * boxHeight;
        canvasDrawing.fillRect(left, top, boxWidth, boxHeight);

        if (col == 7) {
          col = 0;
          row += 1;
        }
        else {
          col += 1;
        }
   

        if (paletteX == 560) {
          paletteX = 0;
          paletteY = paletteY + 80;
        } else {
          paletteX = paletteX + 80;
        }
      }

      canvasDrawing.drawImage(canvasImg,0,0);
      var base64Url =document.getElementById(eleId).toDataURL("image/png");
      this.saveGameResult(base64Url);

      stopDispatch = 1;
    }, this);

    /* Penguin */
    this._penguin = this.add.sprite(292, 840, 'penguin');
    this.physics.enable(this._penguin, Phaser.Physics.ARCADE);

    this._penguin.body.setSize(75, 106, 8, 14);
    this._penguin.body.collideWorldBounds = true;

    this._penguin.inputEnabled = true;
    this._penguin.input.enableDrag();
    this._penguin.input.allowVerticalDrag = false;

    this._penguin.animations.add('jump', [0,1,2,3,4,5,6,7,8,9]);

    this._penguin.body.velocity.x = 0;

  },
  shareFB: function() {
    var url = "https://colorfall.herokuapp.com/gameresult/" + gameresult._id;
    var shareURL = "https://www.facebook.com/sharer/sharer.php?u=" +encodeURIComponent(url);
    window.open(shareURL, "", "height=440,width=640,scrollbars=yes");
  },
  shareTwitter: function() {
    var url = "https://colorfall.herokuapp.com/gameresult/" + gameresult._id;
    var shareURL = "https://www.twitter.com/share?url=" +encodeURIComponent(url);
    window.open(shareURL, "", "height=440,width=640,scrollbars=yes");
  },
  saveGameResult: function(base64Url) {
    var gameResult = {
        imgBase64: base64Url
    };
    var self = this;
    $.post('/gameresult', gameResult, function(data){
        gameresult =data;
        console.log(data);
    });
  },
  muteSound: function() {
    music.pause();
    this._pauseButton.setFrames(1, 1, 1);

    this.input.onDown.add(function(){
      music.resume();
      this._pauseButton.setFrames(0, 0, 0);
    }, this);
  },
  pauseGame: function(){
    this.game.paused = true;
    var pausedText = this.add.sprite((ColorFall.GAME_WIDTH-204)/2, 400, 'paused');
    this._pauseButton.setFrames(1, 1, 1);

    this.input.onDown.add(function(){
      pausedText.destroy();
      this.game.paused = false;
      this._pauseButton.setFrames(0, 0, 0);
    }, this);
  },
  resetGame: function(){
    stopControls = 0;
    stopDispatch = 0;
    caughtColors = [];
    paletteX = 0;
    paletteY = 160;
    colorCount = 0;
    this._countText.setText(colorCount+' / 64');
    this._penguin.frame = 0;
    this._cursors = this.input.keyboard.start();
    this.state.start('Game');
  },
  update: function(){
    // Set Color Count
    if (colorCount == 64) {

      if (stopDispatch === 0) {
        paletteSig.dispatch();
        this.add.tween(this._colorGroup).to( { alpha: 0 }, 250, Phaser.Easing.Linear.None, true);
      }

    } else {

      this._spawnColorTimer += this.time.elapsed;
      if(this._spawnColorTimer > 1000) {
        this._spawnColorTimer = 0;
        ColorFall.item.spawnColor(this);
      }

    }

    if (stopControls === 0) {
      if (this._cursors.left.isDown) {
        this._penguin.body.velocity.x = -400;
        this._penguin.animations.play('jump', 15, true);
      }
      else if (this._cursors.right.isDown) {
        this._penguin.body.velocity.x = 400;
        this._penguin.animations.play('jump', 15, true);
      }
      else if (this.input.activePointer.isDown) {
        this._penguin.animations.play('jump', 15, true);
      }
      else {
        this._penguin.animations.stop();
        this._penguin.frame = 0;
        this._penguin.body.velocity.x = 0;
      }
    } else if (stopControls == 1) {
      this._penguin.body.velocity.x = 0;
      this._penguin.animations.play('jump', 15, true);
    }

    this.physics.arcade.overlap(this._colorGroup, this._penguin, ColorFall.item.getColor, null, this);
  }
};

ColorFall.item = {
  spawnColor: function(game){
    var dropPos = Math.floor(Math.random()*(ColorFall.GAME_WIDTH-20));
    var colorType = Math.floor(Math.random()*216);

    var colorSprite = game.add.sprite(dropPos, -20, 'colors');
    console.log('colorSprite: ', colorSprite);

    colorSprite.animations.add('anim', [colorType], 10, true);
    colorSprite.animations.play('anim');

    game.physics.enable(colorSprite, Phaser.Physics.ARCADE);

    colorSprite.checkWorldBounds = true;
    colorSprite.events.onOutOfBounds.add(this.removeColor, this);

    game._colorGroup.add(colorSprite);

  },
  removeColor: function(colorSprite){
    colorSprite.kill();
  },
  getColor: function(penguin, color){
    color.kill();
    colorSplash.makeParticles('splash', color._frame.index);
    colorSplash.x = penguin.position.x + 16;
    colorSplash.start(true, 2000, null, 10);

    // Set Color Count
    if (colorCount < 64) {
      caughtColors.push(color._frame.index);
      colorCount = caughtColors.length;
      this._countText.setText(colorCount+' / 64');
    }
  }
};
