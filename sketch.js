var canvas;
var alien, alienAnimation;
var ground;
var gameBackground, backgroundImage;
var apple;

function preload()
{
    alienAnimation = loadAnimation("images/alien_01.png", "images/alien_02.png",
        "images/alien_03.png", "images/alien_04.png", "images/alien_05.png",
        "images/alien_06.png", "images/alien_07.png", "images/alien_08.png",
        "images/alien_09.png", "images/alien_10.png", "images/alien_11.png",
        "images/alien_12.png", "images/alien_13.png");

        backgroundImage = loadImage("images/jungle.png");
}

function setup()
{
    canvas = createCanvas(800, 600);
    canvas.position(20, 20);

    gameBackground = createSprite(0, 0, width, height);
    gameBackground.addImage(backgroundImage);
    gameBackground.scale = 2.5;
    gameBackground.x = gameBackground.width / 2;

    ground = createSprite(0, height - 100, width * 2, 10);
    ground.visible = false;

    alien = createSprite(100, height - 150);
    alien.addAnimation("running", alienAnimation);
    alien.scale = 0.3;
}

function draw()
{
    background("black");

    gameBackground.velocityX = -3;
    if(gameBackground.x < 0)
    {
        gameBackground.x = gameBackground.width / 2;
    }

    drawSprites();
}