class Stone {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("Plucking mangoes/stone.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
  }
  Fly() {
         this.launcher.bodyA = null;
     }
}
