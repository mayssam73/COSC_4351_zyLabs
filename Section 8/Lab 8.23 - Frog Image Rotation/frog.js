const directions = {
   UP: 'up',
   DOWN: 'down',
   LEFT: 'left',
   RIGHT: 'right'
}

window.addEventListener("load", function () {
   const canvas = document.querySelector("canvas");

   drawFrog(canvas, 50, 50, directions.UP);
   drawFrog(canvas, 180, 50, directions.DOWN);   
   drawFrog(canvas, 50, 180, directions.LEFT);
   drawFrog(canvas, 180, 180, directions.RIGHT);
});

function drawFrog(canvas, x, y, direction = directions.UP) {   
   const context = canvas.getContext("2d");
   const frogImg = document.querySelector("img");

   switch (direction) {
      case directions.DOWN:
         context.translate(x+frogImg.width/2, y+frogImg.height/2)
         context.rotate(180*Math.PI/180);
         context.translate(-x-frogImg.width/2, -y-frogImg.height/2);
         break;
      case directions.LEFT:
         context.translate(x+frogImg.width/2, y+frogImg.height/2)
         context.rotate(-90*Math.PI/180);
         context.translate(-x-frogImg.width/2, -y-frogImg.height/2);             
         break;
      case directions.RIGHT:
         context.translate(x+frogImg.width/2, y+frogImg.height/2)
         context.rotate(90*Math.PI/180);             
         context.translate(-x-frogImg.width/2, -y-frogImg.height/2);
         break;
   }

   context.drawImage(frogImg, x, y);
   context.resetTransform();
}