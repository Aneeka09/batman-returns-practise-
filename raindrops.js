class Raindrops{
    constructor(x,y){
      this.r=4;
      this.bodies=Bodies.circle(x,y,this.r);
      this.colour=color(0,255,255);
      World.add(world,this.body);


    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r)
        pop();
     }
}