// example 5.3

// This uses the transformation matrix tools to move,
//rotate and scale things as batch operations
// 16 x 16
let gridarr1 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 0, 0, 0],
    [0, 0, 1, 3, 3, 4, 5, 5, 9, 9, 9, 3, 3, 1, 0, 0],
    [0, 1, 3, 3, 4, 5, 5, 6, 7, 7, 8, 8, 3, 3, 1, 0],
    [0, 1, 1, 3, 3, 6, 6, 7, 8, 8, 8, 3, 3, 3, 1, 0],
    [0, 1, 2, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 0],
    [0, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 2, 2, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 2, 2, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 2, 2, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 2, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]; //sushi

let gridarr2 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 5, 5, 5, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 5, 5, 5, 5, 5, 5, 1, 0, 0, 0],
    [0, 0, 0, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 0, 0],
    [0, 0, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 1, 0, 0],
    [0, 1, 2, 2, 5, 5, 5, 5, 5, 5, 5, 4, 4, 1, 0, 0],
    [0, 1, 2, 3, 2, 2, 2, 5, 5, 4, 4, 4, 4, 1, 0, 0],
    [0, 1, 2, 3, 3, 3, 2, 4, 4, 4, 4, 4, 4, 1, 0, 0],
    [0, 1, 2, 3, 3, 3, 2, 4, 4, 4, 4, 4, 4, 1, 0, 0],
    [0, 1, 2, 3, 3, 3, 2, 4, 4, 4, 4, 4, 4, 1, 0, 0],
    [0, 1, 2, 3, 3, 3, 2, 4, 4, 4, 4, 1, 1, 0, 0, 0],
    [0, 0, 1, 2, 3, 3, 2, 4, 4, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 2, 2, 2, 4, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]; //Sushi2

let gridarr3 = [
    [0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0],
    [0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0],
    [0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0],
    [0, 0, 0, 3, 0, 0, 0, 1, 1, 0, 0, 3, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 3, 2, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 3, 2, 2, 2, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 3, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0],
    [0, 0, 1, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0],
    [0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 1, 0, 0],
    [0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 1, 0, 0],
    [0, 1, 4, 1, 2, 2, 4, 4, 4, 4, 4, 4, 1, 4, 1, 0],
    [0, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 0],
    [0, 0, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]; //Dereks Bao

let gridarr4 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0],
    [0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0],
    [0, 0, 0, 3, 0, 0, 0, 1, 1, 0, 0, 0, 3, 0, 0, 0],
    [0, 0, 0, 3, 0, 0, 1, 3, 2, 1, 0, 0, 3, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 3, 2, 2, 2, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 3, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0],
    [0, 0, 0, 1, 2, 2, 1, 1, 1, 1, 2, 2, 1, 0, 0, 0],
    [0, 0, 0, 1, 2, 2, 1, 1, 1, 1, 2, 2, 1, 0, 0, 0],
    [0, 0, 0, 1, 2, 2, 1, 1, 1, 1, 2, 2, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]; //Feifei onigiri


// 7 x 22
let textarrSushi = [
    ["pinky", "pinky", "pinky", "pinky", "pinky", "pinky","pinky"],
    ["pinky", "pinky", "BLACK", "BLACK", "BLACK", "pinky","pinky"],
    ["pinky", "BLACK", "reddd", "reddd", "reddd", "BLACK","pinky"],
    ["pinky", "BLACK", "WHITE", "reddd", "WHITE", "BLACK","pinky"],
    ["pinky", "BLACK", "BLACK", "WHITE", "BLACK", "BLACK","pinky"],
    ["pinky", "BLACK", "black", "BLACK", "black", "BLACK","pinky"],
    ["pinky", "BLACK", "black", "black", "black", "BLACK","pinky"],
    ["pinky", "BLACK", "black", "black", "black", "BLACK","pinky"],
    ["pinky", "BLACK", "black", "black", "black", "BLACK","pinky"],
    ["pinky", "BLACK", "black", "black", "black", "BLACK","pinky"],
    ["pinky", "BLACK", "black", "black", "black", "BLACK","pinky"],
    ["pinky", "BLACK", "black", "black", "black", "BLACK","pinky"],
    ["pinky", "BLACK", "black", "black", "black", "BLACK","pinky"],
    ["pinky", "BLACK", "black", "black", "black", "BLACK","pinky"],
    ["pinky", "BLACK", "black", "black", "black", "BLACK","pinky"],
    ["pinky", "BLACK", "black", "black", "black", "BLACK","pinky"],
    ["pinky", "BLACK", "black", "black", "black", "BLACK","pinky"],
    ["pinky", "BLACK", "black", "black", "black", "BLACK","pinky"],
    ["pinky", "BLACK", "black", "black", "black", "BLACK","pinky"],
    ["pinky", "BLACK", "black", "black", "black", "BLACK","pinky"],
    ["pinky", "pinky", "BLACK", "BLACK", "BLACK", "pinky","pinky"],
    ["pinky", "pinky", "pinky", "pinky", "pinky", "pinky","pinky"],
]; //lyl's text sushi

