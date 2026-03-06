const c = document.getElementById("Canvas");
const ctx = c.getContext("2d");
function draw2d(color, offsetX, offsetY, sizeX, sizeY) {
  var shape;
  ctx.fillStyle = color;
  shape = ctx.fillRect(offsetX, offsetY, sizeX, sizeY);
  return shape;
}

//player stuff
var player;
player = draw2d("green", 0, 0, 30, 30);
function move(obj, X, Y) {
  console.log(obj);
}
move(player);

var startButton = document
  .querySelector("#startGame")
  .addEventListener("click", () => {
    this.startGame();
  });

//start
startGame = () => {
  console.log("Game is starting");

  //TODO: make the files do the thing
  draw2d("red", 125, 495, 500, 9);

  draw2d("gray", 100, 460, 70, 9);
  draw2d("gray", 200, 420, 70, 9);
  draw2d("gray", 300, 470, 70, 9);
  draw2d("gray", 450, 430, 70, 9);
  draw2d("gray", 550, 450, 60, 9);
};
