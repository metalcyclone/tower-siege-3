class Box  {
    constructor(x, y, width, height){
      box = (x,y,width,height);
      this.image = loadImage("sprites/wood1.png");
      visibility = 255;
    }
  
display(){
//console.log(this.body.speed);
if(this.body.speed < 3){
  super.display();
 }
 else{
   World.remove(world, this.body);
   push();
   this.Visiblity = this.Visiblity - 5;
   tint(255,this.Visiblity);
   image(this.image, this.body.position.x, this.body.position.y, 50, 50);
   pop();
 }
}
  };

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  