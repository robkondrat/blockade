const SCALE = 20;
let player;
let wall;
let ai;

function setup() {
  createCanvas(500, 500);
  player = new Player(15, 15, 0, -1);
  wall = new Wall();
  ai = new AI();
}

function draw() {
  scale(SCALE);
  frameRate(4);
  background(0);

  player.update();
  player.draw();

  ai.move();
  ai.update();
  ai.draw();

  wall.draw();
}

function keyPressed() {
  if (keyCode === UP_ARROW || keyCode === 87) {
    if (player.ySpeed != 1) {
      player.setSpeed(0, -1);
    }
  } else if (keyCode === LEFT_ARROW || keyCode === 65) {
    if (player.xSpeed != 1) {
      player.setSpeed(-1, 0);
    }
  } else if (keyCode === RIGHT_ARROW || keyCode === 68) {
    if (player.xSpeed != -1) {
      player.setSpeed(1, 0);
    }
  } else if (keyCode === DOWN_ARROW || keyCode === 83) {
    if (player.ySpeed != -1) {
      player.setSpeed(0, 1);
    }
  }
}