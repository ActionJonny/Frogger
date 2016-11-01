console.log('Jon Willemain');

var canvas = document.getElementById('world');
var ctx = canvas.getContext('2d');

function Frog(x, y, height, width) {
  this.x = x || canvas.width / 2.1;
  this.y = y || canvas.height / 2.1;
  this.height = height || 40;
  this.width = width || 40;
}

Frog.prototype.draw = function () {
  ctx.fillStyle = '#A55999';
  ctx.fillRect(this.x, this.y, this.height, this.width);
  return this;
};

Frog.prototype.moveUp = function() {
  this.y +=6;
};

var frog = new Frog();

requestAnimationFrame(function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  frog.draw();
  requestAnimationFrame(gameLoop);
});

document.onkeydown = function(event) {
  event = event || window.event;
  if (event.keyCode === 38) {
    frog.moveUp();
  }
};

module.exports = Frog;
