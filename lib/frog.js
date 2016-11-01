function Frog(x, y, height, width) {
  this.x = x || 280;
  this.y = y || 450;
  this.height = height || 40;
  this.width = width || 40;
}

Frog.prototype = {
  draw: function(ctx) {
    ctx.fillStyle = '#A55999';
    ctx.fillRect(this.x, this.y, this.height, this.width);
    return this;
  },
  moveDown: function(canvas) {
    if (this.y < canvas.height - 60) {
      this.y += 20;
    }
  },
  moveUp: function(canvas) {
    if (this.y > canvas.height - 480) {
      this.y -= 20;
    }
  },
  moveRight: function(canvas) {
    if (this.x < canvas.width - 60) {
      this.x += 20;
    }
  },
  moveLeft: function(canvas) {
    if (this.x > canvas.width - 580) {
      this.x -= 20;
    }
  }
};

// var frog = new Frog();
//
// document.addEventListener('keydown', function(event) {
//   if (event.keyCode === 37) {
//     frog.moveLeft();
//   }
//   if (event.keyCode === 38) {
//     frog.moveUp();
//   }
//   if (event.keyCode === 39) {
//     frog.moveRight();
//   }
//   if (event.keyCode === 40) {
//     frog.moveDown();
//   }
// });
//
// requestAnimationFrame(function gameLoop() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   frog.draw();
//   requestAnimationFrame(gameLoop);
// });

module.exports = Frog;
