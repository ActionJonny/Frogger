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
      this.y += 40;
    }
  },
  moveUp: function(canvas) {
    if (this.y > canvas.height - 480) {
      this.y -= 40;
    }
  },
  moveRight: function(canvas) {
    if (this.x < canvas.width - 60) {
      this.x += 40;
    }
  },
  moveLeft: function(canvas) {
    if (this.x > canvas.width - 580) {
      this.x -= 40;
    }
  },
  winner: function() {
    if (this.y < 15) {
      console.log('winner!');
      // cancelAnimationFrame();
      // setTimeout(this.moveToStart(), 3000);
    }
  },
  moveToStart: function() {
    return (this.x = 280, this.y = 450);
  },
  detectCollision: function(bus) {
    if (this.x === bus.x && this.y === bus.y) {
      console.log('collision');
    }
  }
};

module.exports = Frog;
