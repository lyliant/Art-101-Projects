 // example #5.1 
    // this is a 16x16 array 
    var gridarr = [
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
        ]; 
    
        var a = 0; 
    
        function setup() { 
    
        createCanvas(500, 500); 
    
        background(170); 
    
        for (var i = 0; i < gridarr.length; i++) { 
            for (var j = 0; j < gridarr.length; j++) { 
                a = gridarr[i][j]; 
                if (a === 1) { 
                 fill(0);
                }
                else if (a === 2) { 
                  fill(100);
                }
                else if (a === 3) {
                  fill(255,255,255);
                }
                else if (a === 4) {
                  fill(136, 207, 136);
                }
                else if (a === 5) {
                  fill(86, 156, 86);
                }
                else if (a === 6) {
                  fill(58, 133, 58);
                }
                else if (a === 7) {
                  fill(240, 151, 19);
                }
                else if (a === 8) {
                  fill(217, 80, 80);
                }
                else if (a === 9) {
                  fill(235, 194, 188)
                } else {
                fill(180, 210, 255);
                }
  
                // typical way of mapping out a grid (value * scale) + offset 
                // value  -- the increment counter from the forloop 
                // scale -- a multiple that effects the size/position of each drawing 
                // offset -- relative movement of the x/y position on the canvas 
    
                rect((j * 30) + 15, (i * 30) + 15, 20, 20);
             }
         }
     } 