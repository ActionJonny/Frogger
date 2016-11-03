function Zone(x, y, height, width) {
  this.x = x || 5;
  this.y = y || 445;
  this.height = height || 590;
  this.width = width || 50;
}

Zone.prototype = {
  draw: function(ctx) {
    ctx.fillStyle = '#4FD5D6';
    ctx.fillRect(this.x, this.y, this.height, this.width);
    return this;
  },
  drawCenterLine: function(ctx) {
    ctx.fillStyle = '#CC9900';
    ctx.fillRect(this.x, this.y, this.height, this.width);
    return this;
  }
};

module.exports = Zone;
