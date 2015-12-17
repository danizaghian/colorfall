var gameresult;
ColorFall.MainMenu = function(game){};
ColorFall.MainMenu.prototype = {
  create: function(){
    /* Background */
    this.add.tileSprite(0, 0, 640, 960, 'background');

    // /* Music */
    // music = this.add.audio('safetydance');
    // music.play('', 0, 1, true, true);

    /* Title */
    this.add.sprite((ColorFall.GAME_WIDTH-470)/2, 260, 'danis');
    this.add.sprite((ColorFall.GAME_WIDTH-490)/2, 300, 'title');

    /* Intro Text */
    var fontstyle = { font: '20px Helvetica', fill: '#666', align: 'center' };
    var introtext = this.add.text(ColorFall.GAME_WIDTH/2, 600, 'Catch falling colors to create a\n pixelated masterpice!', fontstyle);
    introtext.anchor.set(0.5);

    /* Glacier */
    var glacier = this.add.sprite(0, 920, "glacier");

    /* Penguin */
    var penguin = this.add.sprite(292, 830, 'penguin');
    penguin.animations.add('jump', [0,1,2,3,4,5,6,7,8,9]);
    penguin.animations.play('jump', 15, true);

    /* Start */
    this.add.button((ColorFall.GAME_WIDTH-155)/2, 520, 'start', this.pickGame, this);
  },
  pickGame: function() {
    this.state.start('PickGame');
  }

};