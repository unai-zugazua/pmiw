let knucklescam = [];
let knuckles = [];
let knucklescorre = [];
let fondo;
let ring = [];
let ringX = 740;  
let ringY = 40;  

let posX, posY;
let estado = 0;  
let fondoX = 0;

let tiempoMirando = 0;  
let tiempoCorriendo = 0; 

let ultimoCambioFrame = 0;
let indiceAnimacion = 0;

function preload() {
  for (let i = 0; i < 16; i++) {
    ring[i] = loadImage("data/anillo_" + i + ".png");
  }
  
  fondo = loadImage("data/fondo.png");
  
  for (let i = 0; i < 17; i++) {
    knucklescam[i] = loadImage("data/cam_" + i + ".png");
  }
  
  for (let i = 0; i < 4; i++) {
    knuckles[i] = loadImage("data/arriba_" + i + ".png");
  }
  
  for (let i = 0; i < 10; i++) {
    knucklescorre[i] = loadImage("data/corre_" + i + ".png");
  }
}

function setup() {
  createCanvas(800, 600);
  posX = -50;  
  posY = 400;
  estado = 0;
  fondoX = 0;
}

function draw() {
  background(150, 200, 255);  
  
  imageMode(CORNER);
  image(fondo, fondoX, 0, 800, 600);
  image(fondo, fondoX + 800, 0, 800, 600);
  
  if (estado === 0) {
    posX = posX + 4;
    
    if (posX >= width / 2) {
      posX = width / 2;  
      estado = 1;  
      tiempoMirando = millis(); 
    }
    
  } else if (estado === 1) {
    if (millis() - tiempoMirando > 2000) { 
      estado = 2;  
      tiempoCorriendo = millis(); 
    }
    
  } else if (estado === 2) {
    fondoX = fondoX - 15;  
    
    if (fondoX <= -800) {
      fondoX = 0;
    }
  }

  imageMode(CENTER);
  if (estado === 0) {
    reproducirAnimacion(knucklescam, 100); 
  } else if (estado === 1) {
    reproducirAnimacion(knuckles, 200);    
  } else if (estado === 2) {
    reproducirAnimacion(knucklescorre, 50); 
  }
  
  if (estado === 2 && (millis() - tiempoCorriendo > 1000)) {
    let indiceRing = calcularFrameMillis(ring.length, 100); 
    image(ring[indiceRing], ringX, ringY, 50, 50);
  }
}

function calcularFrameMillis(totalFrames, intervaloMs) {
  if (millis() - ultimoCambioFrame > intervaloMs) {
    indiceAnimacion = (indiceAnimacion + 1) % totalFrames;
    ultimoCambioFrame = millis();
  }
  return indiceAnimacion;
}

function reproducirAnimacion(arreglo, velocidadMs) {
  let indice = calcularFrameMillis(arreglo.length, velocidadMs);
  image(arreglo[indice], posX, posY, 120, 120);  
}

function mousePressed() {
  if (estado === 2 && (millis() - tiempoCorriendo > 1000)) {
    let d = dist(mouseX, mouseY, ringX, ringY);
    
    if (d < 30) {
      posX = -50;
      estado = 0;  
      fondoX = 0;
    }
  }
}