//16 x 16
let textarrBao = [
    ["Dim", "Dim", "Dim", "Dim", "Dim", "Dim", "Dim", "Sum", "Dim", "Dim", "Dim", "Dim", "Dim", "Dim", "Dim", "Dim"],
    ["Dim", "Dim", "Dim", "Sum", "Dim", "Dim", "Dim", "Dim", "Sum", "Dim", "Dim", "Sum", "Dim", "Dim", "Dim", "Dim"],
    ["Dim", "Dim", "Dim", "Dim", "Sum", "Dim", "Dim", "Sum", "Dim", "Dim", "Dim", "Dim", "Sum", "Dim", "Dim", "Dim"],
    ["Dim", "Dim", "Dim", "Sum", "Dim", "Dim", "Dim", "Dim", "Dim", "Dim", "Dim", "Sum", "Dim", "Dim", "Dim", "Dim"],
    ["Dim", "Dim", "Dim", "Sum", "Dim", "Dim", "Dim", "Soysauce", "Soysauce", "Dim", "Dim", "Sum", "Dim", "Dim", "Dim", "Dim"],
    ["Dim", "Dim", "Dim", "Dim", "Dim", "Dim", "Soysauce", "Dim", "Bao", "Soysauce", "Dim", "Dim", "Dim", "Dim", "Dim", "Dim"],
    ["Dim", "Dim", "Dim", "Dim", "Soysauce", "Soysauce", "Dim", "Bao", "Bao", "Bao", "Soysauce", "Soysauce", "Dim", "Dim", "Dim", "Dim"],
    ["Dim", "Dim", "Dim", "Soysauce", "Bao", "Bao", "Bao", "Bao", "Bao", "Bao", "Bao", "Bao", "Soysauce", "Dim", "Dim", "Dim"],
    ["Dim", "Dim", "Soysauce", "Bao", "Bao", "Bao", "Bao", "Bao", "Bao", "Bao", "Bao", "Bao", "Bao", "Soysauce", "Dim", "Dim"],
    ["Dim", "Dim", "Soysauce", "Bao", "Bao", "Bao", "Bao", "Bao", "Bao", "Bao", "Bao", "Bao", "Filling", "Soysauce", "Dim", "Dim"],
    ["Dim", "Dim", "Soysauce", "Bao", "Bao", "Bao", "Bao", "Bao", "Bao", "Bao", "Bao", "Filling", "Filling", "Soysauce", "Dim", "Dim"],
    ["Dim", "Soysauce", "Filling", "Soysauce", "Bao", "Bao", "Filling", "Filling", "Filling", "Filling", "Filling", "Filling", "Soysauce", "Filling", "Soysauce", "Dim"],
    ["Dim", "Soysauce", "Filling", "Filling", "Soysauce", "Soysauce", "Soysauce", "Soysauce", "Soysauce", "Soysauce", "Soysauce", "Soysauce", "Filling", "Filling", "Soysauce", "Dim"],
    ["Dim", "Dim", "Soysauce", "Filling", "Filling", "Filling", "Filling", "Filling", "Filling", "Filling", "Filling", "Filling", "Filling", "Soysauce", "Dim", "Dim"],
    ["Dim", "Dim", "Dim", "Soysauce", "Soysauce", "Soysauce", "Soysauce", "Soysauce", "Soysauce", "Soysauce", "Soysauce", "Soysauce", "Soysauce", "Dim", "Dim", "Dim"],
    ["Dim", "Dim", "Dim", "Dim", "Dim", "Dim", "Dim", "Dim", "Dim", "Dim", "Dim", "Dim", "Dim", "Dim", "Dim", "Dim"],
]; //bao text


