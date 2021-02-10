const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;


function setup() {

  engine = Engine.create();
  world = engine.world;
  

  createCanvas(1200,400);
  

  ground1 = new Ground(700,250,300,30);
  ground2 = new Ground(200,250,300,30);
  

  ball = new Ball(450,100,30);

  sling = new SlingShot(ball.body,{x:450,y:100});

  ground = new Ground(500,395,1000,20);

  //level top
     block34=new Box(220,15,30,40);
     block35=new Box(190,15,30,40);
     //level one 
     block1=new Box(190,55,30,40);
     block31=new Box(160,55,30,40);
     block32=new Box(220,55,30,40);
     block33=new Box(250,55,30,40);
      //level three 
     block2=new Box(130,135,30,40); 
     block3=new Box(160,135,30,40); 
     block4=new Box(190,135,30,40); 
     block5=new Box(220,135,30,40); 
     block6=new Box(250,135,30,40);
     block25=new Box(280,135,30,40);
     block26=new Box(100,135,30,40);
     block27=new Box(310,135,30,40);

     //level two 
     block28= new Box(130,95,30,40);
     block7= new Box(160,95,30,40);
      block8= new Box(190,95,30,40); 
      block9= new Box(220,95,30,40);
      block29= new Box(250,95,30,40);
      block30= new Box(280,95,30,40);


      //next level 1
      block10= new Box(600,135,30,40);
      block11= new Box(630,135,30,40);
      block12= new Box(660,135,30,40);
      block13= new Box(690,135,30,40);
      block14= new Box(720,135,30,40);
      block15= new Box(750,135,30,40);
      block16= new Box(780,135,30,40);
      block17= new Box(810,135,30,40);
     

      //next level two 
     block19= new Box(630,95,30,40);
     block20= new Box(660,95,30,40); 
     block21= new Box(690,95,30,40);
     block22= new Box(720,95,30,40);
     block23= new Box(750,95,30,40);
     block24= new Box(780,95,30,40);

     //next level three
     block36= new Box(690,55,30,40);
     block38= new Box(720,55,30,40);
     block37= new Box(750,55,30,40);
     block39= new Box(660,55,30,40);

     //next level top
     block40=new Box(720,15,30,40);
     block41=new Box(690,15,30,40);
     
}

    

function draw() {
  background(255,255,255);  
  Engine.update(engine); 

  ground.display();

  stroke(15);
  fill("maroon")
  block40.display();
  block41.display();
  
  

  stroke(15);
  fill("gray")
  block1.display();
  block32.display();
  block31.display();
  block33.display();

  stroke(15);
  fill("orange")
  block36.display();
  block39.display();
  block38.display();
  block37.display();

  stroke(15);
  fill("pink")
  block34.display();
  block35.display();
  


  stroke(15);
  fill("red")
  block3.display();
  block4.display();
  block2.display();
  block5.display();
  block6.display();
  block25.display();
  block26.display();
  block27.display();

  stroke(15);
  fill("yellow")
  block9.display();
  block8.display();
  block7.display();
  block28.display();
  block29.display();
  block30.display();


  stroke(15);
  fill("blue")
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  


  stroke(15);
  fill("magenta")
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  
 





  ball.display();
  
  ground.display();
 
  sling.display();
  ground1.display();
  ground2.display();

  

}
 
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  sling.fly();
}


