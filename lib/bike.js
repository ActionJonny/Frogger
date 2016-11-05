function Bike(x, y, width, height) {
  this.x = x || 540;
  this.y = y || 323;
  this.width = width || 50;
  this.height = height || 30;
}

Bike.prototype = {
  draw: function(ctx) {
    ctx.fillStyle = '#E18942';
    ctx.fillRect(this.x, this.y, this.width, this.height);
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
