function Bike(x, y, height, width) {
  this.x = x || 540;
  this.y = y || 323;
  this.height = height || 50;
  this.width = width || 30;
}

Bike.prototype = {
  draw: function(ctx) {
    ctx.fillStyle = '#E18942';
    ctx.fillRect(this.x, this.y, this.height, this.width);
    return this;
  },
  moveRight: function() {
    if (this.x < 600 ) {
      this.x += 4;
    } else this.x = -40;
  },
  moveLeft: function() {
    if (this.x > -50 ) {
      this.x -= 2.8;
    } else this.x = 650;
  },
  moveLeftFast: function() {
    if (this.x > -50 ) {
      this.x -= 3.8;
    } else this.x = 650;
  }
};

module.exports = Bike;
