const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
function draw2d(color, offsetX, offsetY, sizeX, sizeY) {
  ctx.fillStyle = color;
  ctx.fillRect(offsetX, offsetY, sizeX, sizeY);
  return
}
     
draw2d("red", 125, 495, 500, 9)
     
draw2d("gray", 100, 460, 70, 9)
draw2d("gray", 200, 420, 70, 9)
draw2d("gray", 300, 470, 70, 9)
draw2d("gray", 450, 430, 70, 9)
draw2d("gray", 550, 450, 60, 9)
