//Unai Zugazua YouTube:https://youtu.be/sa76FHE4N9s

let creditos;
let juego;
let caballoCorre = [];
let caballoSalta = [];
let corazones = [];
let planta;
let pantalla;
let instrucciones;
let derrota;
let victoria;
let tiempo;
let tiempoTranscurrido;
let boton;
let musica;
let miFuente;
let pajaro = [];
function preload(){
  creditos = loadImage("data/creditos.jpeg");
  corazones[3] = loadImage("data/corazones3.png");
  corazones[2] = loadImage("data/corazones2.png");
  corazones[1] = loadImage("data/corazones1.png");
  corazones[0] = loadImage("data/corazones0.png");
  portada = loadImage("data/Titulo.jpeg");
  fondo = loadImage("data/fondoart.jfif");
  instrucciones = loadImage("data/instrucciones.jpg");
  derrota = loadImage("data/derrota.jfif");
  victoria = loadImage("data/victoria.jfif");
  planta =loadImage("data/cactus.png");
  boton = loadSound("data/boton.mp3");
  musica = loadSound("data/CazaDiscreta.mp3");
  miFuente = loadFont("data/Argentina.ttf");
  
   for (let i = 0; i < 4; i++) {
    pajaro[i] = loadImage("data/ave-" + i + ".png");
  }
   
   for (let i = 0; i < 6; i++) {
    caballoCorre[i] = loadImage("data/GalopeCaballo-" + i + ".png");
  }

  for (let i = 0; i < 7; i++) {
    caballoSalta[i] = loadImage("data/saltoCaballo-" + i + ".png");
  }

}

function setup() {
createCanvas(800, 400);
pantalla = 0 ;
textFont(miFuente); 
imageMode(CORNER);
  
juego=new Principal();
}

function draw() {
  
  background(100);
  juego.dibujar();
  musica.amp(0.2);
  
}
  
function keyPressed() {
  
  if (pantalla === 2) {
    juego.saltar();
  }
  
}
function mousePressed() {

 juego.detectarClic();
 
}
