class escenario {

  constructor() {
    this.fondoX = 0;
    this.pantalla = 0;
    
    //BOTON VALORESz
    this.posXBotonI = 350;
    this.posYBotonI = 300;
    this.tamXBoton = 150;
    this.tamYBoton = 50;
  }

  dibujarFondo() {

    image(fondo, this.fondoX, 0, 800, 400);
    image(fondo, this.fondoX + 790, 0, 800, 400);

    this.fondoX -= 5;

    if (this.fondoX <= -800) {
      this.fondoX = 0;
    }

  }

  
  dibujarPortada(){
    image(portada, 0, 0, 800, 400);
  }
  
  dibujarInstrucciones() {
    image(instrucciones, 0, 0, 800, 400);
  }
  
  dibujarVictoria() {
  image(victoria,0,0,800,400);
}

dibujarDerrota() {
  image(derrota,0,0,800,400);
}
  
 dibujarBoton(nombre) {

  if (this.detectarZonaR()) {
    fill(77, 39, 0);
  } else {
    fill(255, 168, 80);
  }

  rect(this.posXBotonI,this.posYBotonI,this.tamXBoton,this.tamYBoton,this.tamYBoton/4);

  textSize(this.tamYBoton/2);
  textAlign(CENTER, CENTER);

  fill(255);

  text(nombre,this.posXBotonI + this.tamXBoton/2,this.posYBotonI + this.tamYBoton/2);
}
  
  detectarZonaR() {

  if (mouseX > this.posXBotonI && mouseX < this.posXBotonI + this.tamXBoton && mouseY > this.posYBotonI && mouseY < this.posYBotonI + this.tamYBoton) {

    return true;

  } else {
    return false;
  }
}


}
