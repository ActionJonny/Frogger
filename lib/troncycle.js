
function Troncycle(x, y, width, height, speed) {
  this.x = x || 580;
  this.y = y || 370;
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
    } else this.x = -60;
  },
  moveLeft: function() {
    if (this.x > -60 ) {
      this.x -= this.speed;
    } else this.x = 660;
  }
};

module.exports = Troncycle;