let font1;
let images = [];

let currentPage = 0;

function preload() {
    font1 = loadFont('assets/oswald.ttf');
    images[0] = loadImage('assets/0.png');
    images[1] = loadImage('assets/1.png');
    images[2] = loadImage('assets/2.png');
    images[3] = loadImage('assets/3.png');
    images[4] = loadImage('assets/4.png');
    images[5] = loadImage('assets/5.png');
    images[6] = loadImage('assets/6.jpg');
    images[7] = loadImage('assets/7.jpg');
    images[8] = loadImage('assets/8.jpg');
}

function setup() {
    createCanvas(800, 700);
    background(0, 60, 150);
    fill(100);
    textAlign(LEFT);
    textFont(font1);

}

function draw() {
    background(0, 15);

    if (currentPage == 1) {
        //2darr, x,y,rot,scale, alpha
        mapToMonoSushi(gridarr1, 409, 10, 0, 2., 255);
        mapToMonoSushi2(gridarr2, 0, 20, -30, .70, 255);
        mapToColorSushi(gridarr1, 150, 10, 0, 1.3, 255);
        mapToColorSushi2(gridarr2, 400, 260, 30, 1.45, 255);
       //  mapToColorShapes(gridarr1, 450, 300, -25, 1.5, 255);
        mapToColorSushiText(textarrSushi, 500, 500, -10, 1, 175);
        mapToColorSushiText(textarrSushi, 0, 350, 10, 1.25, 255);

        push();
        translate(100, 30);
        fill(255);
        textSize(20);
        let t = "This is two copies of one of my numerical gridArray, mapped two different ways."
        text(t, 0, 0, 300);  // the 4th argument is the textWidth per line.
        pop();


    } else if (currentPage === 2) {
       //feifei onigiri
       mapToColorOnigiri(gridarr4, -30, 0, 0, 9, 8);
       mapToColorOnigiri2(gridarr4, 520, 260, 45, 2.15, 255);
       mapToColorOnigiriShapes(gridarr4, 120, 480, 0, 0.65, 255);
       mapToColorOnigiriShapes(gridarr4, 270, 180, -25, 1.2, 120);


       push();
       translate(40, 50);
       fill(255);
       textSize(20);
       let t = "Here are Annafeifei's arrays!";
       text(t, 0, 0, 300);
       pop();



    } else if (currentPage == 3) {
        // dereks bao
        mapToBaoColorPixels(gridarr3, 20, 200, 0, 1, 255);
        mapToBaoColorShapes(gridarr3, 20, 400, 0, 1, 255);
        mapToBaoColorText(textarrbao, 150, 200, 0, 1, 255);
        mapToBaoBitMaps(gridarr3,images, 300, 400, 0, 1.5);

        push();
        translate(100, 30);
        fill(255);
        textSize(20);
        let t = "Here are Derek's arrays!"
        text(t, 0, 0, 300);  // the 4th argument is the textWidth per line.
        pop();

    } else {

        push();
        translate(80, 100);
        fill(200);
        textSize(40);
        text("My groups memebers were Derek Luu, \nand Annafeifei Willman ", 0, 0, 800);
        translate(0, 120);
        text("I have 8 mapped images, copied at least twice \nfor a total of more than 16.", 0, 0, 800);
        translate(250, 120);
        mapToColorSushi(gridarr1, 0, 0, 0, .45, 255);
        pop();

    }




}


function keyPressed() {


    //console.log(key);
    // or 
    if (key == '1') {
        console.log("Page 1");
        currentPage = 1;

    } else if (key == '2') {
        console.log("Page 2");
        currentPage = 2;

    } else if (key == '3') {
        console.log("Page 3");
        currentPage = 3;
    } else {
        currentPage = 0;

    }

}



// the map functions.



//2darr, x,y,rot,scale, alpha
function mapToMonoSushi(arr, lx, ly, rot, sc, fade) {
    push();
    translate(lx, ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
            fill(arr[i][j] * 50, fade);
            rect(j * 12, i * 12, 10, 10);
        }
    }
    pop();

}

