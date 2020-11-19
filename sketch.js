var player;
var score=0;
var target;
var obs1, obs2, obs3, obs4, obs5, obs6, obs7, obs8, obs9, obs10;
var obs11, obs12, obs13, obs14, obs15, obs16, obs17, obs18, obs19, obs20;
var obs21, obs22, obs23, obs24, obs25, obs26, obs27;

function setup() {
  createCanvas(displayWidth-270, displayHeight-90);
  player = createSprite(displayWidth-900, displayHeight-120, 10, 10);
  target = createSprite(displayWidth-850, displayHeight-400, 20, 20);
  edges = createEdgeSprites();
//outer layer
 obs1 = createSprite(displayWidth-1330, displayHeight-430, 13, 620);
 obs2 = createSprite(displayWidth-820, displayHeight-733, 1020, 13);
 obs3 = createSprite(displayWidth-315, displayHeight-430, 13, 620);
 obs4 = createSprite(displayWidth-1125, displayHeight-127, 400, 13);
 obs5 = createSprite(displayWidth-590, displayHeight-127, 550, 13);
// 1st layer
 obs6 = createSprite(displayWidth-1200, displayHeight-650, 100, 13);
 obs7 = createSprite(displayWidth-1245, displayHeight-430, 13, 450);
 obs8 = createSprite(displayWidth-827, displayHeight-200, 850, 13);
 obs9 = createSprite(displayWidth-408, displayHeight-420, 13, 450);
 obs10 = createSprite(displayWidth-736, displayHeight-650, 670, 13);
 // 2nd layer
 obs11 = createSprite(displayWidth-1160, displayHeight-480, 13, 180);
 obs12 = createSprite(displayWidth-1160, displayHeight-290, 13, 70);
 obs13 = createSprite(displayWidth-1040, displayHeight-260, 250, 13);
 obs14 = createSprite(displayWidth-665, displayHeight-260, 350, 13);
 obs15 = createSprite(displayWidth-496, displayHeight-410, 13, 300);
 obs16 = createSprite(displayWidth-539, displayHeight-565, 100, 13);
 obs17 = createSprite(displayWidth-919, displayHeight-564, 470, 13);
 // 3rd layer
 obs18 = createSprite(displayWidth-1085, displayHeight-410, 13, 190);
 obs19 = createSprite(displayWidth-846, displayHeight-322, 490, 13);
 obs20 = createSprite(displayWidth-608, displayHeight-350, 13, 50);
 obs21 = createSprite(displayWidth-608, displayHeight-474, 13, 60);
 obs22 = createSprite(displayWidth-852, displayHeight-498, 480, 13);
 //4th layer
 obs23 = createSprite(displayWidth-1005, displayHeight-410, 13, 70);
 obs24 = createSprite(displayWidth-850, displayHeight-438, 320, 13);
 obs25 = createSprite(displayWidth-695, displayHeight-410, 13, 70);
 obs26 = createSprite(displayWidth-809, displayHeight-370, 240, 13);
 obs27 = createSprite(displayWidth-999, displayHeight-370, 25, 13);

 player.shapeColor = "blue";
 target.shapeColor = "red";
 obs1.shapeColor= "black";
 obs2.shapeColor= "black";
 obs3.shapeColor= "black";
 obs4.shapeColor= "black";
 obs5.shapeColor= "black";
 obs6.shapeColor= "black";
 obs7.shapeColor= "black";
 obs8.shapeColor= "black";
 obs9.shapeColor= "black";
 obs10.shapeColor= "black";
 obs11.shapeColor= "black";
 obs12.shapeColor= "black";
 obs13.shapeColor= "black";
 obs14.shapeColor= "black";
 obs15.shapeColor= "black";
 obs16.shapeColor= "black";
 obs17.shapeColor= "black";
 obs18.shapeColor= "black";
 obs19.shapeColor= "black";
 obs20.shapeColor= "black";
 obs21.shapeColor= "black";
 obs22.shapeColor= "black";
 obs23.shapeColor= "black";
 obs24.shapeColor= "black";
 obs25.shapeColor= "black";
 obs26.shapeColor= "black";
 obs27.shapeColor= "black";
}

function draw() {
  background(165, 135, 108); 
  if(keyIsDown(UP_ARROW)){
player.velocityX = 0;
player.velocityY = -3;
  }

  if(keyIsDown(DOWN_ARROW)){
    player.velocityX = 0;
    player.velocityY = 3;
      }

      if(keyIsDown(RIGHT_ARROW)){
        player.velocityX = 3;
        player.velocityY = 0;
          }
  
          if(keyIsDown(LEFT_ARROW)){
            player.velocityX = -3;
            player.velocityY = 0;
              }

//createEdgeSprites();

player.bounceOff(edges);

if(player.isTouching(obs1)||
player.isTouching(obs2)||
player.isTouching(obs3)||
player.isTouching(obs4)||
player.isTouching(obs5)||
player.isTouching(obs6)||
player.isTouching(obs7)||
player.isTouching(obs8)||
player.isTouching(obs9)||
player.isTouching(obs10)||
player.isTouching(obs11)||
player.isTouching(obs12)||
player.isTouching(obs13)||
player.isTouching(obs14)||
player.isTouching(obs15)||
player.isTouching(obs16)||
player.isTouching(obs17)||
player.isTouching(obs18)||
player.isTouching(obs19)||
player.isTouching(obs20)||
player.isTouching(obs21)||
player.isTouching(obs22)||
player.isTouching(obs23)||
player.isTouching(obs24)||
player.isTouching(obs25)||
player.isTouching(obs26)||
player.isTouching(obs27)
){
player.x = displayWidth-900;
player.y = displayHeight-120;
player.velocityX = 0;
player.velocityY = 0;
}

if(player.isTouching(target)){
  textSize(30);
text("You win", displayWidth-850, displayHeight-400);
player.velocityX = 0;
player.velocityY = 0;
}
  drawSprites();
}
