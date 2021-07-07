const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,engine,world;

var plinkos = [];
var particles = [];
var divisions= [];

var divisionsHeight=300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;


  ground = new Ground(200,685,1200,20);
  
  for (var i = 0; i<=width; i= i+80) {
    divisions.push(new Division(i,height-divisionsHeight/2, 10, divisionsHeight));
  }
  
  for (var j=-10; j<=width; j = j+50) {
    plinkos.push(new Plinko(j, 75));
  }
  for (var j=15; j<=width; j = j+50) {
    plinkos.push(new Plinko(j, 175));
  }
  for (var j=-10; j<=width; j = j+50) {
    plinkos.push(new Plinko(j, 275));
  } 
  for (var j=15; j<=width; j = j+50) {
    plinkos.push(new Plinko(j, 375));
  }
   
Engine.run(engine);

  }


function draw() {
  background("black");  
  Engine.update(engine);

ground.display();

if(frameCount%60===0){
  particles.push(new Particle(random(width/2-10,width/2+10), 10,10));
}


for (var n = 0; n<divisions.length; n++) {
  divisions[n].display();
}
for (var j = 0; j<plinkos.length; j++) {
  plinkos[j].display();
}
for (var j = 0; j<particles.length; j++){
  particles[j].display();
}

}
