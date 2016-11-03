function Car(x, y, height, width) {
  this.x = x || 540;
  this.y = y || 365;
  this.height = height || 75;
  this.width = width || 30;
}

Car.prototype = {
  draw: function(ctx) {
    ctx.fillStyle = '#CCCCCC';
    ctx.fillRect(this.x, this.y, this.height, this.width);
    return this;
  },
  moveLeft: function() {
    if (this.x > -80) {
      this.x -= 3;
    } else this.x = 600;
  },
  moveRight: function() {
    if (this.x < 600) {
      this.x += 3;
    } else this.x = -75;
  }
};

module.exports = Car;
