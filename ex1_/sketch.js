function setup() {
  createCanvas(500, 500);
  background(20);
  fill(255, 194, 194);
}

function draw() {
  fill(43, 123, 252);
  ellipse(width / 4, height / 5, 100, 100);

  fill(147, 229, 250);
  ellipse(width / 3, height / 6, 80, 80);

  fill(43, 123, 252);
  ellipse(width / 1, height / 3, 200, 200);

  fill(147, 229, 250);
  ellipse(width / 1, height / 2, 100, 100);

  fill(43, 123, 252);
  ellipse(width / 1.6, height / 1.1, 110, 110);

  fill(147, 229, 250);
  ellipse(width / 1.8, height / 1, 110, 110);

  fill(43, 123, 252);
  ellipse(width / 11, height / 1.4, 110, 110);

  fill(147, 229, 250);
  ellipse(width / 10, height / 1.2, 100, 100);

  fill(55, 179, 59);
  rect(width / 3, height / 2.5, width - width / 1.20, height - height / 1.5);

  fill(189, 255, 135);
  rect(width / 3.6, height / 3, width - width / 1.20, height - height / 1.5);
  
  triangle(width / 4, height / 2, width - width / 2, height - height / 4);

  for (let i = 0; i < height; i += 20) {
    fill(216, 184, 219, 100);
    rect(0, i, width, 10);
    fill(219, 184, 193, 100);
    rect(i, 0, 10, height);
    
    for (let j = 0; j < width; j += 20) {
      let rand = random(255, 200);
      fill(rand);
      rect(j + 5, i + 5, 10, 10);
      console.log("this has a greyscale value of " + rand);
    }
  }

  let r = random(30);
  let m = mouseX;
  console.log(m + " " + r);

  if (m < width / 2) {
    fill(255, 135, 227);
    ellipse(m, height / 2, r * 5, r * 2);
  } else {
    fill(235, 235, 143);
    rect(m, height / 2, r * 2, r * 5);
  }

  let y1 = mouseY;
  if (mouseY < 250) {
    fill(255, 241, 163, 90);
    triangle(mouseX, y1, mouseX - 50, y1 + 30, mouseX + 50, y1 + 50);
  } else {
    for (let i = 0; i < mouseX; i += 20) {
      let r3 = random(100);
      fill(80, 66, 235, r3);
      rect(i + 5, y1, 10, 10);
      console.log("r3 = " + r3);
    }

    fill(141, 201, 129, 50);
    ellipse(mouseX + 100, y1, 30, 30);
    drawHeart(mouseX, mouseY);
    drawStar(mouseX, mouseY, 20, 5);
  }
}

function drawHeart(x, y) {
  beginShape();
  vertex(x, y - 40);
  bezierVertex(x + 40, y - 60, x + 70, y - 30, x, y + 20);
  bezierVertex(x - 70, y - 30, x - 40, y - 60, x, y - 40);
  endShape(CLOSE);
}

function drawStar(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = -PI / 10; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    let sx2 = x + cos(a + halfAngle) * (radius / 2);
    let sy2 = y + sin(a + halfAngle) * (radius / 2);
    vertex(sx, sy);
    vertex(sx2, sy2);
  }
  endShape(CLOSE);
}