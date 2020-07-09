const SCALE = 20;
let player;

function setup() {
  createCanvas(400, 400);
  player = new Player(15, 15, 0, -1);
}

function draw() {
  scale(SCALE);
  frameRate(4);
  background(0);

  player.update();
  player.draw();
}