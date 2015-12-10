var game = new Phaser.Game(
    480, 720,                       // 800 x 600 rebackgroundolution.
    Phaser.AUTO,                    // Allow Phaser to determine Canvas or WebGL
    "colorfall",                    // The HTML element ID we will connect Phaser to.
    {                               // Functions (callbacks) for Phaser to call in
        preload: preload,     // in different states of its execution
        create: create,
        update: update
    }
);

//undefined game variables
var bulbasaur;
var colorblocks;
var cursors;
var counterText;

//defined variables at start
var counter = 0;
var stopControls = 0;
var caughtColors = [];

//Preload callback. Used to load all assets into Phaser.
function preload() {

    // TODO: Loading the background abackground an image

    // Loading the sprite eaters
    game.load.image('bulbasaur', 'assets/sprites/bulbasaur.png');
    // Loading the colorblock tiles
    game.load.spritesheet('bullets', 'assets/sprites/colorblocks.png', 20, 20);

}

// Create callback. Used to create all game related objects, set states and other pre-game running
function create() {

    game.physics.startSystem(Phaser.Physics.ARCADE);

    //Sets background color
    game.stage.backgroundColor = '#F0F0F0';

    //Creating a colorblock group
    colorblocks = game.add.group();

    colorblocks.createMultiple(250, 'bullets', 0, false);

    // Setting up the colorblockeater
    bulbasaur = game.add.sprite(180, 620, 'bulbasaur');

    //sets gravity of falling objects
    game.physics.arcade.gravity.y = 70;

    //  Enable physics on everything added to the world so far (the true parameter makes it recurse down into children)
    game.physics.arcade.enable(game.world, true);

    // no gravity on bulbasaur and immovable
    bulbasaur.body.allowGravity = 0;
    bulbasaur.body.immovable = true;
    bulbasaur.body.collideWorldBounds = true;

    //keyboard movement
    cursors = game.input.keyboard.createCursorKeys();


    game.time.events.loop(1000, fire, this);

    counterText = game.add.text(16, 16, 'counter: 0/64', { font: '18px Arial', fill: '#707070' });

    // //Final Creation
    // paletteSig = new Phaser.Signal();
    // paletteSig.add(function() {
    //   stopControls = 1;
    //   this._colorPalette = this.add.group();

    //   for (var i = 0; i < caughtColors.length; i++) {
    //     var tweenDelay = i * 200;
    //     var pX = this._drippy.position.x + 16,
    //         pY = this._drippy.position.y + 14;
    //     var paletteSprite = this.add.sprite(pX, pY, 'colors', caughtColors[i]);
    //     paletteSprite.alpha = 0;

    //     this.add.tween(paletteSprite).to( { x: paletteX, y: paletteY, alpha: 1 }, 250, Phaser.Easing.Linear.None, true, tweenDelay);
    //     this.add.tween(paletteSprite.scale).to({x: 3.2, y: 3.2}, 250, Phaser.Easing.Linear.None, true, tweenDelay);

    //     this._colorPalette.add(paletteSprite);

    //     if (paletteX == 576) {
    //       paletteX = 0;
    //       paletteY = paletteY + 64;
    //     } else {
    //       paletteX = paletteX + 64;
    //     }
    //   }

    //   stopDispatch = 1;
    // }, this);

}

function fire() {

    var colorblock = colorblocks.getFirstExists(false);

    if (colorblock)
    {
        colorblock.frame = game.rnd.integerInRange(0, 216);
        colorblock.exists = true;
        colorblock.reset(game.world.randomX, 0);

    }

}


function update() {

    game.physics.arcade.collide(bulbasaur, colorblocks, collisionHandler, null, this);

    bulbasaur.body.velocity.x = 0;

    if (cursors.left.isDown)
    {
        bulbasaur.body.velocity.x = -200;
    }
    else if (cursors.right.isDown)
    {
        bulbasaur.body.velocity.x = 200;
    }

    colorblocks.forEachAlive(checkBounds, this);

}

function checkBounds(colorblock) {

    colorblock.checkWordBounds = true;
    if (colorblock.y > 720)
    {
        colorblock.kill();
    }

}

function collisionHandler (bulbasaur, colorblock) {
    
    colorblock.kill();

    if (counter < 64) {
        caughtColors.push(colorblock.frame);
        console.log(caughtColors);
        counter = caughtColors.length;
        counterText.text = 'counter:' + counter + '/64';
    }

}
