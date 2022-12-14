class Parede {
  //propriedades do objeto
  constructor(x, y, w, h) {
    //this.
    this.body = Bodies.rectangle(x, y, w, h, { isStatic: true });
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }
  //funções do objeto
  show() {
    rectMode(CENTER);
    rect(this.body.position.x, this.body.position.y, this.w, this.h);
  }
}
