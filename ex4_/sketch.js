let count = 15;
let spacePups = [];


function setup() {
  createCanvas(600, 600);
  noStroke();

  for (let i = 0; i < count; i++) {
    let pupClass = (i % 2 === 0) ? ltSpacePup : ltSpacePup2;

    //SPACE PUP CLASS
    spacePups[i] = new pupClass(
      color(0, 0, random(200)),
      random(50, width - 50),
      random(50, height - 50),
      random(0, 360), // Random initial rotation
      random(0.2, 2) // Random initial scale
    );
  }
}

function draw() {
  background(70);
  fill(255, 100);
  rect(40, 40, width - 80, height - 80);

  for (let i = 0; i < spacePups.length; i++) {
    spacePups[i].display();
    spacePups[i].move();

    if (frameCount % 500 === 0) {
      let pupClass = (i % 2 === 0) ? ltSpacePup2 : ltSpacePup;
      spacePups[i] = new pupClass(
        color(0, 0, random(200)),
        random(50, width - 50),
        random(50, height - 50),
        random(0, 360), // Random initial rotation
        random(0.2, 2) // Random initial scale
      );
    }
  }
}

//MY CLASSES
class ltSpacePup {
  constructor(k, lx, ly, rot, sc) {
    this.k = k;
    this.lx = lx;
    this.ly = ly;
    this.rot = rot;
    this.sc = sc;
  }
//SPACE DOG #1
  display() {
    push();
    translate(this.lx, this.ly);
    rotate(this.rot);
    scale(this.sc);

    //setting stroke color and thickness
    stroke(0); //black stroke
    strokeWeight(2); //adjusting the thickness 

    body(this.k);
    head(this.k, 20, -15);
    arm(this.k, 0, 5);
    arm(this.k, 40, 10);
    cap(this.k, 60, -20);
    tail(this.k, 68, -10);
    pop();
  }

  move() {
    this.lx += random(-3, 3);
    this.ly += random(-3, 3);

    if (this.lx < 40) {
      this.lx = 40;
    } else if (this.lx > width - 40) {
      this.lx = width - 40;
    }
    if (this.ly < 40) {
      this.ly = 40;
    } else if (this.ly > height - 40) {
      this.ly = height - 40;
    }
  }
}

class ltSpacePup2 {
  constructor(k, lx, ly, rot, sc) {
    this.k = k;
    this.lx = lx;
    this.ly = ly;
    this.rot = rot;
    this.sc = sc;
  }
//SPACE DOG #2
  display() {
    push();
    translate(this.lx, this.ly);
    rotate(this.rot);
    scale(this.sc);

    //adding stroke color + thickness
    stroke(0); //black stroke
    strokeWeight(2); // thickness

    body2(this.k);
    head2(this.k, 20, -15);
    arm2(this.k, 0, 5);
    arm2(this.k, 40, 10);
    backpack2(this.k, 35, -25);
    sunglasses(20, -20);
    tail2(this.k, 68, -10);
    pop();
  }

  move() {
    this.lx += random(-3, 3);
    this.ly += random(-3, 3);

    if (this.lx < 40) {
      this.lx = 40;
    } else if (this.lx > width - 40) {
      this.lx = width - 40;
    }
    if (this.ly < 40) {
      this.ly = 40;
    } else if (this.ly > height - 40) {
      this.ly = height - 40;
    }
  }
}

// Define your functions (body, head, arm, tail, etc.) for both classes
function body(k) {
  fill(224, 207, 119);
  ellipse(40, 0, 60, 40, 15, 15, 25, 25);
}

function head(c, lx, ly) {
  push();
  fill(224, 207, 119);
  translate(lx, ly);
  ellipse(0, 0, 40, 40);
  fill(0, 0, 0);
  ellipse(-9, -5, 8, 8);
  ellipse(9, -5, 8, 8);
  fill(255, 255, 255);
  ellipse(-9, -6, 5, 5);
  ellipse(9, -6, 5, 5);
  fill(107, 91, 91);
  ellipse(0, 3, 5, 5);
  fill(224, 207, 119);
  ellipse(-15, -15, 15, 15);
  ellipse(15, -15, 15, 15);
  fill(255, 255, 255, 100);
  ellipse(0, -5, 70, 70);
  pop();
}

function arm(c, lx, ly) {
  fill(224, 207, 119);
  rect(lx, ly, 20, 15, 10);
}

function tail(c, lx, ly) {
  fill(224, 207, 119);
  rect(lx, ly, 15, 8, 10);
}

function body2(k) {
  fill(125, 96, 55);
  ellipse(40, 0, 60, 40, 15, 15, 25, 25);
}

function head2(c, lx, ly) {
  push();
  fill(125, 96, 55);
  translate(lx, ly);
  ellipse(0, 0, 40, 40);
  fill(0, 0, 0);
  ellipse(-9, -5, 8, 8);
  ellipse(9, -5, 8, 8);
  fill(255, 255, 255);
  ellipse(-9, -6, 5, 5);
  ellipse(9, -6, 5, 5);
  fill(107, 91, 91);
  ellipse(0, 3, 5, 5);
  fill(125, 96, 55);
  ellipse(-15, -15, 15, 15);
  ellipse(15, -15, 15, 15);
  fill(255, 255, 255, 100);
  ellipse(0, -5, 70, 70);
  pop();
}

function arm2(c, lx, ly) {
  fill(125, 96, 55);
  rect(lx, ly, 20, 15, 10);
}

function tail2(c, lx, ly) {
  fill(125, 96, 55);
  rect(lx, ly, 15, 8, 10);
}

function backpack2(k, lx, ly) {
  // Draw the backpack here
  push();
  translate(lx, ly);
  fill(120, 160, 210); // You can choose your desired backpack color
  rect(0, 0, 40, 20); // Adjust the dimensions and position as needed
  fill(0); // Draw backpack details (e.g., pockets, straps, etc.)
  rect(5, 5, 10, 10);
  rect(25, 5, 10, 10);
  pop();
}

function sunglasses(lx, ly) {
  push();
  translate(lx, ly);
  fill(0, 0, 0, 150); // Frame color
  rect(-15, -5, 20, 0); // Sunglasses frame

  fill(0, 0, 0, 150); // Lens color
  ellipse(-10, 0, 15, 15); // Left lens
  ellipse(10, 0, 15, 15); // Right lens

  pop();
}

function cap(lx, ly, rotation) {
  push();
  rotate(radians(rotation));
  translate(lx, ly);
  fill(255, 0, 0); // Cap color (adjust as needed)
  rect(-15, -10, 30, 10); // Cap shape
  fill(255); // Cap details (e.g., logo, design, etc.)
  textSize(12);
  textAlign(CENTER, CENTER);
  text("SP", 0, 0); // Example text or design
  pop();
}
