class Ball{
    constructor(x,y,radius){
        var options={
            restitution:0.9,
            friction:0.5,
            density:1.2
        }

        this.body=Bodies.circle(x,y,radius,options)
        this.radius=radius;
        this.image = loadImage("polygon.png");
        World.add(world,this.body)
        console.log(this.body)
        
    }


    display(){
        var angle=this.body.angle
        push();
        imageMode(CENTER);
        translate(this.body.position.x, this.body.position.y)
        rotate(angle);
        image(this.image, 0, 0,80,80);
        pop();

    }

}
