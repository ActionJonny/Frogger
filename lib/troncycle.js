
function Troncycle(x, y, width, height, speed) {
  this.x = x || 540;
  this.y = y || 323;
  this.width = width || 60;
  this.height = height || 20;
  this.speed = speed || 4;
}

Troncycle.prototype = {
  draw: function(ctx) {
    ctx.fillStyle = '#A55999';
    ctx.fillRect(this.x, this.y, this.width, this.height);
    return this;
  },
  moveRight: function() {
    if (this.x < 600 ) {
      this.x += this.speed;
    } else this.x = -40;
  },
  moveLeft: function() {
    if (this.x > -50 ) {
      this.x -= (this.speed - 1.2);
    } else this.x = 650;
  },
  moveLeftFast: function() {
    if (this.x > -50 ) {
      this.x -= (this.speed - 0.2);
    } else this.x = 650;
  }
};

module.exports = Troncycle;
