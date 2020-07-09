class Player {

  constructor(x, y, xSpeed, ySpeed) {
    this.startX = x;
    this.startY = y;
    this.startXSpeed = xSpeed;
    this.startYSpeed = ySpeed;
    this.reset(x, y);
    this.score = 0;
  }

  reset() {
    this.body = [];

    this.body[0] = createVector(this.startX, this.startY);

    this.xSpeed = this.startXSpeed;
    this.ySpeed = this.startYSpeed;

    this.displayScoreTime = 4;
  }

  update() {
    this.body.push(createVector(this.body[this.body.length-1].x + this.xSpeed, this.body[this.body.length-1].y + this.ySpeed));
  }

  setSpeed(x, y) {
    this.xSpeed = x;
    this.ySpeed = y;
  }

  draw() {
    for(let i = 0; i < this.body.length; i++) {
      fill(0, 255, 0);
      noStroke();

      rect(this.body[i].x, this.body[i].y, 1, 1);
    }
  }
}