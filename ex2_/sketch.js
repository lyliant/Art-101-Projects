let cx;
let cy;
let bgc;
let gridSize;
let peony1;
let tulip2;
let bgcounter = 0;
let counter = 0;
let value = 0;
let bc;
let fadedColor = 100;
let useFadedColor = true; // Boolean variable to control the use of fadedColor
let useGreenRect = true; // Boolean variable to control the green rectangle

function setup() {
    createCanvas(800, 800);
    colorMode(RGB);
    bgc = color(20, 1);

    peony1 = loadImage("assets/image_example/peony1.jpeg");
    tulip2 = loadImage("assets/image_example/tulip2.jpeg");
    cx = width / 2;
    cy = height / 2;
    gridSize = 40;
    textSize(40);

    frameRate(10);

    rectMode(CENTER);
    bc = color('#008800');
}

function draw() {
    background(255);

    if (useGreenRect) {
        sketch1();
    }

    sketch2();
    sketch3();
    keyChoice();

    if (keyIsPressed) {
        keyChoice();
    }
}

function sketch1() {
    colorMode(RGB);
    noStroke();
    fill(255, 255, 0, 50);
    rect(0, counter, width - random(50), 10);
    fill(255, 0, 255, 50);
    rect(counter, 0, 10, height - random(50));

    if (counter > height) {
        background(bgcounter);
        bgcounter += 3;
        counter = 0;
    } else {
        counter += 20;
    }

    if (useGreenRect) {
        fill(0, 255, 0);
        textSize((counter + 50) / 3);
        textAlign(CENTER);
        text("Green is good", width / 2, counter);
    }
}

function sketch2() {
    background(bc);
    fill(value);
    rect(200, 200, 50, 50);
}

function sketch3() {
    background(255 - value);

    if (useFadedColor) {
        fill(fadedColor);
    } else {
        fill(0); // Use black if fadedColor is disabled
    }

    ellipse(width / 2, height / 2, 100, 100);
}

function keyChoice() {
    switch (key) {
        case 'a':
            console.log("a left");
            cx += -gridSize;
            image(peony1, cx, cy, gridSize, gridSize);
            break;
        case 'w':
            console.log("w up");
            cy += -gridSize;
            image(tulip2, cx, cy, gridSize, gridSize);
            break;
        case 'd':
            console.log("d  right");
            cx += gridSize;
            image(peony1, cx, cy, gridSize, gridSize);
            break;
        case 's':
            console.log("s back");
            cy += gridSize;
            image(tulip2, cx, cy, gridSize, gridSize);
            break;
        case 't':
            console.log("t text");
            fill(255, 0, 0);
            text("Pretty!", cx, cy, 200);
            break;
        default:
            console.log("None");
            break;
    }
    key = "";
}

function mouseMoved() {
    if (useFadedColor) {
        fadedColor = 100 + random(155);
    }
}

function keyPressed() {
    // Toggle boolean variables on specific key presses
    if (key == '1') {
        useGreenRect = !useGreenRect;
    } else if (key == '2') {
        useFadedColor = !useFadedColor;
    }
}