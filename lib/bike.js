function Bike(x, y, width, height, speed) {
  this.x = x || 540;
  this.y = y || 323;
  this.width = width || 50;
  this.height = height || 30;
  this.speed = speed || 4.1;
}

Bike.prototype = {
  draw: function(ctx) {
    ctx.fillStyle = '#E18942';
    ctx.fillRect(this.x, this.y, this.width, this.height);
    return this;
  },
  moveRight: function() {
    if (this.x < 600 ) {
      this.x += (this.speed - 1.2);
    } else this.x = -40;
  },
  moveRightFast: function() {
    if (this.x < 600 ) {
      this.x += this.speed;
    } else this.x = -40;
  },
  moveLeft: function() {
    if (this.x > -50 ) {
      this.x -= (this.speed - 1.8);
    } else this.x = 600;
  },
  moveLeftFast: function() {
    if (this.x > -50 ) {
      this.x -= this.speed;
    } else this.x = 600;
  }
};

module.exports = Bike;
