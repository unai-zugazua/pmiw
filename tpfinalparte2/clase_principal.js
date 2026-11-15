class Principal {

  constructor() {
    this.ave = new ave();
    this.cactus = new cactus();
    this.crearCaballo();
    this.crearFondo();
    this.vidas = 3;
    this.obstaculoActivo = "cactus";
  }

dibujar() {
  if (pantalla === 0) {
    this.dibujarInicio();

  } else if (pantalla === 1) {
    this.dibujarInstrucciones();

  } else if (pantalla === 2) {
    tiempoTranscurrido = millis() - tiempo;

    if (tiempoTranscurrido >= 15000) {
      pantalla = 3;
    } else {
      this.dibujarJuego();
    }

  } else if (pantalla === 3) {
    this.dibujarVictoria();

  } else if (pantalla === 4) {
    this.dibujarDerrota();
    
  } else if (pantalla === 5) {
  this.dibujarCreditos();
}
}

cambiarObstaculo() {

  if (this.obstaculoActivo === "cactus" && this.cactus.terminoRecorrido()) {

    this.obstaculoActivo = "ave";
    this.ave.reiniciarAve();

  } else if (this.obstaculoActivo === "ave" && this.ave.terminoRecorrido()) {

    this.obstaculoActivo = "cactus";
    this.cactus.reiniciarCactus();

  }
}

  dibujarJuego() {

  this.fondo.dibujarFondo();
  this.caballo.dibujarCaballo();
  

  if (this.obstaculoActivo === "cactus") {

    this.cactus.dibujarCactus();
    this.cactus.movercactus();

  } else if (this.obstaculoActivo === "ave") {

    this.ave.dibujarAve();
    this.ave.moverAve();

  }
  this.cambiarObstaculo();
  this.detectarColision();

  image(corazones[this.vidas], 620, 20, 120, 45);
}



  crearCaballo() {
    this.caballo = new caballo();
  }

  saltar() {
    this.caballo.saltar();
  }

  crearFondo() {
    this.fondo = new escenario();
  }
  
  dibujarInicio() {
  this.fondo.dibujarPortada();
  this.fondo.dibujarBoton("INICIAR");
}
dibujarInstrucciones() {
  this.fondo.dibujarInstrucciones();
  this.fondo.dibujarBoton("JUGAR");
}
dibujarVictoria() {
  this.fondo.dibujarVictoria();
   this.fondo.dibujarBoton("creditos");
}

dibujarDerrota() {
  this.fondo.dibujarDerrota();
  this.fondo.dibujarBoton("creditos");
}

dibujarCreditos() {
  image(creditos, 0, 0, width, height);
  
  textFont(miFuente);
  textAlign(CENTER, CENTER);
  textSize(28);
  fill(255);

  text("WOOLLANDS TOMAS", width / 2, 220);
  text("ZUGAZUA UNAI", width / 2, 260);
  this.fondo.dibujarBoton("INICIO");
}

detectarInicio() {

  if (this.fondo.detectarZonaR()) {
    pantalla = 1;
  }
    
}



detectarColision() {

  if (this.obstaculoActivo === "cactus") {

    if (this.cactus.colision(this.caballo)) {
      this.vidas--;
      this.cactus.posX = -this.cactus.ancho - 1;
    }

  } else if (this.obstaculoActivo === "ave") {

    if (this.ave.colision(this.caballo)) {
      this.vidas--;
      this.ave.posX = -this.ave.ancho - 1;
    }

  }

  if (this.vidas <= 0) {
    pantalla = 4;
  }
}



reiniciarJuego() {

  this.vidas = 3;

  // Reiniciar posición del caballo
  this.caballo = new caballo();

  // Reiniciar cactus
  this.cactus = new cactus();
  
  // Reiniciar ave
  this.ave = new ave();

  // Reiniciar fondo
  this.fondo.fondoX = 0;

  // Reiniciar tiempo
  tiempo = 0;
  tiempoTranscurrido = 0;

  // Volver a la portada
  pantalla = 0;
}

detectarClic() {

  if (pantalla === 0) {

    if (this.fondo.detectarZonaR()) {
      if (!musica.isPlaying()) {
        musica.play();
      }

      pantalla = 1;
      boton.play();
    }

  } else if (pantalla === 1) {

    if (this.fondo.detectarZonaR()) {
      pantalla = 2;
      tiempo = millis();
      boton.play();
    }

  } else if (pantalla === 3 || pantalla === 4) {

    if (this.fondo.detectarZonaR()) {
      pantalla = 5;
      boton.play();
    }

  } else if (pantalla === 5) {

    if (this.fondo.detectarZonaR()) {
      this.reiniciarJuego();
      boton.play();
      musica.stop();
    }

  }
}

}
