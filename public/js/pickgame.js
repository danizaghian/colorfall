ColorFall.PickGame = function(game){};
ColorFall.PickGame.prototype = {
  create: function(){
    /* Background */
    this.add.tileSprite(0, 0, 640, 960, 'background');
    var fontstyle = { font: '20px Helvetica', fill: '#666', align: 'center' };


    /* Classic */
    this.add.button((ColorFall.GAME_WIDTH-200)/2, 200, 'classic', this.startClassic, this);
    var classicText = this.add.text(ColorFall.GAME_WIDTH/2, 270, 'Use the arrow keys to catch colors as they fall.\nOnce you catch 64, see your artwork!', fontstyle);
    classicText.anchor.set(0.5);


    /* Shooter */
    this.add.button((ColorFall.GAME_WIDTH-200)/2, 550, 'shooter', this.startShooter, this);
    var shooterText = this.add.text(ColorFall.GAME_WIDTH/2, 620, "Use the arrow keys and space bar to shoot colors\nas they fly across the screen. Shoot 64 to see your mosaic!", fontstyle);
    shooterText.anchor.set(0.5);

    /* Glacier */
    var glacier = this.add.sprite(0, 910, "glacier");

    /* Penguin */
    var penguin = this.add.sprite(292, 820, 'penguin');
    penguin.animations.add('jump', [0,1,2,3,4,5,6,7,8,9]);
    penguin.animations.play('jump', 15, true);
 },
  startClassic: function() {
    ColorFall.item = game1item;
    this.state.start('Classic');
  },
  startShooter: function () {
    ColorFall.item = game2item;
    this.state.start('Shooter');

  }

};