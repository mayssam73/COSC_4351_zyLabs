function drawTriangle(size) {
   for (let i = size - 1; i >= 0; i--) {
      let output = "";
      for (let x = 0; x < size - i; x++) {
         output += "*"
      }
      console.log(output);
   }
}