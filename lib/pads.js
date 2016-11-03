function Pad(x, y, r, sAngle, eAngle) {
  this.x = x || 310;
  this.y = y || 470;
  this.r = r || 23;
  this.sAngle = sAngle || 0;
  this.eAngle = eAngle || 2*Math.PI;
}

Pad.prototype = {
  draw: function(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, this.sAngle, this.eAngle);
    ctx.fillStyle = '#003300';
    ctx.fill();
    // ctx.lineWidth = 3;
    // ctx.strokeStyle = '#A55999';
    // ctx.stroke();
    return this;
  }
};

module.exports = Pad;
