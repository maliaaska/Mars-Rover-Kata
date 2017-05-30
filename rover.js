gridsize = [10,10];
minimumGridSize = [0,0];
direction = ["f","r","f","f","f","l","f","f","l","l","b","b"];
start = [0,0];
position = [0,0];
x = position[0];
y = position[0];
face = "N";
obstacles = [2,1];

function rover(x,y){
  this.x = x;
  this.y = y;
  this.face = face;

}
var obst = {
  x: obstacles[0],
  y: obstacles[1]
};

rover.go = function() {                               /* function with the for loop to check all commands*/
  for (i = 0; i < (direction.length + 1); i++) {
    var dir = direction[i];
    var obst = obstacles;
     if (face === "N"){
      switch(dir) {                                  /* switch statement to change value of 'face' or execute command  */
      case "r": face = "E";
        break;
      case "l": face = "W";
        break;
      case "f":
        if (x === obst[0] && y + 1 === obst[1]) {  /*If statement in case of obstacles or command what can be executed */
              console.log("Warning, Warning, Warning- obstacle on the road!!! Don't go farder, avoid it!!!");
              console.log("Your end position is [" + [x,y] + "]");
              return true;
            } else {
              y = y + 1;
            }
        break;
      case "b":
        if (x === obst[0] && y - 1 === obst[1]) {
              console.log("Warning, Warning, Warning- obstacle on the road!!! Don't go farder, avoid it!!!");
              console.log("Your end position is [" + [x,y] + "]");
              return true;
            } else {
              y = y - 1;
            }

        break;}
      } else if (face === "E"){
      switch(dir) {                                 /* switch statement to change value of 'face' or execute command  */
      case "r": face = "S";
        break;
      case "l": face = "N";
        break;
      case "f":
        if (x + 1 === obst[0] && y === obst[1]) {
          console.log("Warning, Warning, Warning- obstacle on the road!!! Don't go farder, avoid it!!!");
          console.log("Your end position is [" + [x,y] + "]");
          return true;
        } else {
          x = x + 1;
        }

        break;
      case "b":
      if (x - 1 === obst[0] && y === obst[1])  {
          console.log("Warning, Warning, Warning- obstacle on the road!!! Don't go farder, avoid it!!!");
          console.log("Your end position is [" + [x,y] + "]");
          return true;
      } else {
        x = x - 1;
      }
      break;}

      }  else if (face === "W") {
    switch(dir) {                                   /* switch statement to change value of 'face' or execute command  */
    case "r": face = "N";
      break;
    case "l": face = "S";
      break;
    case "f":

        if (x - 1 === obst[0] && y === obst[1])  {
          console.log("Warning, Warning, Warning- obstacle on the road!!! Don't go farder, avoid it!!!");
          console.log("Your end position is [" + [x,y] + "]");
          return true;
        } else {
          x = x - 1;
        }
      break;
    case "b":

        if (x + 1 === obst[0] && y === obst[1])  {
          console.log("Warning, Warning, Warning- obstacle on the road!!! Don't go farder, avoid it!!!");
          console.log("Your end position is [" + [x,y] + "]");
          return true;
        } else {
        x = x + 1 ;
      }
        break;}
      }

    else if (face === "S"){
      switch(dir) {                                 /* switch statement to change value of 'face' or execute command  */
      case "r": face = "W";
        break;
      case "l": face = "E";
        break;
      case "f":

          if (x === obst[0] && y - 1 === obst[1])  {
              console.log("Warning, Warning, Warning- obstacle on the road!!! Don't go farder, avoid it!!!");
              console.log("Your end position is [" + [x,y] + "]");
              return true;
            } else {
              y = y - 1;
            }
        break;
      case "b":

          if ( x === obst[0] && y + 1 === obst[1])  {
            console.log("Warning, Warning, Warning- obstacle on the road!!! Don't go farder, avoid it!!!");
            console.log("Your end position is [" + [x,y] + "]");
            return true;
      } else {
        y = y + 1;
      }
          break;}
      }

}


};



var grid = {                              /*An object with maximum grid size value */
  x: gridsize[0],
  y: gridsize[1]
};

rover.checkGridSize  = function () {      /*function to wrap a grid*/
  if ( x < minimumGridSize [0]) {
    x = Math.abs(x);
    if (gridsize[0] < Math.abs(x)){
          x = (gridsize[0] - (Math.abs(x) % gridsize[0]) );
  } else if ( y < minimumGridSize [1]) {
    y = Math.abs(y);
    if (gridsize[1] < Math.abs(y)){
          y = (gridsize[1] - (Math.abs(y) % gridsize[1]) );
          }
  } else {
      console.log("Your end position is [" + [x,y] + "]");
      return true;
    }
    if (gridsize[1] < Math.abs(y)){
          y = (Math.abs(y) % gridsize[1]  );
      }
    if (gridsize[0] < Math.abs(x)){
          x = (Math.abs(x) % gridsize[0]);
      } else {
          console.log("Your end position is [" + [x,y] + "]");
          return true;
       }
    console.log("Your end position is [" + [x,y] + "]");
  }
};






rover.go(start[0], start[0]);
rover.checkGridSize ();
