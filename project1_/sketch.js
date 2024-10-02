let currentkey = '1';
let gkcount;
let cx, cy;
let bgc;
let gridSize;
let imgSize;
let dasiy;
let peony2;
let tulip2;
let cimg;
let k;
let tool;
let mark;
let sWeight;

function setup() {
  createCanvas(900, 900);
  background(255);
  smooth();
  bgc = color(255);
  k = color(255, 0, 0);
  gkcount = 20;

  // Set up an assets folder then add an image.
  dasiy = loadImage("assets/image_example/dasiy.png"); // white flower
  peony2 = loadImage("assets/image_example/peony2.jpeg"); // pinkish white flower
  tulip2 = loadImage("assets/image_example/tulip2.jpeg"); // blue flower
  cx = width / 2;
  cy = height / 2;
  gridSize = 40;
  imgSize = 40;
  textSize(40);
  sWeight = 2;
  cimg = peony2;
  tool = "";
  mark = 0;
}

function draw() {
  // Triggering the drawBrush function when the mouse is pressed
  if (mouseIsPressed) {
    drawBrush(mouseX, mouseY);
  }
}

function keyPressed() {
  currentkey = key;
  // Call the key choice function here if needed
  handleKeyPress();
}

function handleKeyPress() {
  switch (currentkey) {
    case '1':
      console.log("1 - dasiy");
      cimg = dasiy;
      tool = "pix";
      break;
    case '2':
      console.log("2 - peony2");
      cimg = peony2;
      tool = "pix";
      break;
    case '3':
      console.log("3 - tulip2");
      cimg = tulip2;
      tool = "pix";
      break;
    case '4':
      console.log("4 - ltOutlineBrush1"); // fourth brush
      tool = "custom1";
      break;
    case '5':
      console.log("5 - ltDetailBrush2"); // fifth brush
      tool = "custom2";
      break;
    case '6':
      console.log("6 - ltSpecialBrush3"); // sixth brush
      tool = "custom3";
      break;
    case '7':
      console.log("7 - Rainbow Brush"); // seventh brush
      tool = "rainbow";
      break;
    case '8':
      console.log("8 - Magic Heart Brush"); // eighth brush
      tool = "magicHeart";
      break;
    case 'c':
      console.log("c - circ");
      tool = "circ";
      break;
    case 'r':
      console.log("r - rect");
      tool = "rect";
      break;
    case 'b':
      console.log("b - erase");
      tool = "erase";
      break;
    case '>':
      console.log("+");
      imgSize += 10;
      break;
    case '<':
      console.log("-");
      imgSize -= 10;
      break;
    case 'x':
    case 'X':
      console.log("x - clear");
      background(bgc);
      break;
    default:
      console.log("None");
      break;
  }
}

function drawBrush(x, y) {
  if (tool == "pix") {
    stampImage(cimg, x, y, imgSize);
  } else if (tool == "circ") {
    drawCircle(k, x, y, imgSize, imgSize);
  } else if (tool == "rect") {
    drawRect(k, x, y, imgSize, imgSize);
  } else if (tool == "erase") {
    eraser(bgc, x, y, imgSize);
  } else if (tool == "custom1") {
    ltLineBrush1(x, y, imgSize); // Use custom brush 1
  } else if (tool == "custom2") {
    ltRectangleBrush2(x, y, imgSize); // Use custom brush 2
  } else if (tool == "custom3") {
    ltTriangleBrush3(x, y, imgSize); // Use custom brush 3
  } else if (tool == "rainbow") {
    ltRainbowBrush(x, y, imgSize); // Use the rainbow brush
  } else if (tool == "magicHeart") {
    ltMagicHeartBrush(x, y, imgSize); // Use the magic heart brush
  }
}

function stampImage(pix, lx, ly, s) {
  // Cheap centering trick with the s var /2
  image(pix, lx - s / 2, ly - s / 2, s, s);
}

function drawCircle(k, lx, ly, w, h) {
  strokeWeight(sWeight);
  stroke(k);
  noFill();
  ellipse(lx, ly, w, h);
}

function drawRect(k, lx, ly, w, h) {
  strokeWeight(sWeight);
  stroke(k);
  noFill();
  rect(lx - w / 2, ly - h / 2, w, h);
}

function eraser(k, lx, ly, sz) {
  fill(k);
  stroke(k);
  ellipse(lx, ly, sz, sz);
}

// Define your custom brushes here:

function ltLineBrush1(lx, ly, s) {
  // Define your first custom brush here
  // This function should draw the brush at the specified location (lx, ly) with size 's'
  // You can use any drawing techniques you like for your custom brush
  fill(0, 50);
  stroke(0, 50);
  strokeWeight(1);
  line(lx, ly, lx + s, ly + s);
}

function ltRectangleBrush2(lx, ly, s) {
  // Define your second custom brush here
  // This function should draw the second custom brush at the specified location (lx, ly) with size 's'
  fill(0);
  stroke(0);
  rect(lx - s / 2, ly - s / 2, s, s);
}

function ltTriangleBrush3(lx, ly, s) {
  // Define your third custom brush here
  // This function should draw the third custom brush at the specified location (lx, ly) with size 's'
  fill(0);
  stroke(0);
  triangle(lx, ly - s / 2, lx - s / 2, ly + s / 2, lx + s / 2, ly + s / 2);
}

function ltRainbowBrush(lx, ly, s) {
  // Define your rainbow brush here
  // This function should draw a rainbow pattern at the specified location (lx, ly) with size 's'
  noFill();

  // Define the rainbow colors
  let colors = [
    color(255, 0, 0),
    color(255, 165, 0),
    color(255, 255, 0),
    color(0, 128, 0),
    color(0, 0, 255),
    color(75, 0, 130),
    color(148, 0, 211)
  ];

  // Calculate the width of each color stripe
  let stripeWidth = s / colors.length;

  // Calculate the radius of the rainbow
  let radius = s / 2;

  // Calculate the center of the rainbow
  let centerX = lx;
  let centerY = ly + radius;

  // Draw the rainbow
  for (let i = 0; i < colors.length; i++) {
    stroke(colors[i]);
    strokeWeight(stripeWidth);
    let startAngle = map(i, 0, colors.length, -PI, 0);
    let endAngle = map(i + 1, 0, colors.length, -PI, 0);
    arc(centerX, centerY, radius * 2, radius * 2, startAngle, endAngle);
  }
}

function ltMagicHeartBrush(lx, ly, s) {
  // Define your magic heart brush here
  // This function should draw a heart shape with yellow mini stars on it at the specified location (lx, ly) with size 's'
  noStroke();
  fill(255, 0, 0); // Red heart color

  // Draw a heart shape
  beginShape();
  vertex(lx, ly - s / 2);
  bezierVertex(lx + s / 2, ly - s / 2, lx + s / 2, ly + s / 6, lx, ly + s / 2);
  bezierVertex(lx - s / 2, ly + s / 6, lx - s / 2, ly - s / 2, lx, ly - s / 2);
  endShape(CLOSE);

  fill(255, 255, 0); // Yellow star color

  // Draw yellow mini stars on the heart
  for (let i = 0; i < 5; i++) {
    let starX = random(lx - s / 2, lx + s / 2);
    let starY = random(ly - s / 2, ly + s / 2);
    drawStar(starX, starY, 5, 10, 5);
  }
}

function drawStar(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = -PI/2; a < TWO_PI-PI/2; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}