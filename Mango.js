class Mango{
    constructor(x, y, radius) {
      var options = {
          'restitution':0.4,
          'friction':1,
          'density': 10,
          'isStatic': true
      }
      this.image = loadImage("mango.png");
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(5);
      stroke("grey");
      fill("white");
      ellipseMode(RADIUS);
      ellipse(0, 0, this.radius);
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, 50, 50);
      pop();
    }
  };