let recMode = false;
let xspacing = 15; // Distance between each horizontal location
let w; // Width of the entire wave
let theta = 0.0; // Start angle at 0
let amplitude = 75.0; // Height of the wave
let period = 500.0; // How many pixels before the wave repeats
let dx; // Value for incrementing x
let yvalues; // Using an array to store height values for the wave
let numMovingElements = 5; // Number of moving elements
let movingElements = [];

let x1, x2; // x-coordinates for the double helix
let counter = 0;
let counter1 = 0;
let counter2 = 0;
let speedX;
let loX;

let can; // Create a canvas reference
let act = 1; // Act counter

// Define the Particle class and particle array
class Particle {
  constructor() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.r = random(1, 8);
    this.xSpeed = random(-2, 2);
    this.ySpeed = random(-1, 1.5);
  }

  createParticle() {
    noStroke();
    fill('rgba(200, 169, 169, 0.5)');
    circle(this.x, this.y, this.r);
  }

  moveParticle() {
    if (this.x < 0 || this.x > width)
      this.xSpeed *= -1;
    if (this.y < 0 || this.y > height)
      this.ySpeed *= -1;
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  joinParticles(particles) {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        let particleA = particles[i];
        let particleB = particles[j];
        let distance = dist(particleA.x, particleA.y, particleB.x, particleB.y);

        if (distance < 85) {
          stroke('rgba(255, 255, 255, 0.04)');
          line(particleA.x, particleA.y, particleB.x, particleB.y);
        }
      }
    }
  }
}

let particles = [];

function setup() {
  can = createCanvas(710, 500); // Adjust the canvas size
  background(20);
  fill(255);
  frameRate(10);
  w = width + 20;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w / xspacing));
  x1 = width; // Starting position for x1 at the upper right corner
  x2 = 0; // Starting position for x2 at the bottom left corner
  loX = height / 2;
  speedX = 3; // Horizontal speed
  angleMode(DEGREES);

  for (let i = 0; i < numMovingElements; i++) {
    let element = {
      x: width + random(20, 100),
      y: random(height),
      speed: random(2, 4),
    };
    movingElements.push(element);
  }

  // Create particles for Act 1
  for (let i = 0; i < width / 10; i++) {
    particles.push(new Particle());
  }


}

function draw() {
  background(0, 50);

  if (frameCount < 150) {
    if (act !== 1) {
      console.log("Transitioning to the first act");
      act = 1;
    }
    moveMovingElements();
    for (let i = 0; i < particles.length; i++) {
      particles[i].createParticle();
      particles[i].moveParticle();
      particles[i].joinParticles(particles);
    }
  } else if (frameCount < 300) {
    if (act !== 2) {
      console.log("Transitioning to the second act");
      act = 2;
    }
    drawDNABranch();
  } else {
    if (act !== 3) {
      console.log("Transitioning to the third act");
      act = 3;
    }
    drawSineWave();
  }

  // Counter updates
  counter1 += 0.4;
  counter2 += 0.35;

  // Record function
  recordit();
}

function moveMovingElements() {
  for (let i = 0; i < numMovingElements; i++) {
    movingElements[i].x -= movingElements[i].speed;

    if (movingElements[i].x < -xspacing) {
      movingElements[i].x = width;
    }
  }
}

function drawSineWave() {
  calcWave();
  renderWave();
}

function calcWave() {
  theta += 0.02;

  let x = theta;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * amplitude;
    x += dx;
  }
}

function renderWave() {
  noFill();
  stroke(255);
  strokeWeight(2);

  for (let x = 0; x < yvalues.length; x++) {
    let yOffset = yvalues[x];
    let x1 = x * xspacing;
    let y1 = height / 2 + yOffset;
    let x2 = x1 + 10;
    let y2 = height / 2 - yOffset;

    line(x1, y1, x2, y2);
    ellipse(x1, y1, 20, 20);
    ellipse(x2, y2, 20, 20);
  }
}

function drawDNABranch() {
  let numSegments = 100;
  let segmentLength = 10;
  let angleIncrement = 5;

  noFill();
  stroke(255);
  strokeWeight(2);

  for (let j = 0; j < 360; j += 60) {
    for (let i = 0; i < numSegments; i++) {
      let x1 = width / 2 + cos(counter1 + i * angleIncrement + j) * i * 2;
      let y1 = height - i * segmentLength;
      let x2 = width / 2 + cos(counter1 + (i + 1) * angleIncrement + j) * (i + 1) * 2;
      let y2 = height - (i + 1) * segmentLength;

      line(x1, y1, x2, y2);
    }
  }
}

function recordit() {
  if (recMode == true) {
    let ext = nf(frameCount, 4);
    saveCanvas(can, 'frame-' + ext, 'jpg');
    console.log("rec " + ext);
  }
}

function keyPressed() {
  if (keyIsPressed === true) {
    let k = key;
    console.log("k is " + k);

   


    if (k == 's' || k == 'S') {
      console.log("Stopped Recording");
      recMode = false;
      noLoop();
    }

    if (k == ' ') {
      console.log("Start Recording");
      recMode = true;
      loop();
    }

    key = "";
  }
}

