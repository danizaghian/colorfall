

function game2init() {
	  //variables
	  this._pauseButton = null;
	  this._fontStyle = null;
	  this._countText = null;

	  this._colorGroup = null;
	  this._spawnColorTimer = 0;

	  this._cursors = null;

	  this._penguin = null;

	  this._icicleGroup = null;
	  this._icicles = null;
	  this._icicleTimer = 0;

	  caughtColors = [];
	  colorCount = 0;
	  colorSplash = null;

	  paletteSig = null;
	  this._colorPalette = null;
	  paletteX = 0;
	  paletteY = 160;
	  stopDispatch = 0;
	  stopControls = 0;
  }
function game2create(){
  	/* Music */
    music = this.add.audio('rickroll');
    music.play('', 0, 1, true, true);
    /* Background */
    this.add.tileSprite(0, 0, 640, 960, 'background');

    /* Pause Button */
    this._pauseButton = this.add.button(ColorFall.GAME_WIDTH-42, 16, 'pause', this.pauseGame, this, 0, 0, 0);

    /* Mute Button */
    //this._muteButton = this.add.button(20, 16, 'pause', this.muteSound, this, 0, 0, 0);

    /* Count Text */
    this._fontStyle = { font: '20px Helvetica', fill: '#666', align: 'left' };
    this._countText = this.add.text(20, 16, colorCount+' / 64', this._fontStyle);

    /* Physics */
    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.physics.arcade.gravity.x = 100;

    /* Falling Colors */
    this._spawnColorTimer = 0;
    this._colorGroup = this.add.group();
    ColorFall.item.spawnColor(this);

    /* Icicles */
    this._icicleGroup = this.add.group();
    this._icicleGroup.enableBody = true;
    this._icicleGroup.physicsBodyType = Phaser.Physics.ARCADE;
    for (var i = 0; i < 20; i++)
    {
        var icicle = this._icicleGroup.create(0, 0, 'icicle');
        icicle.name = 'icicle' + i;
        icicle.exists = false;
        icicle.visible = false;
        icicle.checkWorldBounds = true;
        icicle.events.onOutOfBounds.add(ColorFall.item.removeIcicle, icicle);
    }

    /* Splash Emitter */
    colorSplash = this.add.emitter(0, 840, 5);
    colorSplash.gravity = 200;

    /* Add Key Input */
    this._cursors = this.input.keyboard.createCursorKeys();
    this.input.keyboard.addKeyCapture([ Phaser.Keyboard.SPACEBAR ]);


    /* Final Palette Creation */
    paletteSig = new Phaser.Signal();
    paletteSig.add(function() {
      stopControls = 1;
      this._cursors = this.input.keyboard.stop();
      this._colorPalette = this.add.group();
      console.log(caughtColors);

      this.add.button((ColorFall.GAME_WIDTH-310)/2, 30, 'again', this.resetGame, this);
      this.add.button((ColorFall.GAME_WIDTH-530)/2, 80, 'fb', this.shareFB, this);
      this.add.button((ColorFall.GAME_WIDTH + 70)/2, 80, 'twitter', this.shareTwitter, this);

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

  }

  function game2shareFB() {
    var url = "https://colorfall.herokuapp.com/gameresult/" + gameresult._id;
    var shareURL = "https://www.facebook.com/sharer/sharer.php?u=" +encodeURIComponent(url);
    window.open(shareURL, "", "height=440,width=640,scrollbars=yes");
  }

  function game2shareTwitter() {
    var url = "https://colorfall.herokuapp.com/gameresult/" + gameresult._id;
    var shareURL = "https://www.twitter.com/share?url=" +encodeURIComponent(url);
    window.open(shareURL, "", "height=440,width=640,scrollbars=yes");
  }

  //TODO FIX
  function game2saveResult(base64Url) {
    var gameResult = {
        imgBase64: base64Url
    };
    var self = this;
    $.post('/gameresult', gameResult, function(data){
        gameresult =data;
        console.log(data);
    });
  }

  function game2muteSound() {
    music.pause();
    this._pauseButton.setFrames(1, 1, 1);

    this.input.onDown.add(function(){
      music.resume();
      this._pauseButton.setFrames(0, 0, 0);
    }, this);
  }

  function game2pauseGame(){
    this.game.paused = true;
    var pausedText = this.add.sprite((ColorFall.GAME_WIDTH-204)/2, 400, 'paused');
    this._pauseButton.setFrames(1, 1, 1);

    this.input.onDown.add(function(){
      pausedText.destroy();
      this.game.paused = false;
      this._pauseButton.setFrames(0, 0, 0);
    }, this);
  }

  function game2resetGame(){
    stopControls = 0;
    stopDispatch = 0;
    caughtColors = [];
    paletteX = 0;
    paletteY = 160;
    colorCount = 0;
    this._countText.setText(colorCount+' / 64');
    this._penguin.frame = 0;
    this._cursors = this.input.keyboard.start();
    music.pause();
    this.state.start('PickGame');
  }

  function game2update(){
    // Set Color Count
    if (colorCount == 64) {

      if (stopDispatch === 0) {
        paletteSig.dispatch();
        this.add.tween(this._colorGroup).to( { alpha: 0 }, 250, Phaser.Easing.Linear.None, true);
      }

      } else {

      this._spawnColorTimer += this.time.elapsed;
      if(this._spawnColorTimer > 600) {
        this._spawnColorTimer = 0;
        ColorFall.item.spawnColor(this);
      }

    }

    if (stopControls === 0) {
    	//TODO fireicicle
      if (this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
      	ColorFall.item.fireIcicle(this._penguin, this);
       } else if (this.input.activePointer.isDown) {
      	ColorFall.item.fireIcicle(this._penguin, this);
      }
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

    this.physics.arcade.overlap(this._icicleGroup, this._colorGroup, ColorFall.item.getColor, null, this);
  }

ColorFall.Game2 = function(game){};

ColorFall.Game2.prototype = {
  init: game2init,
  create: game2create,
  shareFB: game2shareFB,
  shareTwitter: game2shareTwitter,
  saveGameResult: game2saveResult,
  muteSound: game2muteSound,
  pauseGame: game2pauseGame,
  resetGame: game2resetGame,
  update: game2update
};

//ColorFall.item = null;
game2item = {
  spawnColor: function(game){
    var dropPos = Math.floor(Math.random()*(ColorFall.GAME_HEIGHT-100));
    var colorType = Math.floor(Math.random()*216);
    var colorSprite = game.add.sprite(ColorFall.GAME_WIDTH-660, dropPos, 'colors');
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
  getColor: function(icicle, color){
  	icicle.kill();
    color.kill();
    colorSplash.makeParticles('splash', color._frame.index);
    colorSplash.x = color.position.x + 16;
    colorSplash.y = color.position.y;
    colorSplash.start(true, 2000, null, 10);

    // Set Color Count
    if (colorCount < 64) {
      caughtColors.push(color._frame.index);
      colorCount = caughtColors.length;
      this._countText.setText(colorCount+' / 64');
    }
  },
  removeIcicle: function(icicle){
  	icicle.kill();
  },
  fireIcicle: function (penguin, game) {

  	if (game.time.now > game._icicleTimer)
    {
        icicle = game._icicleGroup.getFirstExists(false);

        if (icicle)
        {
            icicle.reset(penguin.position.x + 40, penguin.position.y - 20);
            icicle.body.velocity.y = -300;
            icicle.body.allowGravity = false;
            game._icicleTimer = game.time.now + 150;
        }
    }

  }
};