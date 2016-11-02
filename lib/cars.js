function Car(x, y, height, width) {
  this.x = x || 540;
  this.y = y || 400;
  this.height = height || 80;
  this.width = width || 40;
}

Car.prototype = {
  draw: function(ctx) {
    ctx.fillStyle = '#6600CC';
    ctx.fillRect(this.x, this.y, this.height, this.width);
    return this;
  },
  move: function() {
    if (this.x > -80) {
      this.x -= 3;
    } else this.x = 540;
  }
};

module.exports = Car;
