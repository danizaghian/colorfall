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
var penguin;
var colorblocks;
var cursors;
var counterText;

//defined variables at start
var counter = 0;
var stopControls = 0;
var caughtColors = [];
var paletteSig = null;
var colorPalette = null;
var paletteX = 0;
var paletteY = 0;
stopDispatch = 0;

//Preload callback. Used to load all assets into Phaser.
function preload() {

    // TODO: Loading the background abackground an image

    // Loading the sprite eaters
    game.load.spritesheet('penguin', 'assets/sprites/penguin.png', 102, 102);
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

    // Setting up the penguin
    penguin = game.add.sprite(180, 620, 'penguin');
    penguin.animations.add('peng', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 10, true);

    var walk = penguin.animations.add('move');
    penguin.animations.play('move', 15, true);


    //sets gravity of falling objects
    game.physics.arcade.gravity.y = 70;

    //  Enable physics on everything added to the world so far (the true parameter makes it recurse down into children)
    game.physics.arcade.enable(game.world, true);

    // no gravity on penguin and immovable
    penguin.body.allowGravity = 0;
    penguin.body.immovable = true;
    penguin.body.collideWorldBounds = true;

    //keyboard movement
    cursors = game.input.keyboard.createCursorKeys();


    game.time.events.loop(1000, fire, this);

    counterText = game.add.text(16, 16, 'counter: 0/64', { font: '18px Arial', fill: '#707070' });

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

function movePenguin() {

    game.physics.arcade.moveToPointer(penguin, 200);
}



function update() {

    game.physics.arcade.collide(penguin, colorblocks, collisionHandler, null, this);

    penguin.body.velocity.x = 0;

    if (cursors.left.isDown)
    {
        penguin.body.velocity.x = -200;
    }
    else if (cursors.right.isDown)
    {
        penguin.body.velocity.x = 200;
    }
    else if (game.input.activePointer.isDown) {
        movePenguin();
    }

    colorblocks.forEachAlive(checkBounds, this);

    if(counter == 64) {
        //end game and signal dispatch
    }

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
