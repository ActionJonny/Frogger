function Bus(x, y, width, height, speed) {
  this.x = x || 540;
  this.y = y || 280;
  this.width = width || 120;
  this.height = height || 30;
  this.speed = speed || 2;
}

Bus.prototype = {
  draw: function(ctx) {
    ctx.fillStyle = '#FFCC00';
    ctx.fillRect(this.x, this.y, this.width, this.height, this.speed);
    return this;
  },
  moveRight: function() {
    if (this.x < 700) {
      this.x += (this.speed - 0.7);
    } else this.x = -120;
  },
  moveLeft: function() {
    if (this.x > -120) {
      this.x -= this.speed;
    } else this.x = 620;
  },
};

module.exports = Bus;
