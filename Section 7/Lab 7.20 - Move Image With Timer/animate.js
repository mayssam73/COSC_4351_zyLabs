let timerId = null;

window.addEventListener("DOMContentLoaded", function() {
   document.addEventListener("click", startAnimation);
});

function startAnimation(e) {
   let clickX = e.clientX;
   let clickY = e.clientY;  
   
   if (timerId != null) {
      clearInterval(timerId);
   }
   
   timerId = setInterval(function() {
      moveImage(clickX, clickY);
   }, 10);
      
}

function moveImage(x, y) {
   const img = document.querySelector("img");
            
   let imgX = parseInt(img.style.left);
   let imgY = parseInt(img.style.top);

   const centerX = Math.round(x - (img.width / 2));
   const centerY = Math.round(y - (img.height / 2));

   if (imgX == centerX && imgY == centerY) {
      clearInterval(timerId);
      timerId = null;
   }
   
   if (imgX < centerX) {
      imgX++;
   }
   else if (imgX > centerX) {
      imgX--;
   }
   
   if (imgY < centerY) {
      imgY++;
   }
   else if (imgY > centerY) {
      imgY--;
   }
   
   img.style.left = imgX + "px";
   img.style.top = imgY + "px";
}