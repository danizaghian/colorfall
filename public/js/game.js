var colorsMap = {
  //row 1
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
  //row 2
  '18': 'db5d19',
  '19': 'db5e00',
  '20': 'ff5200',
  '21': 'ff5300',
  '22': 'ff9500',
  '23': 'ff9400',
  '24': 'ff9258',
  '25': 'ffcb93',
  '26': 'd4985f',
  '27': 'd39a1c',
  '28': 'd39a00',
  '29': 'a16429',
  '30': 'a16500',
  '31': '6e3000',
  '32': 'ffcf00',
  '33': 'ffcf00',
  '34': 'ffce59',
  '35': 'f8ff00',
  //row 3
  '36': 'f8ff09',
  '37': 'f9ff5b',
  '38': 'faff94',
  '39': 'fcffca',
  '40': 'c8d160',
  '41': 'c7d321',
  '42': 'c6d300',
  '43': '959e00',
  '44': '959e2b',
  '45': 'c9cf97',
  '46': '969c64',
  '47': '313500',
  '48': '636a00',
  '49': '646930',
  '50': 'b2ff00',
  '51': 'b3ff26',
  '52': 'b4ff62',
  '53': '57ff00',
  //row 4
  '54': '58ff32',
  '55': '00ff13',
  '56': '5aff67',
  '57': 'b6ff98',
  '58': '82d465',
  '59': '80d52e',
  '60': '7fd600',
  '61': '4ba032',
  '62': '4aa100',
  '63': '0b6b34',
  '64': '046c03',
  '65': '00a20a',
  '66': '00d707',
  '67': '00d735',
  '68': '00ff38',
  '69': '00ff1b',
  '70': '00ff3b',
  '71': '00ff1d',
  //row 5
  '72': '00ff6a',
  '73': '5fff9b',
  '74': 'b9ffcd',
  '75': '00d668',
  '76': '00d838',
  '77': '00d915',
  '78': '00d813',
  '79': '00a236',
  '80': '003704',
  '81': '006d08',
  '82': '00a30e',
  '83': '00a237',
  '84': '00a068',
  '85': '4f9f67',
  '86': '85d29a',
  '87': '00ff3c',
  '88': '00ff6b',
  '89': '00ff6b',
  //row 6
  '90': '00ff9c',
  '91': '00ff9d',
  '92': '00ff9e',
  '93': '00d76a',
  '94': '00d769',
  '95': '00d915',
  '96': '006c35',
  '97': '00a169',
  '98': '00d59d',
  '99': '00d59c',
  '100': '0bd49b',
  '101': '66ffce',
  '102': '00ffd0',
  '103': '00ffd0',
  '104': '00ffd0',
  '105': '00ffff',
  '106': '00ffff',
  '107': '00ffff',
  //row 7
  '108': '6effff',
  '109': '28d0cf',
  '110': '00d1cf',
  '111': '00d2d0',
  '112': '006968',
  '113': '186868',
  '114': '009d9c',
  '115': '009d9c',
  '116': '549c9b',
  '117': '89cfce',
  '118': 'bdffff',
  '119': '8fcaff',
  '120': '3cccff',
  '121': '00cdff',
  '122': '00cdff',
  '123': '0091ff',
  '124': '1491ff',
  '125': '0099cf',
  //row 8
  '126': '0098cf',
  '127': '00649b',
  '128': '003534',
  '129': '002e68',
  '130': '1b1d9b',
  '131': '2f00cf',
  '132': '4100ff',
  '133': '005bcf',
  '134': '375acf',
  '135': '28639b',
  '136': '5c97cf',
  '137': '658fff',
  '138': '2a4cff',
  '139': '474bff',
  '140': '5600ff',
  '141': '4a00cf',
  '142': '401a9b',
  '143': '382c67',
  //row 9
  '144': '090034',
  '145': '180067',
  '146': '27009b',
  '147': '3700cf',
  '148': '4700ff',
  '149': '7847ff',
  '150': '7057ce',
  '151': '6a609a',
  '152': '9d94cd',
  '153': 'd0c7ff',
  '154': 'a28cff',
  '155': '8000ff',
  '156': '8000ff',
  '157': '5a00ff',
  '158': '4f00cf',
  '159': '45009b',
  '160': '3e0067',
  '161': '7900ce',
  //row 10
  '162': '7c00ce',
  '163': 'af00cd',
  '164': 'ae00cd',
  '165': 'e800ff',
  '166': 'e700ff',
  '167': 'e332ff',
  '168': 'dc88ff',
  '169': 'ad40ff',
  '170': 'b200ff',
  '171': 'b400ff',
  '172': 'a851cd',
  '173': '740c9a',
  '174': '77009a',
  '175': '3a0033',
  '176': '730065',
  '177': '702566',
  '178': 'ac0098',
  '179': 'aa0098',
  //row 11
  '180': 'e500cb',
  '181': 'e400cb',
  '182': 'e048cb',
  '183': 'a55b98',
  '184': 'd88fcb',
  '185': 'ffc3ff',
  '186': 'ff81fe',
  '187': 'ff12fe',
  '188': 'ff00fe',
  '189': 'ff00fe',
  '190': 'ff00c8',
  '191': 'ff00c8',
  '192': '71002f',
  '193': 'aa0062',
  '194': 'a81263',
  '195': 'e30095',
  '196': 'e20096',
  '197': 'ff37c9',
  //row 12
  '198': 'de5396',
  '199': 'ff89c9',
  '200': 'ff4692',
  '201': 'ff0092',
  '202': 'ff0092',
  '203': 'ff0057',
  '204': 'ff0056',
  '205': 'ff0000',
  '206': 'e00016',
  '207': 'a90027',
  '208': 'e1005e',
  '209': 'e0005e',
  '210': '030303',
  '211': '333333',
  '212': '666666',
  '213': '999999',
  '214': 'cccccc',
  '215': 'eeeeee',
};

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
