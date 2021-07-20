var canvas;
var block1,block2,block3,block4
var block5,block6,block7
var block8,block9,block10,block11;
var block12,block13,block14;
var ball, edges;
var music;

function preload(){
    // load sound here
    music = loadSound("music.mp3");

}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(2,585,370,30);
    block1.shapeColor = "aqua";

    block2 = createSprite(293,585,213,30);
    block2.shapeColor = "orange";

    //create two more blocks i.e. block3 and block4 here

    block3 = createSprite(505,585,210,30);
    block3.shapeColor = "purple";

    block4 = createSprite(715,585,210,30);
    block4.shapeColor = "lime";

    block5 = createSprite(785,473,30,193);
    block5.shapeColor = "red";

    block6 = createSprite(785,280,30,195);
    block6.shapeColor = "blue";

    block7 = createSprite(785,83,30,200);
    block7.shapeColor = (rgb(0,225,127));

    block8 = createSprite(2,15,370,30)
    block8.shapeColor = "teal";

    block9 = createSprite(293,15,213,30);
    block9.shapeColor = "yellow";

    block10 = createSprite(505,15,210,30);
    block10.shapeColor = (rgb(225,20,147));

    block11 = createSprite(715,15,210,30);
    block11.shapeColor = "crimson";

    block12 = createSprite(15,83,30,200);
    block12.shapeColor = "silver";

    block13 = createSprite(15,280,30,195);
    block13.shapeColor = (rgb(111,45,168));

    block14 = createSprite(15,473,30,193);
    block14.shapeColor = (rgb(228,113,122));

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY

    ball.velocityX = 7;
    ball.velocityY = 7;

}

function draw() {
    background("black");
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        music.play();
        ball.shapeColor = "aqua";
       
    }



    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        music.stop();
        ball.shapeColor = "orange";
        
        //write code to set velocityX and velocityY of ball as 0
        ball.velocityX = 0;
        ball.velocityY = 0;
        //write code to stop music
    }

    //write code to bounce off ball from the block3

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        music.play();
        ball.shapeColor = "purple";
       
    }


    //write code to bounce off ball from the block4

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        music.play();
        ball.shapeColor = "lime";
        
    }

    if(block5.isTouching(ball) && ball.bounceOff(block5)){
        music.play();
        ball.shapeColor = "red";
        
    }

    if(block6.isTouching(ball) && ball.bounceOff(block6)){
        music.play();
        ball.shapeColor = "blue";
        
    }

    if(block7.isTouching(ball) && ball.bounceOff(block7)){
        music.play();
        ball.shapeColor = (rgb(0,225,127));
    }

    if(block8.isTouching(ball) && ball.bounceOff(block8)){
        music.play();
        ball.shapeColor = "teal";
    }

    if(block9.isTouching(ball) && ball.bounceOff(block9)){
        music.play();
        ball.shapeColor = "yellow";
       
    }

    if(block10.isTouching(ball) && ball.bounceOff(block10)){
        music.play();
        ball.shapeColor = (rgb(225,20,147));
    }
        
    if(block11.isTouching(ball) && ball.bounceOff(block11)){
        music.play();
        ball.shapeColor = "crimson";
       
    }

    if(block12.isTouching(ball) && ball.bounceOff(block12)){
        music.play();
        ball.shapeColor = "silver";
       
    }

    if(block13.isTouching(ball) && ball.bounceOff(block13)){
        music.play();
        ball.shapeColor = (rgb(111,45,168));
       
    }

    if(block14.isTouching(ball) && ball.bounceOff(block14)){
        music.play();
        ball.shapeColor = (rgb(228,113,122));
       
    }

    drawSprites();
}
