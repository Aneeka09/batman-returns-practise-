const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var raindrops,thunderbolt;
var man,ground;

var raindrops=[]

function preload(){
    
}

function setup(){
   createCanvas(800,800);
   engine=Engine.create();
   world=engine.world;
  // ground=new Ground(400,height,800,20);
  // platform=new Ground(150,305,300,170);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();

    if(frameCount%5===0){
        raindrops.push(new Raindrops(random(width/2-300,width/2+300),10))
    }
    
}   

