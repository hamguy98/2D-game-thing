const c = document.getElementById("Canvas");
  const ctx = c.getContext("2d");
  function draw2d(color, offsetX, offsetY, sizeX, sizeY) {
  ctx.fillStyle = color;
  ctx.fillRect(offsetX, offsetY, sizeX, sizeY);
  return
}
  
//player stuff
draw2d("green", 0, 0, 30, 30)
function move(X, Y) {
        
}

var startButton = document
  .querySelector("#startGame")
  .addEventListener("click", () => {
    this.startGame();
});

startGame = () => {
  console.log("Game is starting");
  const canvas = document.getElementById("Canvas");
  const ctx = canvas.getContext("2d");
  function draw2d(color, offsetX, offsetY, sizeX, sizeY) {
    ctx.fillStyle = color;
    var block = ctx.fillRect(offsetX, offsetY, sizeX, sizeY);
    return block
  }
       
  draw2d("red", 125, 495, 500, 9)
       
  draw2d("gray", 100, 460, 70, 9)
  draw2d("gray", 200, 420, 70, 9)
  draw2d("gray", 300, 470, 70, 9)
  draw2d("gray", 450, 430, 70, 9)
  draw2d("gray", 550, 450, 60, 9)
};