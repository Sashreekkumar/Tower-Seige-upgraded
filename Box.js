class Box extends BaseClass {
  constructor(x, y){
    super(x,y,30,40);
    this.image = loadImage("box.png");
    this.Visibility= 255

  }

  
  display(){
    
    if(this.body.speed<3){
      super.display();
    }
   
    else{
      World.remove(world, this.body)
      push();
      this.Visibility= this.Visibility-10
      tint(255, this.Visibility)
      image(this.image, this.body.position.x, this.body.position.y, 30, 40)
      pop ();
    } 
  }

  score(){
    if(this.Visibility<0 && this.Visibility>=-100){
      score++;
    }
  }
};