function mapToMonoSushi2(arr, lx, ly, rot, sc, fade) {
    push();
    translate(lx, ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
            fill(arr[i][j] * 50, fade);
            rect(j * 12, i * 12, 10, 10);
        }
    }
    pop();

}

//x,y,rot,scale, alpha
function mapToColorSushi(arr, lx, ly, rot, sc, fade) {
    push();
    translate(lx, ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
            let value = arr[i][j];
            if (value == 0) {
                fill(180, 210, 255, fade);
            } else if (value == 1) {
                fill(0, fade);
            } else if (value == 2) {
                fill(200, 200, 170, fade);
            } else if (value == 3) {
                fill(230, 230, 200, fade);
            } else if (value == 4) {
                fill(136, 207, 136, fade);
            } else if (value == 5) {
                fill(86, 156, 86, fade);
            } else if (value == 6) {
                fill(58, 133, 58, fade);
            } else if (value == 7) {
                fill(240, 151, 19, fade);
            } else if (value == 8) {
                fill(217, 80, 80, fade);
            } else if (value == 9) {
                fill(235, 194, 188, fade);
            } else {
                fill(180, 130, 100, fade);

            }
            rect(j * 12, i * 12, 10, 10);
        }
    }
    pop();

}

//x,y,rot,scale, alpha
function mapToColorSushi2(arr, lx, ly, rot, sc, fade) {
    push();
    translate(lx, ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
            let value = arr[i][j];
            if (value == 0) {
                fill(244, 219, 255, fade);
            } else if (value == 1) {
                fill(0, fade);
            } else if (value == 2) {
                fill(255, 255, 255, fade);
            } else if (value == 3) {
                fill(237, 28, 36, fade);
            } else if (value == 4) {
                fill(23, 22, 23, fade);
            } else if (value == 5) {
                fill(70, 70, 70, fade);
            } else {
                fill(180, 130, 100, fade);

            }
            rect(j * 12, i * 12, 10, 10);
        }
    }
    pop();
}

function mapToColorSushiText(arr,lx,ly,rot,sc,fade) {
    textSize(15);
    textAlign(CENTER);
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
             let value = arr[i][j];
              if ( value == "pinky" ) {
                  fill(224, 101, 181, fade);
              } else if ( value == "BLACK" ){
                  fill(0, fade);
              } else if ( value == "black" ){
                  fill(0, fade);
              } else if ( value == "WHITE" ){
                    fill(255, 255, 255, fade);
              } else if ( value == "reddd" ){
                    fill(255, 79, 66, fade);
              } else {
                  fill(255, fade);
              }
               text(value, j * 35, i * 10,100);
        }
    }
    pop();
}

function mapToColorOnigiri(arr,lx,ly,rot,sc, fade) {
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
             let value = arr[i][j];
              if ( value == 0 ) {
                  fill(255,0,0, fade);
              } else if ( value == 1 ){
                  fill(0, fade);
              } else if ( value == 2 ) {
                  fill(242,234,234);
              } else if ( value == 3 ) {
                  fill(255,255,255, fade);
              } else {
                  fill(150,130,100, fade); 
        
              }
            rect(j * 10, i * 10, 10, 10);
        }
    }
    pop();
}

//x,y,rot,scale, alpha
function mapToColorOnigiri2(arr, lx, ly, rot, sc, fade) {
    push();
    translate(lx, ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
            let value = arr[i][j];
            if ( value == 0 ) {
                fill(255,0,0, fade);
            } else if ( value == 1 ){
                fill(0, fade);
            } else if ( value == 2 ) {
                fill(242,234,234);
            } else if ( value == 3 ) {
                fill(255,255,255, fade);
            } else {
                fill(150,130,100, fade); 

            }
            rect(j * 12, i * 12, 10, 10);
        }
    }
    pop();

}

function mapToColorOnigiriShapes(arr, lx, ly, rot, sc, fade) {
    push();
    translate(lx, ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
            let value = arr[i][j];
            if (value == 0) {
                fill(200, 70, 0, fade);
                ellipse(j * 12, i * 12, 10, 10);
            } else if (value == 1) {
                fill(50, 0, 30, fade);
                rect(j * 12 - 6, i * 12 - 6, 10, 10, 2);
            } else {
                fill(0, 150, 0, fade);
                ellipse(j * 12, i * 12, 15, 10, 5);
            }
        }
    }
    pop();

}

