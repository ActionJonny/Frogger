const Frog = require('../lib/frog');
const Car = require('../lib/cars');


var canvas = document.getElementById('world');
var ctx = canvas.getContext('2d');

var frog = new Frog();
var car = new Car();
var carAlso = new Car(400);

document.addEventListener('keydown', function(event) {
  if (event.keyCode === 37) {
    frog.moveLeft(canvas);
  }
  if (event.keyCode === 38) {
    frog.moveUp(canvas);
  }
  if (event.keyCode === 39) {
    frog.moveRight(canvas);
  }
  if (event.keyCode === 40) {
    frog.moveDown(canvas);
  }
});

requestAnimationFrame(function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  car.draw(ctx).move();
  carAlso.draw(ctx).move();
  frog.draw(ctx);
  frog.winner();
  requestAnimationFrame(gameLoop);
});
