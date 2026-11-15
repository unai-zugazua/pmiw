class cactus {

  constructor() {
    this.posX = 800
    this.ancho = 160;
    this.alto = 100;
    this.posY = 250
    this.vel = 15
  }

  dibujarCactus() {
    fill(0, 255, 0);
    
    image(planta,this.posX, this.posY, this.ancho, this.alto);
  }

  movercactus() {
    this.posX -= this.vel;   
    }
  
  reiniciarCactus() {
    this.posX = 800
    this.posY = 250
    this.ancho = 160;
    this.alto = 100;
    this.vel = random(8, 20);
  }
  
  terminoRecorrido() {
  return this.posX < -this.ancho;
}
  
  colision(caballo) {

  let centroCaballoX = caballo.posX + caballo.ancho / 2;
  let centroCaballoY = caballo.posY - caballo.alturaSalto + caballo.alto / 2;

  let centroCactusX = this.posX + this.ancho / 2;
  let centroCactusY = this.posY + this.alto / 2;

  let distan = dist(centroCaballoX,centroCaballoY,centroCactusX,centroCactusY);

  return distan < caballo.radioColision + this.ancho / 2;
}



}
