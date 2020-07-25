var runner,runnerImg;
var building1,building2,building3,building4,building5;
var building;
var buildingbg, buildingbgimg;
var farm,farmImg;
var parachute,parachuteImg;
var mountain, mountainImg,mountI;
var c1,c1img,c2,c2img;
var coin,coinImg;
var cycling,cyclingImg;
var desertImg,desert;
var dig,digImg;
var farm,farmImg;
var farm,farmImg, paper,paperImg;
var treasureChest,stadium;
var treasureChestimg,stadiumimg;
var buildingGroup;
var steps,stepsimg;
var ig, ig2, ig3, ig4;
var PLAY=1;
var END= 0;
var gamestate= PLAY;
var LEVEL1;
var LEVEL2;
var LEVEL3;
var LEVEL4;
var LEVEL5;
var level=LEVEL1;
var coingroup, buildingGroup;
var retry, retryimg;
var count,coin;
var farmbg;
var nextlevel;
var rock, rockimg;
var rockgroup;igt;
function preload(){
  runnerImg=loadAnimation("Images/runner1.png","Images/runner3.png","Images/runner2.png","Images/runner4.png");
  runnerJump= loadImage("Images/runner2.png");
  runnerfall= loadImage("Images/runner3.png");
  building1= loadImage("Images/building1.png");
  building2= loadImage("Images/building2.png");
  building3= loadImage("Images/building3.png");
  building4= loadImage("Images/building4.png");
  building5= loadImage("Images/building5.png");
  buildingbgimg= loadImage("Images/buildingBG.png");
  farmImg=loadImage("Images/farm.jpg");
  parachuteImg=loadImage("Images/parachute.png");
  mountainImg=loadImage("Images/mountainClimb.gif");
  mountI= loadImage("Images/mountain.jpg");
  c1img=loadImage("Images/c1.jpg");
  c2img=loadImage("Images/c2.png");
  coinImg=loadImage("Images/coin.png");
  cyclingImg= loadAnimation("Images/cycling.gif");
  desertImg= loadImage("Images/desert.jpg");
  digImg= loadAnimation("Images/dig.gif");
  farmImg= loadImage("Images/farm.jpg");
  paperImg= loadImage("Images/paper.png");
  treasureChestimg=loadImage("Images/treasureChest.jpg");
  stadiumimg= loadImage("Images/stadium.jpg");
  stepsimg= loadImage("Images/steps.png");
  retryimg= loadImage("Images/retry.png");
  nextlevelimg= loadImage ("Images/nextlevel.png");
  rockimg= loadImage("Images/rock.png");
}



