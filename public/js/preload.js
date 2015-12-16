ColorFall.Preloader = function(game){
  ColorFall.GAME_WIDTH = 640;
  ColorFall.GAME_HEIGHT = 960;
};
ColorFall.Preloader.prototype = {
  preload: function(){
    this.stage.backgroundColor = '#fff';

    this.load.image('fb', 'img/fb.png');
    this.load.image('twitter', 'img/twitter.png');
    this.load.image('background', 'img/bg.png');
    this.load.image('danis', 'img/danis.png');
    this.load.image('title', 'img/title.png');
    this.load.image('start', 'img/start.png');
    this.load.image('paused', 'img/paused.png');
    this.load.image('again', 'img/play-again.png');
    this.load.image('icicle', 'img/icicle.png');
    this.load.spritesheet('pause', 'img/pause.png', 26, 23);
    this.load.spritesheet('colors', 'img/colors.png', 20, 20);
    this.load.spritesheet('splash', 'img/splash.png', 5, 5);
    this.load.spritesheet('penguin', 'img/penguin.png', 102, 102);
    this.load.audio('safetydance', ['img/safetydance.mp3', 'safetydance.ogg']);
    this.load.audio('rickroll', ['img/rickroll.mp3', 'rickroll.ogg']);

  },
  create: function(){
    this.state.start('MainMenu');
  }
};