function Bus(x, y, height, width) {
  this.x = x || 540;
  this.y = y || 290;
  this.height = height || 120;
  this.width = width || 40;
}

Bus.prototype = {
  draw: function(ctx) {
    ctx.fillStyle = '#FFCC00';
    ctx.fillRect(this.x, this.y, this.height, this.width);
    return this;
  },
  moveLeft: function() {
    if (this.x > -120) {
      this.x -= 2;
    } else this.x = 620;
  },
  moveLeftSlow: function() {
    if (this.x > -120) {
      this.x -= 1.3;
    } else this.x = 620;
  },
};

module.exports = Bus;
