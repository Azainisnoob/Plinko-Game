class Plinko{
    constructor(x, y) {
        var options = {
            
            isStatic: true,
            
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, 15, options);
        this.height = height;
        this.radius = 15;
        World.add(world, this.body);
      }
      display(){
        push();
        //translate(this.body.position.x, this.body.position.y);
        var pos =this.body.position;
        ellipseMode(CENTER);
        fill("white");
        ellipse(pos.x, pos.y,15);
        
        pop();
      }
  }