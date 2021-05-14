class Bob{
    constructor(x,y,radius){
        var options = {isStatic: false, density: 0.3}
        this.body = Bodies.circle(x,y,radius/2,options);
        
        this.radius = radius
        World.add(world, this.body)
    }

    display(){
        var pos = this.body.position;
        push()
        
        translate(pos.x,pos.y);
        fill("pink");
        stroke("black")
        ellipseMode(CENTER)
        ellipse(0,0,this.radius,this.radius)
        
         pop()
        
    }
}