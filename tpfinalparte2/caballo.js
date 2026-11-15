class caballo {

  constructor() {
    this.posX= 50
    this.ancho = 200;
    this.alto = 150;
    this.posY = 200;
    this.radioColision = 40;
    
    this.cuadroCorre = 0;
    this.cuadroSalto = 0;
    this.saltando = false;
    this.alturaSalto = 0;
    this.velocidadSalto = 20;
    this.contadorAnimacion = 0;
  }
   dibujarCaballo() {
    
    if (this.saltando) {

this.alturaSalto += this.velocidadSalto;

  if (this.alturaSalto >= 200) {
    this.alturaSalto = 200;
    this.velocidadSalto = -4;
  }

  if (this.alturaSalto > 50 && this.velocidadSalto > 0) {
    this.cuadroSalto = 3;
  }

  if (this.velocidadSalto < 0) {
    this.cuadroSalto = 4;

    if (this.alturaSalto < 60) {
      this.cuadroSalto = 5;
    }

    if (this.alturaSalto < 30) {
      this.cuadroSalto = 6;
    }
  }

  image(caballoSalta[this.cuadroSalto], this.posX, this.posY - this.alturaSalto, this.ancho, this.alto);

  if (this.alturaSalto <= 0 && this.velocidadSalto < 0) {
    this.alturaSalto = 0;
    this.velocidadSalto = 20;
   this. saltando = false;
    this.cuadroSalto = 0;
  }

} else {
    image(caballoCorre[this.cuadroCorre], this.posX, this.posY, this.ancho, this.alto);

   this.contadorAnimacion++;

if (this.contadorAnimacion >= 5) {

  this.cuadroCorre++;

  if (this.cuadroCorre >= 6) {
    this.cuadroCorre = 0;
  }

  this.contadorAnimacion = 0;
}
  }

  }
  saltar() {
       if (keyCode === UP_ARROW && !this.saltando) {
    this.saltando = true;
    this.bajando = false;
    this.alturaSalto = 0;
    this.velocidadSalto = 20;
    this.cuadroSalto = 0;
  }
  }
  
  
}
