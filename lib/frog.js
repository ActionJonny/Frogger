console.log('Jon Willemain');

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

function Frog(x, y, height, width) {
  this.x = x || canvas.width / 2;
  this.y = y || canvas.height / 2;
  this.height = height || 40;
  this.width = width || 40;
  // this.fillStyle = '#A55999';
  // this.center = center || { x: canvas.width / 2, y: canvas.height - this.y };
}

Frog.prototype.draw = function () {
  context.fillStyle = '#A55999';
  context.fillRect(this.x, this.y, this.height, this.width);
  return this;
};

// Frog.prototype.move = function () {
//
// };

var frog = new Frog();

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  frog.draw();
  // frog.move();
  requestAnimationFrame(gameLoop);
});

module.exports = Frog;
