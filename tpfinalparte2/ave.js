class ave {

  constructor() {
    this.cuadroAve = 0;
    this.contadorAnimacion = 0;
    this.posX = 800;
    this.posY = 210;
    this.ancho = 200;
    this.alto = 200;
    this.vel = 12;
    this.radioColision = 5;
  }

  dibujarAve() {

  image(pajaro[this.cuadroAve], this.posX, this.posY, this.ancho, this.alto);

  this.contadorAnimacion++;

  if (this.contadorAnimacion >= 5) {

    this.cuadroAve++;

    if (this.cuadroAve >= 4) {
      this.cuadroAve = 0;
    }

    this.contadorAnimacion = 0;
  }
}

moverAve() {

  this.posX -= this.vel;

  }



  reiniciarAve() {
    this.posX = 800;
    this.posY = 210;
    this.vel = random(9, 16);
  }
  
  terminoRecorrido() {
  return this.posX < -this.ancho - 300;
}

  colision(caballo) {

  let centroCaballoX = caballo.posX + caballo.ancho / 2;

  let centroCaballoY = caballo.posY - caballo.alturaSalto + caballo.alto / 2;

  let centroAveX = this.posX + this.ancho / 2;
  let centroAveY = this.posY + this.alto / 2;

  let distan = dist(
    centroCaballoX, centroCaballoY,
    centroAveX, centroAveY
  );

  return distan < caballo.radioColision + this.radioColision;
}
}