function setup() {
  createCanvas(1300,600);
  buildingbg= createSprite(650, 300, 2500, 1000);
  buildingbg.addImage(buildingbgimg);
  farmbg= createSprite(650, 300, 2500, 1000);
  farmbg.addImage(farmImg);
  farmbg.visible=false;
  buildingbg.scale= 3.5;
  farmbg.scale=3.2;
  runner= createSprite(130, 100,30,50);
  runner.addAnimation("running",runnerImg);
  runner.scale=0.4;
  runner.setCollider("circle",0,0,100);
  buildingGroup= createGroup();
  coingroup= createGroup();
  rockgroup= createGroup();
  ig= createSprite(100,140,150,20);
  ig.visible=false;
  ig2= createSprite(550,530,1500,20);
  ig2.visible=false; 
  //ig4= createSprite(650,450 ,1300,20);
  //ig4.visible=false;
  retry= createSprite(700, 300);
  retry.addImage(retryimg);
  retry.scale=0.7;
  retry.visible= false;
  nextlevel=createSprite(700,500);
  nextlevel.addImage(nextlevelimg)
  nextlevel.visible=false;
  //count= 0;
  igt= createSprite(0,300,20,600);
  igt.visible=false;
  igm= createSprite(100,500,150,20);
  igm.visible= false;
}
function draw() {

  background("white"); 
  igt.collide(runner);
  //runner.collide(igm);
  runner.velocityX=0;
  if(frameCount===1){
    alert('Use space key to make the runner jump.');
  }
  if(gamestate===PLAY)  { 
    if(keyWentDown("space")&& runner.y > 150){
      runner.velocityY=-10 ;
      runner.addImage(runnerJump);
    }
    runner.velocityY=runner.velocityY+0.8;
    if(frameCount>0 && frameCount<999){
      buildingbg.visible=true;
      level=LEVEL1;
      buildings(); 
      buildingGroup.setVisibleEach(true);
      rockgroup.setVisibleEach(false);
    }
    
    if(frameCount<285 || frameCount===285){
      runner.collide(ig);
      coingroup.setVisibilityEach= false;
    }
     else{
       runner.collide(buildingGroup);
       coingroup.setVisibilityEach= true;
     }
    
    if(frameCount>0 && frameCount<999){
      buildingbg.visible=true;
      count= Math.round(World.frameCount/5);
      level=LEVEL1;
      coingroup.setVisibleEach(false);
       buildingbg.velocityX=-(4+Math.round(World.frameCount/100));
      if(buildingbg.x<0){
        buildingbg.x= buildingbg.width/2;
      }  
      buildingbg.velocityX=-(4+Math.round(World.frameCount/200));
      if(buildingbg.x<0){
        buildingbg.x= buildingbg.width/2;
        rockgroup.setVisibilityEach(false);
      }
      if( ig2.collide(runner)){
        buildingbg.velocityX = 0;
        console.log(buildingbg.velocityX);
        gamestate= END;
        runner.addAnimation(runnerfall);
        retry.visible=true;
        buildingbg.velocityX = 0;
        buildingbg.velocityY = 0;
        
        buildingGroup.setLifetimeEach(-1);
        runner.velocityY= 0;
        buildingGroup.setVelocityXEach(0);
        buildingGroup.setVelocityYEach(0);     
        runner.addImage(runnerfall);
        count= count;
       }
    }
   
    if(level===LEVEL1){
      
     //rockgroup.destroyEach();
      buildingbg.velocityX=-(4+Math.round(World.frameCount/100));
   if(buildingbg.x<0){
     buildingbg.x= buildingbg.width/2;
   }  
     if(frameCount===1000){
      nextlevel.visible=true;
    }
    else{
      nextlevel.visible=false;
    }
   
   if(frameCount > 1000 || frameCount === 1000){
    level=LEVEL2;
    retry.visible=false;
    buildingbg.visible=false;
    farmbg.visible=true;
    if(farmbg.x<0){
      farmbg.x= farmbg.width/2;
    }  
    runner.collide(ig2);
    //rockgroup.collide(runner);
    coins();
    rocks();
    farmbg.velocityX=-(4+Math.round(World.frameCount/200));
      if(runner.isTouching(coingroup)){
      count= count+1;
      coingroup.visibility=false;
    }  
    if(rockgroup.isTouching(runner)){
      gamestate=END;
    }
    } 
     //retry.visible=false; 
  }
}
   if(gamestate===END){
      if(buildingGroup.isTouching(runner)|| rockgroup.isTouching(runner)|| runner.x<0){
        // buildingGroup.collide(runner);
         buildingbg.velocityX = 0;
         buildingbg.velocityY = 0;
         farmbg.velocityX = 0;
         farmbg.velocityY = 0;
         buildingGroup.setLifetimeEach(-1);
         coingroup.setLifetimeEach(-1);
         rockgroup.setLifetimeEach(-1);
         runner.velocityY= 0;
         buildingGroup.setVelocityXEach(0);
         buildingGroup.setVelocityYEach(0); 
         coingroup.setVelocityXEach(0);
         coingroup.setVelocityYEach(0);   
         rockgroup.setVelocityXEach(0);
         rockgroup.setVelocityYEach(0);
         runner.addAnimation(runnerfall);
         retry.visible=true;
         frameCount=0;
         if(mousePressedOver(retry)){
           reset();
         }
         //console.log(buildingGroup.velocityXEach);
        /* if(mousePressedOver(nextlevel)){
           gamestate=PLAY;
           nextLevel();
           reset();
           runner.x=90;
           count=0;
           //if(frameCount<285 || frameCount===285){
            runner.collide(ig); 
          }
           else {
             runner.collide(buildingGroup);
           }*/
          }
      }
  drawSprites();
  text("Score 0"+count,1200,50);
  fill(0,0,0);
  //fontSize(10);
}
function buildings(){
if(frameCount % 100 === 0){
  building= createSprite(1300,500 ,50,200);
   building.velocityX=-6;
   //building.debug=true;
   buildingGroup.add(building);
   var rand = Math.round (random(1,5));
   //steps.visible=false;
   //console.log(rand);
   switch (rand){
    case 1 : building.addImage(building1);
    break;
    case 2 : building.addImage(building2);
    break;
    case 3 : building.addImage(building3);
    break;
    case 4 : building.addImage(building4);
    break;
    case 5 : building.addImage(building5);
    break;
    default : break;
   }
   building.depth=1;
 }
 
}

function coins(){
  if(frameCount % 60 === 0  || frameCount % 80 === 0){
    var rand= Math.round(random(1200, 1300));
    var rand1= Math.round(random(100,300));
    coin= createSprite(rand,rand1 ,50,200);
    coin.addImage(coinImg);
     coin.velocityX=-8;
     coin.scale=0.1;
     coingroup.add(coin);
   }
   
  }

function reset(){
  gamestate= PLAY;
  retry.visible= false;
 /* if(frameCount<285 || frameCount===285){
    runner.collide(ig); 
   }*/
   runner.collide(ig);
   runner.x=90;
  buildingGroup.destroyEach();
  buildingbg.velocityX=-(4+Math.round(World.frameCount/100));;
  count=0;
 }
 function rocks(){
  if(frameCount % 60 === 0){
    rock= createSprite(1300,550,50,200);
    rock.addImage(rockimg);
    rock.velocityX=-8;
    rock.scale=0.1;
    rockgroup.add(rock);
    runner.depth= rock.depth;
   }
   
  }