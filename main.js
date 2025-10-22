let colors = ["#1c80b4", "#fcad2a", "#f82f1d"];
let grid = 6;
let boxes = [];

function setup() {
  createCanvas(1800, 1800);

  background("#f3f3f3ff");
  noStroke();

  for (let y = height / grid / 2; y < height; y += height / grid) {
    for (let x = 0; x < width; x += width / grid) {
      let c = colors[(x / (width / grid) + floor(y / (height / grid))) % 3];
      boxes.push(new Box(x, y, c));
    }
  }
}

function draw() {
  boxes.forEach((box) => {
    box.show();
    box.move();
    if (random(1) < 0.01) box.speed = 1;
  });
}

class Box {
  constructor(x, y, color) {
    this.start = x;
    this.x = x;
    this.y = y;
    this.speed = 0;
    this.size = height / grid / 2;
    this.color = color;
  }

  show() {
    fill("#333333");
    square(this.x - 1, this.y + 1, this.size);
    fill(this.color);
    square(this.x, this.y, this.size);
  }

  move() {
    if (this.x < this.start + this.size) {
      this.x += this.speed;
      this.y -= this.speed;
    }
  }
}