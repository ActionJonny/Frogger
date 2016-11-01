console.log('Jon Willemain');

var canvas = document.getElementById('world');
var ctx = canvas.getContext('2d');
canvas.focus();

function Frog(x, y, height, width) {
  this.x = x || canvas.width / 2.1;
  this.y = y || canvas.height / 2.1;
  this.height = height || 40;
  this.width = width || 40;
}

Frog.prototype = {
  draw: function() {
    ctx.fillStyle = '#A55999';
    ctx.fillRect(this.x, this.y, this.height, this.width);
    return this;
  },
  moveDown: function() {
    this.y += 24;
  },
  moveUp: function() {
    this.y -= 24;
  },
  moveRight: function() {
    this.x += 24;
  },
  moveLeft: function() {
    this.x -= 24;
  },
};

var frog = new Frog();

document.addEventListener('keydown', function(event) {
  if (event.keyCode === 37) {
    frog.moveLeft();
  }
  if (event.keyCode === 38) {
    frog.moveUp();
  }
  if (event.keyCode === 39) {
    frog.moveRight();
  }
  if (event.keyCode === 40) {
    frog.moveDown();
  }
});

requestAnimationFrame(function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  frog.draw();
  requestAnimationFrame(gameLoop);
});

module.exports = Frog;
