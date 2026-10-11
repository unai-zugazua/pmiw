//woollands Tomas 85190/6 -  Zugazua Unai 122956/4
//https://youtu.be/5qDKvVmkZQw
//https://youtu.be/cDWmjdFHEnU
let boton;
let MargenTexto;
let parrafo =[];
let texto;
let miFuente;
let pantalla;
let titulo, intro;
let imagenes = [];
let tono,cuenta;

// Botón inicial
let posXBotonI, posYBotonI;

// Botones de la pantalla 
let posXBoton1, posYBoton1;
let posXBoton2, posYBoton2;

let tamXBoton, tamYBoton;


function preload() {

  miFuente = loadFont("data/BroncoPersonalUse.ttf");
  texto = loadStrings("data/1.txt");  
  titulo = loadImage("data/portadadeprueba.jpeg");
  boton = loadSound("data/boton.mp3");
  
  
  for (let i=1; i<19; i++) {
    imagenes[i] = loadImage("data/"+i+".jpeg");
  }
}


function setup() {
   
  createCanvas(800, 450);  
  parrafos = texto.join("\n").split("---");
  textFont(miFuente); 
  imageMode(CENTER, CENTER);

  // BOTÓN INICIAR
  posXBotonI = 350;
  posYBotonI = 350;

  // BOTÓN 1
  posXBoton1 = 250;
  posYBoton1 = 350;

  // BOTÓN 2
  posXBoton2 = 450;
  posYBoton2 = 350;

  tamXBoton = 100;
  tamYBoton = 50;

  pantalla = 0;
  
  tono = 3;
  cuenta = 1;
  
  MargenTexto = 10;
}


