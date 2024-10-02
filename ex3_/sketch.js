let counter = 10;
let speedX2;
let speedY2;
let loX2;
let loY2;
let spacePupsX;
let spacePupsDirection = 1; // 1 for right, -1 for left
let spaceshipImage;
let scaleFactor = .5;
let rotationAngle = 0;
let xTranslation = 250;
let yTranslation = 250;
let spaceshipX = 50;
let spaceshipY = 50;
let x;
let y;
let stationaryStars = []; // Array to store stationary stars

function preload(){
  spaceshipImage = loadImage("assets/image_example/Spaceship-Transparent.png");
}

function setup() {
  createCanvas(500, 500);
  background(20);
  fill(255);
  angleMode(DEGREES);

  speedX2 = random(-4, 4);
  speedY2 = 2 - random(4);
  loX2 = height / 2;
  loY2 = width / 2;
  spacePupsX = width / 2 + 30; // Initial x-coordinate for lylsSpacePups

   // Add stationary stars to the array
   for (let i = 0; i < 5; i++) {
    let x = random(width);
    let y = random(height);
    stationaryStars.push({ x, y, size: random(2, 5), color: color(random(255), random(255), random(255)) });
  }

  // Create a starry background
  for (let i = 0; i < 100; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(1, 4);
    let starColor = color(random(255), random(255), random(255));
    stationaryStars.push({ x, y, size, color: starColor });
  }

}

function draw() {
  background(0);

   // Draw stationary stars
   for (let star of stationaryStars) {
    fill(star.color);
    ellipse(star.x, star.y, star.size, star.size);
  }

   // Create a starry background
   for (let i = 0; i < 100; i++) {
    fill(255, 255, 0); // Yellow color
    let x = random(width); // Random x-coordinate
    let y = random(height); // Random y-coordinate
    ellipse(x, y, 3, 3); // Draw a small yellow circle as a star
  }

  deathstar(100, 300, -45, 0.75);
  deathstar(350, 120, counter, 0.5);
  lylsSpacePups(color(0, 0, random(200)), spacePupsX, height / 2, -10, 0.6);
  lylsSpacePups2(color(200, 20, 20), 100, 90, 15, 1);

  counter += 0.5;
  
  if (counter > height) {
    counter = 0;
  }

  if (loX2 < 0 || loX2 > width) {
    speedX2 *= -1; // Reverse X-direction if the ball hits the left or right edge
  }
  if (loY2 < 0) {
    loY2 = height;
  }
  if (loY2 > height) {
    loY2 = 0;
  }

  // position of the ball
  loX2 += speedX2;
  loY2 += speedY2;
  fill(255);
  ellipse(loX2, loY2, 10, 10);


  //applying transformations 
  translate(xTranslation, yTranslation);
  rotate(radians(rotationAngle));
  scale(scaleFactor);

  //draw spaceship using the function
  drawSpaceship(spaceshipImage, spaceshipX, spaceshipY);
}

// keyPress for the moving spaceship
function keyPressed() {
  if (key === 'R' || key === 'r') {
    rotationAngle += 45;
  } else if (key === 'S' || key === 's') {
    scaleFactor += 0.05;
  } else if (key === 'T' || key === 't') {
    scaleFactor -= 0.05;
  } else if (key === 'M' || key === 'm') {
    xTranslation += 5;
  } else if (key === 'N' || key === 'n') {
    yTranslation += 5;
  }
}

//MOUSE MOVEMENT FOR SHIP
function mouseDragged() {
  // Update the spaceship position with the mouse position
  spaceshipX = mouseX;
  spaceshipY = mouseY;
}

// SPACE SHIP PUSH + POP
function drawSpaceship(img, x, y) {
  push();
  translate(x, y);
  rotate(radians(rotationAngle));
  scale(scaleFactor);
  image(img, -img.width / 2, -img.height / 2, img.width, img.height);
  pop();
  }

//DEATHSTAR FUNCTION
function deathstar(lx, ly, rot, sc) {
  push();
  translate(lx, ly);
  rotate(rot);
  scale(sc);
  fill(240, 238, 223);
  ellipse(0, 0, 200, 200);  // anchor
  fill(204, 203, 196);
  ellipse(55, 10, 50, 60);
  fill(158, 153, 117);
  ellipse(0, -100, 5, 5);
  pop();
}

//SPACE PUP #1
function lylsSpacePups(k, lx, ly, rot, sc) {
 // Update the x-coordinate based on the direction
 spacePupsX += spacePupsDirection * 2; // You can adjust the step size as needed

 // Reverse the direction when hitting the left or right edge
 if (spacePupsX < 0 || spacePupsX > width) {
   spacePupsDirection *= -1;
 }

  push();
  translate(lx, ly);
  rotate(rot);
  scale(sc);
  body(k);
  head(k, 20, -15);
  arm(k, 0, 5);
  arm(k, 40, 10);
  cap(60, -20);
  tail(k, 68, -10);
  pop();
  
}

//SPACE PUP #2
function lylsSpacePups2(k, lx, ly, rot, sc) {
  // Update the x-coordinate based on the direction
  spacePupsX += spacePupsDirection * 2;

  // Reverse the direction when hitting the left or right edge
  if (spacePupsX < 0 || spacePupsX > width) {
    spacePupsDirection *= -1;
  }


  push();
  translate(lx, counter);
  rotate(rot);
  scale(sc);
  body2(k);
  head2(k, 20, -15);
  arm2(k, 0, 5);
  arm2(k, 40, 10);
  backpack2(k, 35, -25);
  sunglasses(20, -20,);
  tail2(k, 68, -10);
  pop();

  }

//lylspacePups 1, kids functions
function body(k) {
  fill(224, 207, 119);
  ellipse(40, 0, 60, 40, 15, 15, 25, 25);
}

function head(c, lx, ly) {
  push();
  fill(224, 207, 119);
  translate(lx, ly)
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

//lylsspacePups2 kid functions + accesories 
function body2(k) {
  fill(125,96,55);
  ellipse(40, 0, 60, 40, 15, 15, 25, 25);
}

function head2(c, lx, ly) {
  push();
  fill(125,96,55);
  translate(lx, ly)
  ellipse(0, 0, 40, 40);
  fill(0, 0, 0);
  ellipse(-9, -5, 8, 8);
  ellipse(9, -5, 8, 8);
  fill(255, 255, 255);
  ellipse(-9, -6, 5, 5);
  ellipse(9, -6, 5, 5);
  fill(107, 91, 91);
  ellipse(0, 3, 5, 5);
  fill(125,96,55);
  ellipse(-15, -15, 15, 15);
  ellipse(15, -15, 15, 15);
  fill(255, 255, 255, 100);
  ellipse(0, -5, 70, 70);
  pop();
}

function arm2(c, lx, ly) {
  fill(125,96,55);
  rect(lx, ly, 20, 15, 10);
}

function tail2(c, lx, ly) {
  fill(125,96,55);
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
