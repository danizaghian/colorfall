ColorFall.PickGame = function(game){};
ColorFall.PickGame.prototype = {
  create: function(){
    /* Background */
    this.add.tileSprite(0, 0, 640, 960, 'background');

    /* Intro Text */
    this.add.button((ColorFall.GAME_WIDTH-155)/2, 300, 'classic', this.startClassic, this);
    var fontstyle = { font: '20px Helvetica', fill: '#666', align: 'center' };
    var introtext = this.add.text(ColorFall.GAME_WIDTH/2, 350, 'Use the arrow keys to catch colors as they fall.\nOnce you catch 64, see your masterpiece!', fontstyle);
    introtext.anchor.set(0.5);

    /* Penguin */
    var penguin = this.add.sprite(292, 840, 'penguin');
    penguin.animations.add('jump', [0,1,2,3,4,5,6,7,8,9]);
    penguin.animations.play('jump', 15, true);

    /* Start */

    this.add.button((ColorFall.GAME_WIDTH-155)/2, 600, 'shooter', this.startShooter, this);
  },
  startClassic: function() {
    this.state.start('Classic');
  },
  startShooter: function () {
    this.state.start('Shooter');
  }

};