function draw() {

  background(0);
  boton.amp(0.2);


  // PANTALLA 0  
  if (pantalla == 0) {

    image(titulo, width/2, height/2, width, height);
    

    dibujarBoton(posXBotonI,posYBotonI,tamXBoton,tamYBoton,"INICIAR");

  }
  
  // PANTALLA 1 

  else if (pantalla == 1) {

    image(imagenes[1], width/2, height/2, width, height);
   
    dibujarTexto(texto[0], 50, 50, 700, 110);
    dibujarBoton(posXBotonI,posYBotonI,tamXBoton,tamYBoton,"SIGUIENTE");   

  }

  
  // PANTALLA 2

   else if (pantalla == 2) {

    background(100);
    
    image(imagenes[2], width/2, height/2, width, height);
   
   dibujarTexto(parrafos[1], 50, 50, 700, 110);
   
     dibujarBoton(posXBoton1,posYBoton1,tamXBoton,tamYBoton,"HABLAR");
     dibujarBoton(posXBoton2,posYBoton2,tamXBoton,tamYBoton,"HUIR");
  }
  
  // PANTALLA 3 HABLAR 
 
  else if (pantalla == 3) {

    background(150);
    
    image(imagenes[3], width/2, height/2, width, height);
    
    dibujarTexto(parrafos[2], 50, 50, 700, 110);
    
    dibujarBoton(posXBotonI,posYBotonI,tamXBoton,tamYBoton,"SIGUIENTE")
    
  }
  
  // PANTALLA  4  (3b) (huir)
  
  else if (pantalla == 4) {

  
image(imagenes[4], width/2, height/2, width, height);

    dibujarTexto(parrafos[7], 50, 50, 700, 75);
  
   dibujarBoton(posXBoton1,posYBoton1,tamXBoton,tamYBoton,"A PIE");
   dibujarBoton(posXBoton2,posYBoton2,tamXBoton,tamYBoton,"A CABALLO");
 }
 //PANTALLA 5  (4) duelo
 
 else if (pantalla == 5) {

  
image(imagenes[5], width/2, height/2, width, height);

  dibujarTexto(parrafos[3], 50, 50, 700, 110);
  dibujarBoton(posXBotonI,posYBotonI,tamXBoton,tamYBoton,"SIGUIENTE")
 
 
 }
 // moreno tiene la ventaja
 else if (pantalla == 6) {

  
image(imagenes[6], width/2, height/2, width, height);

dibujarTexto(parrafos[4], 50, 50, 700, 110);
  
 dibujarBoton(posXBoton1,posYBoton1,tamXBoton + 50,tamYBoton,"MORIR CON HONOR");
 dibujarBoton(posXBoton2,posYBoton2,tamXBoton + 50,tamYBoton,"HACER TRAMPA");
 
 
 }
 // EL MORENO VENCE
 else if (pantalla == 7) {

  
image(imagenes[7], width/2, height/2, width, height);

 dibujarTexto(parrafos[5], 50, 50, 700, 110);
  
 dibujarBoton(posXBotonI,posYBotonI,tamXBoton,tamYBoton,"SIGUIENTE");
 
 
 
 }
 //5c (trampa)
 else if (pantalla == 8) {

  
image(imagenes[11], width/2, height/2, width, height);

   dibujarTexto(parrafos[13], 50, 50, 700, 110);
  
   dibujarBoton(posXBotonI,posYBotonI,tamXBoton,tamYBoton,"SIGUIENTE");
  
 }
 //PANTALLA 9  (6) primer original
 else if (pantalla == 9) {

  
 image(imagenes[8], width/2, height/2, width, height);

 dibujarTexto(parrafos[6], 50, 50, 700, 110);
  
 dibujarBoton(posXBotonI,posYBotonI,tamXBoton,tamYBoton,"CREDITOS");
 
 
 }
 //huir a caballo (4C)
 
 else if (pantalla == 11) {

  
image(imagenes[9], width/2, height/2, width, height);

  dibujarTexto(parrafos[9], 50, 220, 700, 110);
  
  dibujarBoton(posXBotonI,posYBotonI,tamXBoton,tamYBoton,"SIGUIENTE");
 }
 //MORENO INTERCEPTA A MARTIN
 else if (pantalla == 19) {

  image(imagenes[15], width/2, height/2, width, height);
  
  dibujarTexto(parrafos[8], 50, 50, 700, 110);
  
  dibujarBoton(posXBotonI,posYBotonI,tamXBoton,tamYBoton,"SIGUIENTE");
  
 }
 
 //FINAL ALTERNATIVO camino de la derecha (5d)
 
 else if (pantalla == 13) {

  
image(imagenes[10], width/2, height/2, width, height);

  dibujarTexto(parrafos[12], 50, 50, 700, 110);
  
  dibujarBoton(posXBotonI,posYBotonI,tamXBoton,tamYBoton,"CREDITOS");
 }
 // sale la gente de la pulperia
 else if (pantalla == 15) {

  
  image(imagenes[12], width/2, height/2, width, height);
  
  dibujarTexto(parrafos[14], 50, 50, 700, 110);
  
  dibujarBoton(posXBoton1,posYBoton1,tamXBoton ,tamYBoton,"huir");
  dibujarBoton(posXBoton2,posYBoton2,tamXBoton ,tamYBoton,"quedarse");
 }
  // toma de rehen al moreno
else if (pantalla == 16) {

  
image(imagenes[14], width/2, height/2, width, height);

  dibujarTexto(parrafos[15], 50, 50, 700, 110);

  dibujarBoton(posXBotonI,posYBotonI,tamXBoton,tamYBoton,"siguiente");
  
 }  
  
 else if (pantalla == 17) {

  
image(imagenes[13], width/2, height/2, width, height);

  dibujarTexto(parrafos[16], 50, 50, 700, 110);

  dibujarBoton(posXBotonI,posYBotonI,tamXBoton,tamYBoton,"CREDITOS");
  
 }
// elige el camino de la izquierda
 else if (pantalla == 12) {

  
image(imagenes[16], width/2, height/2, width, height);

  dibujarTexto(parrafos[11], 50, 50, 700, 110);
  
  dibujarBoton(posXBotonI,posYBotonI,tamXBoton,tamYBoton,"SIGUIENTE");
  
 }
 // elegir que camino tomar
 else if (pantalla == 20) {

  
image(imagenes[17], width/2, height/2, width, height);

  dibujarTexto(parrafos[10], 50, 230, 700, 110);

  dibujarBoton(posXBoton1,posYBoton1,tamXBoton ,tamYBoton,"izquierda");
  dibujarBoton(posXBoton2,posYBoton2,tamXBoton ,tamYBoton,"derecha");
 }
 
 else if (pantalla == 18) {

  image(imagenes[18], width/2, height/2, width, height);

  efectoRespiracion();  
  textSize(60);
  text("Woollands Tomas",width/2, 150);
  textSize(60);
  text("Zugazua Unai",width/2,200);
  
  dibujarBoton(posXBotonI,posYBotonI,tamXBoton,tamYBoton,"Volver");
  
 }
 
}


