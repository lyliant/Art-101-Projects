let currentPage = 1;
let capturedImage = null;
let galleryImages = [];
let usernameInput = '';
let passwordInput = '';
let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;
let img9;
let img10;
let img11;
let snd1, snd2;
let camera;

function preload() {
  img1 = loadImage("assets/image_example/img1.jpeg");
  img2 = loadImage("assets/image_example/img2.jpeg");
  img3 = loadImage("assets/image_example/img3.jpeg");
  img4 = loadImage("assets/image_example/img4.jpeg");
  img5 = loadImage("assets/image_example/img5.jpeg");
  img6 = loadImage("assets/image_example/img6.jpeg");
  img7 = loadImage("assets/image_example/img7.jpeg");
  img8 = loadImage("assets/image_example/img8.jpeg");
  img9 = loadImage("assets/image_example/img9.jpeg");
  img10 = loadImage("assets/image_example/img10.jpeg");
  img11 = loadImage("assets/image_example/img11.jpeg");

  //sound
  snd1 = loadSound("assets/cute.mp3");
  snd2 = loadSound("assets/cutelofi.mp3");
}

function setup() {
  createCanvas(img11.width, img11.height);
  image(img11, 0, 0);
  textAlign(CENTER, CENTER);
  background(245, 234, 120);

  // Set up the camera
  camera = createCapture(VIDEO);
  camera.size(320, 240);
  camera.hide();
}

function draw() {
  image(img11, 0, 0);

  if (currentPage === 1) {
    displayGameNamePage();
  } else if (currentPage === 2) {
    displayLoginPage();
  } else if (currentPage === 3) {
    displayHomePage();
  } else if (currentPage === 4) {
    displayCameraPage();
  } else if (currentPage === 5) {
    displayGalleryPage();
  } else if (currentPage === 6) {
    displayPostPage();
  }
}

let waveSpeed = 0.1;

function displayGameNamePage() {
  textSize(48);
  fill(0, 0, 0);
  let yOffset = sin(frameCount * waveSpeed) * 10;
  text('CubeBook', width / 2, height / 3 + yOffset);
}

function displayLoginPage() {
  textSize(32);
  fill(0);
  text('Login', width / 2, 60);

  fill(255);
  rect(100, 151, 200, 40);
  textSize(20);
  fill(0);
  text('Username:', 100, 140);
  text(usernameInput, width / 2, 200);

  fill(255);
  rect(100, 220, 200, 40);
  textSize(20);
  fill(0);
  text('Password:', 100, 210);
  text(passwordInput, width / 2, 0);

  fill(102, 154, 209);
  rect(width / 2 - 75, height - 290, 150, 60);
  fill(255);
  textSize(24);
  text('Login', width / 2, height - 260);
}

function displayHomePage() {
  textSize(48);
  fill(0, 0, 0);
  text('CubeBook', width / 2, height / 4);
  image(img10, width / 2 - 25, height / 3, 50, 50);

  textSize(24);
  fill(0, 0, 0);
  text('Camera', 80, height - 290);
  fill(0, 0, 0);
  text('Gallery', width / 2, height - 290);
  fill(0, 0, 0);
  text('Post', width - 80, height - 290);

  let optionMargin = 20;
  let cameraX = 80;
  let galleryX = width / 2;
  let postX = width - 80;
  let optionY = height - 120;
}

function displayCameraPage() {
  textSize(48);
  fill(0, 0, 0);
  text('Camera', width / 2, 100);

  // Display the webcam feed
  image(camera, width / 2 - 160, height / 2 - 120, 320, 240);

  // Back button
  fill(255);
  rect(20, 40, 60, 30);
  fill(0);
  textSize(18);
  text('Back', 50, 55);

  // Capture button
  fill(255);
  rect(width - 80, height - 100, 80, 40);
  fill(0);
  textSize(14);
  text('Capture', width - 60, height - 45);
}

function displayGalleryPage() {
  textSize(48);
  fill(0, 0, 0);
  text('Gallery', width / 2, 100);

  let maxImageSize = min((width - 40) / 3, (height - 200) / 2) * 0.8;
  let margin = (width - maxImageSize * 3) / 4;

  for (let row = 0; row < 2; row++) {
    for (let col = 0; col < 3; col++) {
      let imgIndex = row * 3 + col;
      let x = col * (maxImageSize + margin) + margin;
      let y = row * (maxImageSize + margin) + 160;

      // Apply pixelation effect only to img1 - img6
      if (imgIndex < 6) {
        push();
        filter(THRESHOLD);
        image(getImageByIndex(imgIndex), x, y, maxImageSize, maxImageSize);
        pop();
      } else {
        // Display other images without pixelation effect
        image(getImageByIndex(imgIndex), x, y, maxImageSize, maxImageSize);
      }
    }
  }

  fill(0);
  rect(20, 40, 60, 30);
  fill(255);
  textSize(14);
  text('Back', 50, 55);
}

function getImageByIndex(index) {
  let images = [img1, img2, img3, img4, img5, img6];

  if (index >= 0 && index < images.length) {
    return images[index];
  } else {
    return null;
  }
}

function displayPostPage() {
  textSize(32);
  fill(36, 143, 214);
  text('Post', width / 2, 50);

  let postedImageSize = 200;
  let postedImageX = width / 2 - postedImageSize / 2;
  let postedImageY = 100;
  image(img3, postedImageX, postedImageY, postedImageSize, postedImageSize);

  textSize(18);
  fill(0);
  textAlign(LEFT, TOP);
  let postText = "Caption: This is my amazing post!\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  text(postText, 20, postedImageY + postedImageSize + 20, width - 40, height - (postedImageY + postedImageSize + 40));

  fill(0);
  rect(35, 25, 60, 30);
  fill(255);
  textSize(14);
  text('Back', 50, 35);
}

function mouseClicked() {
  // Handle page navigation based on the clicked area
  if (currentPage === 1) {
    // Move to page 2 when clicked on the first page
    currentPage = 2;
  } else if (currentPage === 2) {
    // Move to page 3 when login button is clicked (for simplicity, consider any input as valid)
    currentPage = 3;
  } else if (currentPage === 3) {
    // Check which option was clicked on the home page
    if (mouseX > 80 && mouseX < 150 && mouseY > height - 290 && mouseY < height - 230) {
      // Move to page 4 (Camera)
      currentPage = 4;
    } else if (mouseX > width / 2 - 80 && mouseX < width / 2 + 80 && mouseY > height - 290 && mouseY < height - 230) {
      // Move to page 5 (Gallery)
      currentPage = 5;
    } else if (mouseX > width - 150 && mouseX < width - 80 && mouseY > height - 290 && mouseY < height - 230) {
      // Move to page 6 (Post)
      currentPage = 6;
    }
  } else if (currentPage === 4 || currentPage === 5 || currentPage === 6) {
    // Handle clicks on pages 4, 5, and 6
    if (mouseX > 20 && mouseX < 80 && mouseY > 20 && mouseY < 50) {
      // Go back to home (page 3)
      currentPage = 3;
    }
  }
}

function keyPressed() {
  // Check the key pressed and update the currentPage variable
  switch (key) {
    case '1':
      currentPage = 1;
      break;
    case '2':
      currentPage = 2;
      break;
    case '3':
      currentPage = 3;
      break;
    case '4':
      currentPage = 4;
      break;
    case '5':
      currentPage = 5;
      break;
    case '6':
      currentPage = 6;
      break;
    // Add more cases for additional pages if needed
    default:
      // Do nothing for other keys
      break;
  }
}