function mapToColorText(arr, lx, ly, rot, sc, fade) {
    textSize(15);
    textAlign(CENTER);
    push();
    translate(lx, ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
            let value = arr[i][j];
            if (value == "money") {
                fill(20, 170, 0, fade);
            } else if (value == "blood") {
                fill(200, 0, 30, fade);
            } else {
                fill(255, fade);
            }
            text(value, j * 35, i * 10, 100);
            //rect( j * 35, i * 10,100,100);
        }
    }
    pop();

}       
       //          x,y,rot,scale, alpha
        function mapToBaoColorPixels(arr,lx,ly,rot,sc, fade) {
            push();
            translate(lx,ly);
            rotate(radians(rot));
            scale(sc);
            for (var i = 0; i < arr.length; i++) {
                for (var j = 0; j < arr[0].length; j++) {
                     let value = arr[i][j];
                      if ( value == 0 ) {
                          fill(180,210,255, fade);
                      } else if ( value == 1 ){
                          fill(0, fade);
                      } else if ( value == 2 ) {
                          fill(200,200,170, fade);
                      } else if ( value == 3 ) {
                          fill(230,230,200, fade);
                      } else {
                          fill(180,130,100, fade); 
                
                      }
                    rect(j * 10, i * 10, 10, 10);
                }
            }
            pop();
        
        }
        
        function mapToBaoColorShapes(arr,lx,ly,rot,sc, fade) {
            push();
            translate(lx,ly);
            rotate(radians(rot));
            scale(sc);
            for (var i = 0; i < arr.length; i++) {
                for (var j = 0; j < arr[0].length; j++) {
                    let value = arr[i][j];
                    if ( value == 0 ) {
                            fill(200,70,0, fade);
                            ellipse(j * 12, i * 12, 10, 10);
                    } else if ( value == 1 ){
                            fill(50,0,30, fade);
                            rect(j * 12-6, i * 12-6, 10, 10,2);
                    } else if ( value == 2 ){
                            fill(50,50,30, fade);
                            rect(j * 12-6, i * 12-6, 10, 10,2);
                    } else {
                            fill(0,150,0, fade);
                            ellipse(j * 12, i * 12, 15, 10,5);
                    }
                      
                }
            }
            pop();
        
        }
        
        function mapToBaoColorText(arr,lx,ly,rot,sc,fade) {
            textSize(15);
            textAlign(CENTER);
            push();
            translate(lx,ly);
            rotate(radians(rot));
            scale(sc);
            for (var i = 0; i < arr.length; i++) {
                for (var j = 0; j < arr[0].length; j++) {
                     let value = arr[i][j];
                      if ( value == "Bao" ) {
                        fill(240,240,210, fade);
                    } else if ( value == "Sum" ){
                        fill(200,50,120, fade);
                    } else if ( value == "Soysauce" ){
                        fill(5,5,5, fade);
                    } else if ( value == "Dim" ){
                        fill(200,200,30, fade);
                    } else if ( value == "Filling" ){
                        fill(200,200,200, fade);
                    } else {
                        fill(255, fade);
                    }
                        text(value, j * 35, i * 10,100);
                }
            }
            pop();
        
        }
        
                                    //2darray,images in array ,x,y,rot,scale, alpha
         function mapToBaoBitMaps(arr,imgarr,lx,ly,rot,sc) {
                    push();
                    translate(lx,ly);
                    rotate(radians(rot));
                    scale(sc);
                    let nuimg;
                    for (var i = 0; i < arr.length; i++) {
                        for (var j = 0; j < arr[0].length; j++) {
                             let value = arr[i][j];
                              if ( value == 0 ) {
                                nuimg = imgarr[0];
                              } else if ( value == 1 ){
                                nuimg = imgarr[1];
                              } else if ( value == 2 ){
                                nuimg = imgarr[2];
                              } else if ( value == 3 ) {
                                nuimg = imgarr[3];
                              } else {
                                nuimg = imgarr[4];
                              }
        
                            image(nuimg, j * 12, i * 12, 14, 14);
                        }
                    }
                    pop();
                
        }
        