function efectoRespiracion() {

  if (tono > 255 || tono < 1) {
    cuenta *= -1;
  }

  tono += cuenta;

  fill(0, 0, 155, tono);
}

function dibujarBoton(x, y, tamX, tamY, nombre) {

  if (detectarZonaR(x, y, tamX, tamY)) {
    fill(77, 39, 0);

  } else {
    fill(255, 168, 80);

  }

  rect(x, y, tamX, tamY, tamY/4);
  textSize(tamY/2);
  textAlign(CENTER, CENTER);

  fill(255);

  text(nombre, x+tamX/2, y+tamY/2);
}


function detectarZonaR(x, y, tamX, tamY) {

  if (mouseX > x && mouseX < x+tamX && mouseY > y && mouseY < y+tamY) {

    return true;

  } else {

    return false;

  }

}

function dibujarTexto(texto, x, y, ancho, alto) {

  // Rectángulo de fondo
  rectMode(CORNER);
  noStroke();
  fill(0, 180); // Negro con transparencia
  rect(x - MargenTexto, y - MargenTexto, ancho + MargenTexto,alto + MargenTexto);

  // Texto del párrafo
  fill(255);
  textAlign(LEFT, TOP);
  textSize(15);
  text(texto, x, y, ancho, alto);
}


function mouseClicked() {  
  // BOTÓN INICIAR
  if (pantalla == 0) {

    if (detectarZonaR(posXBotonI,posYBotonI,tamXBoton,tamYBoton)) {

      pantalla = 1;

    }

  }
  
  // BOTONES DE LA PANTALLA 1 

  else if (pantalla == 1) {

    // BOTÓN 1 VA PANTALLA 2
    if (detectarZonaR(posXBotonI,posYBotonI,tamXBoton,tamYBoton)) {

      pantalla = 2;

    }
  }

// PANTALLA 2
else if (pantalla == 2) {

    // BOTÓN 1 VA A LA PANTALLA 3
    if (detectarZonaR(posXBoton1, posYBoton1, tamXBoton, tamYBoton)) {
      pantalla = 3;
    }

    // BOTÓN 2 VA A LA PANTALLA 4
    else if (detectarZonaR(posXBoton2, posYBoton2, tamXBoton, tamYBoton)) {
      pantalla = 4;
    }

  }
else if (pantalla == 3) {
  
  if (detectarZonaR(posXBotonI,posYBotonI,tamXBoton,tamYBoton)) {

      pantalla = 5;

    }
}

else if (pantalla == 4) {
  
  if (detectarZonaR(posXBoton1, posYBoton1, tamXBoton, tamYBoton)) {

      pantalla = 19;
    }    
    else if (detectarZonaR(posXBoton2, posYBoton2, tamXBoton, tamYBoton)) {
      pantalla = 11;
    }
}
else if (pantalla == 5) {
  
  if (detectarZonaR(posXBotonI,posYBotonI,tamXBoton,tamYBoton)) {

      pantalla = 6;

    }
}
else if (pantalla == 6) {

    // BOTÓN 1 VA A LA PANTALLA 7 (5)
    if (detectarZonaR(posXBoton1, posYBoton1, tamXBoton + 50, tamYBoton)) {
      pantalla = 7;
    }

    // BOTÓN 2 VA A LA PANTALLA 8 (5c)
    else if (detectarZonaR(posXBoton2, posYBoton2, tamXBoton + 50 , tamYBoton)) {
      pantalla = 8;
    }

 }
 else if (pantalla == 7) {
  
  if (detectarZonaR(posXBotonI,posYBotonI,tamXBoton,tamYBoton)) {

      pantalla = 9;

    }
   }
    //(5c)(hacer trampa)
    else if (pantalla == 8) {
  
  if (detectarZonaR(posXBotonI,posYBotonI,tamXBoton,tamYBoton)) {

      pantalla = 15;

    }
 }

else if (pantalla == 9) {
  
  if (detectarZonaR(posXBotonI,posYBotonI,tamXBoton,tamYBoton)) {

      pantalla = 18;

    }
 }

 //HISTORIA ALTERNATIVA 
 else if (pantalla == 4) {

    // BOTÓN 1 VA A LA PANTALLA 7 (5)
    if (detectarZonaR(posXBoton1, posYBoton1, tamXBoton + 50, tamYBoton)) {
      pantalla = 10;
    }

    // BOTÓN 2 VA A LA PANTALLA 8 (5c)
    else if (detectarZonaR(posXBoton2, posYBoton2, tamXBoton + 50 , tamYBoton)) {
      pantalla = 11;
    }
}
 else if (pantalla == 11) {

    if (detectarZonaR(posXBotonI,posYBotonI,tamXBoton,tamYBoton))
    pantalla = 20;
 }
 
 else if (pantalla == 12) {

    //  ()
    if  (detectarZonaR(posXBotonI,posYBotonI,tamXBoton,tamYBoton)){
      pantalla = 5;
    } 
   }

  
  else if (pantalla == 15) {

    //  ()
    if (detectarZonaR(posXBoton1, posYBoton1, tamXBoton, tamYBoton)) {
      pantalla = 16;
    }

    // BOTÓN 2 VA AL FINAL ALTERNATIVO ()
    else if (detectarZonaR(posXBoton2, posYBoton2, tamXBoton, tamYBoton)) {
      pantalla = 17;
    }
 }
 
else if (pantalla == 16) {

    // FINAL ALTERNATIVO ()
    if (detectarZonaR(posXBotonI,posYBotonI,tamXBoton,tamYBoton)) {
      pantalla = 13;
    } 
}

else if (pantalla == 17) {

    // FINAL ALTERNATIVO ()
    if (detectarZonaR(posXBotonI,posYBotonI,tamXBoton,tamYBoton)) {
      pantalla = 18; //CREDITOS
    } 
}

else if (pantalla == 13) {

    // FINAL ALTERNATIVO ()
    if (detectarZonaR(posXBotonI,posYBotonI,tamXBoton,tamYBoton)) {
      pantalla = 18; //CREDITOS
    } 
}

else if (pantalla == 18) {

    // PORTADA ()
    if (detectarZonaR(posXBotonI,posYBotonI,tamXBoton,tamYBoton)) {
      pantalla = 0; //CREDITOS
    } 
}

else if (pantalla == 19) {

    // FINAL ALTERNATIVO ()
    if (detectarZonaR(posXBotonI,posYBotonI,tamXBoton,tamYBoton)) {
      pantalla = 5; 
    } 
 }

else if (pantalla == 20) {

    //  () vuelve a la pulperia
    if (detectarZonaR(posXBoton1, posYBoton1, tamXBoton, tamYBoton)) {
      pantalla = 12;
    }

    // BOTÓN 2 VA AL FINAL ALTERNATIVO ()
    else if (detectarZonaR(posXBoton2, posYBoton2, tamXBoton, tamYBoton)) {
      pantalla = 13;
    }
 }
// sonido botones 
 if (detectarZonaR(posXBoton2, posYBoton2, tamXBoton, tamYBoton)){
   boton.play();
 }
 else if (detectarZonaR(posXBoton1, posYBoton1, tamXBoton, tamYBoton)) {
     boton.play();     
 }
 else if (detectarZonaR(posXBotonI,posYBotonI,tamXBoton,tamYBoton)) {
     boton.play();
 }
}
