class Bob {
    constructor(x, y,radius) {
      var options = {
        'isStatic':false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
      }
      this.body = Bodies.circle(x, y,radius,options);
      this.radius =radius;
      //this.setCollider("circle",0,0,40);
     //this.width =70;
     //this.height = 70;
     // this.r = 60;
     //this.image=loadImage("sprites/paper.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     // var angle = this.body.angle;
     
     
      ellipseMode(RADIUS);
      ellipse(pos.x,pos.y,this.radius,this.radius);
      //translate(this.body.position.x, this.body.position.y);
     //rotate(angle);
     //imageMode(RADIUS);
     ///   image(this.image,pos.x,pos.y, this.r,this.r);
     
      
    }
  }