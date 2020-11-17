var player;
var score=0;
var obs1, obs2, obs3, obs4, obs5, obs6, obs7, obs8, obs9, obs10, obs11, obs12, obs13;
var obs14, obs15, obs16, obs17, obs18, obs19, obs20, obs21, obs22, obs23, obs24, obs25;
var obs26, obs27, obs28, obs29, obs30, obs31, obs32, obs33;
var target;


function setup() {
  createCanvas(displayWidth-20, displayHeight-30);
  player = createSprite(displayWidth-1300, displayHeight-720, 15,15)
  target = createSprite(displayWidth-70, displayHeight-70, 10, 10);

  obs1 = createSprite(displayWidth-600, displayHeight-500, 250, 13);
  obs2 = createSprite(displayWidth-500, displayHeight-575,13,150);
  obs3 = createSprite(displayWidth-725, displayHeight-450, 13, 170);
  obs4 = createSprite(displayWidth-845, displayHeight-371,220,13);
  obs5 = createSprite(displayWidth-1200, displayHeight-520, 13,150);
  obs6 = createSprite(displayWidth-700, displayHeight-650, 250, 13);
  obs7 = createSprite(displayWidth-650, displayHeight-500, 250, 13);
  obs8 = createSprite(displayWidth-780, displayHeight-550, 13, 200);
  obs9 = createSprite(displayWidth-1140, displayHeight-700, 250, 13);
  obs10 = createSprite(displayWidth-878, displayHeight-620, 13, 150);
  obs11 = createSprite(displayWidth-978, displayHeight-550, 250, 13);
  obs12 = createSprite(displayWidth-1078, displayHeight-350, 13, 200);
  obs13 = createSprite(displayWidth-1148, displayHeight-255, 250, 13);
  obs14 = createSprite(displayWidth-778, displayHeight-280, 13, 190);
  obs15 = createSprite(displayWidth-678, displayHeight-190, 250, 13);
  obs16 = createSprite(displayWidth-550, displayHeight-180, 13, 190);
  obs17 = createSprite(displayWidth-180, displayHeight-700, 250, 13);
  obs18 = createSprite(displayWidth-250, displayHeight-600, 13, 200);
  obs19 = createSprite(displayWidth-320, displayHeight-590, 140, 13);
  obs20 = createSprite(displayWidth-900, displayHeight-275, 13, 200);
  obs21 = createSprite(displayWidth-679, displayHeight-100, 250, 13);
  obs22 = createSprite(displayWidth-650, displayHeight-500, 250, 13);
  obs23 = createSprite(displayWidth-100, displayHeight-390, 13, 175);
  obs24 = createSprite(displayWidth-220, displayHeight-378, 250, 13);
  obs25 = createSprite(displayWidth-220, displayHeight-280, 13, 198);
  obs26 = createSprite(displayWidth-170, displayHeight-100, 230, 13);
  obs27 = createSprite(displayWidth-1250, displayHeight-100, 200, 13);
  obs28 = createSprite(displayWidth-1150, displayHeight-100, 13, 100);
  obs29 = createSprite(displayWidth-1230, displayHeight-210, 13, 90);
  obs30 = createSprite(displayWidth-1190, displayHeight-370, 230, 13);
  obs31 = createSprite(displayWidth-390, displayHeight-160, 210, 13);
  obs32 = createSprite(displayWidth-600, displayHeight-270, 210, 13);
  obs33 = createSprite(displayWidth-501, displayHeight-350, 13, 150);
  obs34 = createSprite(displayWidth-950, displayHeight-80, 150, 13);
  obs35 = createSprite(displayWidth-300, displayHeight-200, 13, 150);
}

function draw() {
  background(26, 17, 68);  
  drawSprites();
}
