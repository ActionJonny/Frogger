function Car(x, y, width, height, speed) {
  this.x = x || 540;
  this.y = y || 367;
  this.width = width || 75;
  this.height = height || 30;
  this.speed = speed || 3;
}

Car.prototype = {
  draw: function(ctx) {
    ctx.fillStyle = '#CCCCCC';
    ctx.fillRect(this.x, this.y, this.width, this.height);
    return this;
  },
  moveLeft: function() {
    if (this.x > -80) {
      this.x -= this.speed;
    } else this.x = 600;
  },
  moveLeftFast: function() {
    if (this.x > -80) {
      this.x -= (this.speed - 0.5);
    } else this.x = 600;
  },
  moveRight: function() {
    if (this.x < 600) {
      this.x += this.speed;
    } else this.x = -75;
  },
  moveRightFast: function() {
    if (this.x < 600) {
      this.x += (this.speed - 0.5);
    } else this.x = -75;
  }
};

module.exports = Car;
