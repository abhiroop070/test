const eng=Matter.Engine
const world=Matter.World
const bodies=Matter.Bodies

var eg,wr,bod
var boxes,grd
var b1,b2,b3,b4,b5
var l1,l2,l3,l4
var p1,p2
var bird1

function setup() {
  createCanvas(1200,400);
 // createSprite(400, 200, 50, 50);
  eg=eng.create()
  wr=eg.world
 // bod=body.rectangle(200,200,40,50)
 // world.add(wr,bod)
 
 b1=new Box(700,320,70,70)
 b2=new Box(920,320,70,70)
 b3=new Box(700,240,70,70)
 b4=new Box(920,240,70,70)
 b5=new Box(810,160,70,70)
 
 grd=new Ground(600,400,1200,20)
  console.log(bod)
}

function draw() {
  background(255,255,255);  
  eng.update(eg)
  //rect(bod.position.x,bod.position.y,40,50)
b1.displays()
b2.displays()
b3.displays()
b4.displays()
b5.displays()
grd.displays()
  
  
}