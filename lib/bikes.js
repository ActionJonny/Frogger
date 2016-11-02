function Bike(x, y, height, width) {
  this.x = x || 540;
  this.y = y || 345;
  this.height = height || 50;
  this.width = width || 40;
}

Bike.prototype = {
  draw: function(ctx) {
    ctx.fillStyle = '#FF9900';
    ctx.fillRect(this.x, this.y, this.height, this.width);
    return this;
  },
  move: function() {
    if (this.x < 600 ) {
      this.x += 4;
    } else this.x = -20;
  }
};

module.exports = Bike;
