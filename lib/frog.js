function Frog(x, y, r, sAngle, eAngle) {
  this.x = x || 310;
  this.y = y || 470;
  this.r = r || 15;
  this.sAngle = sAngle || 0;
  this.eAngle = eAngle || 2*Math.PI;
}
//A55999
Frog.prototype = {
  draw: function(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, this.sAngle, this.eAngle);
    ctx.fillStyle = '#99CC99';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#A55999';
    ctx.stroke();
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
  winner: function(game) {
    if (this.y < 15) {
      // console.log('winner!');
      // cancelAnimationFrame();
      // setTimeout(this.moveToStart(), 3000);
      setTimeout(function() {
        var startTime = (new Date()).getTime();
        // game;
      }, 3000);
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
