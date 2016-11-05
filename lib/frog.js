function Frog(x, y, r, sAngle, eAngle, speedX, speedY) {
  this.x = x || 310;
  this.y = y || 470;
  this.r = r || 15;
  this.sAngle = sAngle || 0;
  this.eAngle = eAngle || 2 * Math.PI;
  this.speedX = speedX || 80;
  this.speedY = speedY || 44;
}

Frog.prototype = {
  draw: function(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, this.sAngle, this.eAngle, this.speedX, this.speedY);
    ctx.fillStyle = '#99CC99';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#A55999';
    ctx.stroke();
    return this;
  },

  moveDown: function(canvas) {
    if (this.y < canvas.height - 60) {
      this.y += this.speedY;
    }
  },
  moveUp: function(canvas) {
    if (this.y > canvas.height - 460) {
      this.y -= this.speedY;
    }
  },
  moveRight: function(canvas) {
    if (this.x < canvas.width - 60) {
      this.x += this.speedX;
    }
  },
  moveLeft: function(canvas) {
    if (this.x > canvas.width - 530) {
      this.x -= this.speedX;
    }
  },
  winner: function(levelComplete, vehicleArray) {
    if (this.y < 50 && this.x < 90 || this.y < 50 && this.x > 210 && this.x < 240 || this.y < 50 && this.x > 370 && this.x < 400 || this.y < 50 && this.x > 530 && this.x < 560) {
      levelComplete.style.display='block';
      vehicleArray.forEach(function(vehicle){
        vehicle.speed = (vehicle.speed * 1.4)
      })
      return (this.x = 310, this.y = 470);
      // wherever vehicle behavior is defined, add next level behvaiors and start over
    }
  },
  drowns: function() {
    if (this.y < 50 && this.x > 90 && this.x < 210 || this.y < 50 && this.x > 230 && this.x < 370 || this.y < 50 && this.x > 390 && this.x < 550 ) {
      return (this.x = 310, this.y = 470);
    }
  },

  detectCollision: function (vehicle) {
    var frogLeftEdge = {x: this.x-this.r, y: this.y};
    var frogRightEdge = {x: this.x+this.r, y: this.y};
    var frogTopEdge ={x: this.x, y: this.y-this.r};
    var frogBottomEdge = {x: this.x, y: this.y+this.r}

    var vehicleTopLeftCorner = {x: vehicle.x, y: vehicle.y};
    var vehicleTopRightCorner = {x: vehicle.x + vehicle.width, y: vehicle.y};
    var vehicleBottomRightCorner = {x: vehicle.x + vehicle.width, y: vehicle.y + vehicle.height};
    var vehicleBottomLeftCorner = {x: vehicle.x, y: vehicle.y + vehicle.height}

    if (frogLeftEdge.x <= vehicleBottomRightCorner.x && frogRightEdge.x >= vehicleBottomLeftCorner.x && frogBottomEdge.y >= vehicleTopRightCorner.y && frogTopEdge.y <= vehicleTopLeftCorner.y)
      return (this.x = 310, this.y = 470)
  }
}
module.exports = Frog;
