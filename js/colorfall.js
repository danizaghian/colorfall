var game = new Phaser.Game(
    800, 600,                       // 800 x 600 rebackgroundolution.
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

//defined variables at start
var score = 0;

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
    bulbasaur = game.add.sprite(300, 500, 'bulbasaur');

    //sets gravity of falling objects
    game.physics.arcade.gravity.y = 70;

    //  Enable physics on everything added to the world so far (the true parameter makes it recurse down into children)
    game.physics.arcade.enable(game.world, true);

    // no gravity on bulbasaur and immovable
    bulbasaur.body.allowGravity = 0;
    bulbasaur.body.immovable = true;

    //keyboard movement
    cursors = game.input.keyboard.createCursorKeys();


    game.time.events.loop(1000, fire, this);

    game.add.text(16, 16, 'counter: 0', { font: '18px Arial', fill: '#707070' });

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

function reflect(a, colorblock) {

    if (colorblock.y > (bulbasaur.y + 5))
    {
        return true;
    }
    else
    {
        colorblock.body.velocity.x = bulbasaur.body.velocity.x;
        colorblock.body.velocity.y *= -(colorblock.body.bounce.y);

        return false;
    }

}

function update() {

    game.physics.arcade.collide(bulbasaur, colorblocks, null, reflect, this);

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

    if (colorblock.y > 600)
    {
        colorblock.kill();
    }

}
