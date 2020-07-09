class Wall {
  constructor() {

  }

  draw() {
    rect(0, 0, 1, height / SCALE);
    rect(0, 0, width / SCALE, 1);
    rect(width / SCALE -1, 0, 1, height / SCALE);
    rect(0, height / SCALE -1, width / SCALE, 1);
  }
}