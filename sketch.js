const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function preload() {

    

    
}

function setup(){
    var canvas = createCanvas(1400,700);
    engine = Engine.create();
    world = engine.world;

    // for ground1
    ground1=new Ground(500,400,250,20);
    block1=new Block(420,365,50,50);
    block2=new Block(470,365,50,50);
    block3=new Block(520,365,50,50);
    block4=new Block(570,365,50,50);
    block5=new Block2(450,315,50,50);
    block6=new Block2(500,315,50,50);
    block7=new Block2(550,315,50,50);
    block8=new Block(470,265,50,50);
    block9=new Block(520,265,50,50);
    block10=new Block2(500,215,50,50);

    // for ground2
    ground2=new Ground(1000,300,250,20);
    block11=new Block2(920,265,50,50);
    block12=new Block2(970,265,50,50);
    block13=new Block2(1020,265,50,50);
    block14=new Block2(1070,265,50,50);
    block15=new Block(950,215,50,50);
    block16=new Block(1000,215,50,50);
    block17=new Block(1050,215,50,50);
    block18=new Block2(970,165,50,50);
    block19=new Block2(1020,165,50,50);
    block20=new Block(1000,115,50,50);

    // for Ball
    ball=new Ball(100,200,100)

    // for sling
    sling = new Slingshot(ball.body,{x:100,y:200});
    
}

function draw(){
    background("indigo")

    // for ground1
    ground1.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();

    // for ground2
    ground2.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();

    // for Ball
    ball.display();

    // for sling
    sling.display();

}
function mouseDragged(){
  
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
    
}
function mouseReleased(){
    
    sling.fly();

}
