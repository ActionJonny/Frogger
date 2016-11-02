function Car(x, y, height, width) {
  this.x = x || 540;
  this.y = y || 400;
  this.height = height || 80;
  this.width = width || 40;
}

Car.prototype = {
  draw: function(ctx) {
    ctx.fillStyle = '#66CCFF';
    ctx.fillRect(this.x, this.y, this.height, this.width);
    return this;
  },
  moveLeft: function() {
    if (this.x > -80) {
      this.x -= 3;
    } else this.x = 600;
  }
};

module.exports = Car;
