// example 5.2

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
]; // sushi

    // 5 x 5
let textarr = [
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
];


let font1;
let images =[];

function preload()  {

       font1 = loadFont('assets/oswald.ttf');
       images[0] = loadImage('assets/dasiy.png');
       images[1] = loadImage('assets/peony1.png');
       images[2] = loadImage('assets/tulip1.png');
       images[3] = loadImage('assets/mushroom.png');
       images[4] = loadImage('assets/tomato.png');
       images[5] = loadImage('assets/blueflower.png');

}


function setup() {
     createCanvas(800, 700);
     background(241, 215, 247);
     fill(100);
     textFont(font1);
           //2darr, x,y,rot,scale, alpha
  
     mapToMonoSushi1(gridarr1, 409, 10, 0, 2., 255);
     mapToMonoSushi2(gridarr1, 0, 20, -30, .70, 255);
     mapToColorSushi(gridarr1, 150, 10, 0, 1.3, 255);
     mapToColorShapesSushi(gridarr1, 400, 260, 30, 1.45, 255);
    //  mapToColorShapes(gridarr1, 450, 300, -25, 1.5, 255);
     mapToColorSushiText(textarr, 500, 500, -10, 1, 175);
     mapToColorSushiText(textarr, 0, 350, 10, 1.25, 255);
    
     mapToBitMaps(gridarr1,images, 0, 200, -3, 1.55);

     mapToTintedBitMaps(gridarr1,images, 200, 450, -20, 2.85,190);
    
}


          //2darr, x,y,rot,scale, alpha
function mapToMonoSushi1(arr,lx,ly,rot,sc, fade) {
    push();
    translate(lx,ly);
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

function mapToMonoSushi2(arr,lx,ly,rot,sc, fade) {
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
            fill(arr[i][j] * 150, fade);
            rect(j * 12, i * 12, 10, 10);
        }
    }
   pop();

}

         //x,y,rot,scale, alpha
function mapToColorSushi(arr,lx,ly,rot,sc, fade) {
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
             let value = arr[i][j];
              if ( value == 0 ) {
                  fill(84, 99, 138, fade);
              } else if ( value == 1 ){
                  fill(0, fade);
              } else if ( value == 2 ) {
                  fill(100, fade);
              } else if ( value == 3 ) {
                  fill(255,255,255, fade);
              } else if ( value == 4 ) {
                  fill(136, 207, 136, fade);
              } else if ( value == 5 ) {
                  fill(86, 156, 86, fade);
              } else if ( value == 6 ) {
                  fill(58, 133, 58, fade);
              } else if ( value == 7 ) {
                  fill(240, 151, 19, fade);
              } else if ( value == 8 ) {
                  fill(217, 80, 80, fade);
              } else if ( value == 9 ) {
                  fill(235, 194, 188, fade);
              } else {
                 fill(199, 214, 252, fade); 
        
              }
            rect(j * 12, i * 12, 10, 10);
        }
    }
    pop();

}

function mapToColorShapesSushi(arr,lx,ly,rot,sc, fade) {
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
             let value = arr[i][j];
              if ( value == 0 ) {
                  fill(200,70,0, fade); //red background
                  ellipse(j * 12, i * 12, 10, 10);
              } else if ( value == 1 ){
                  fill(50,0,30, fade); //seaweed
                   rect(j * 12-6, i * 12-6, 10, 10,2);
              } else if ( value == 2 ){
                  fill(100, fade); //seaweed reflection
                   rect(j * 12-6, i * 12-6, 10, 10,2);
              } else if ( value == 3 ){
                  fill(255,255,255, fade); //white rice
                   ellipse(j * 12, i * 12, 15, 10,5);
              } else if ( value == 4 ){
                  fill(136, 207, 136, fade); //veggie
                   rect(j * 12-6, i * 12-6, 10, 10,2);
              } else if ( value == 5 ){
                  fill(86, 156, 86, fade); //veggie2
                   rect(j * 12-6, i * 12-6, 10, 10,2);
              } else if ( value == 6 ){
                  fill(58, 133, 58, fade); //veggie3
                   rect(j * 12-6, i * 12-6, 10, 10,2);
              } else if ( value == 7 ){
                  fill(240, 151, 19, fade); //veggie4
                   rect(j * 12-6, i * 12-6, 10, 10,2);
              } else if ( value == 8 ){
                  fill(217, 80, 80, fade); //veggie5
                   rect(j * 12-6, i * 12-6, 10, 10,2);
              } else if ( value == 9 ){
                  fill(235, 194, 188, fade); //veggie6
                   rect(j * 12-6, i * 12-6, 10, 10,2);
              } else {
                  fill(150, fade); //gray
                   ellipse(j * 12, i * 12, 15, 10,5);
              }
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

                            //2darray,images in array ,x,y,rot,scale, alpha
 function mapToBitMaps(arr,imgarr,lx,ly,rot,sc) {
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
                        nuimg = imgarr[2];
                      } else if ( value == 2 ) {
                        nuimg = imgarr[1];
                      } else if ( value == 3 ) {
                        nuimg = imgarr[3];
                      } else if ( value == 4 ) {
                        nuimg = imgarr[5];
                      } else if ( value == 5 ) {
                        nuimg = imgarr[5];
                      } else if ( value == 6 ) {
                        nuimg = imgarr[5];
                      } else if ( value == 7 ) {
                        nuimg = imgarr[5];
                      } else if ( value == 8 ) {
                        nuimg = imgarr[5];
                      } else if ( value == 9 ) {
                        nuimg = imgarr[5];
                      } else {
                        nuimg = imgarr[3];
                      }
                    image(nuimg, j * 12, i * 12, 14, 14);
                }
            }
            pop();
        
}

    //2darray,images in array ,x,y,rot,scale, alpha
    function mapToTintedBitMaps(arr,imgarr,lx,ly,rot,sc,fade) {
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    let nuimg;
    let c;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
                let value = arr[i][j];
                if ( value == 0 ) {
                nuimg = imgarr[3];
                c = color(255,100,0,fade);
                } else if ( value == 1 ){
                c = color(255,0,255,fade);
                nuimg = imgarr[2];
                } else if ( value == 2 ) {
                nuimg = imgarr[1];
                c = color(20,200,120,fade);
                } else {
                nuimg = imgarr[0];
                c = color(120,0,240,fade);
                }
            
            c = color(255,fade);
            tint(c);
            image(nuimg, j * 9, i * 9, 15, 15);
        }
    }
    pop();

    }
