function Frog(x, y, r, sAngle, eAngle, speedX, speedY, level, lives) {
  this.x = x || 310;
  this.y = y || 470;
  this.r = r || 15;
  this.sAngle = sAngle || 0;
  this.eAngle = eAngle || 2 * Math.PI;
  this.speedX = speedX || 40;
  this.speedY = speedY || 44;
  this.level = level || 1;
  this.lives = lives || 3;
}

Frog.prototype = {
  draw: function(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, this.sAngle, this.eAngle);
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
    if (this.x < canvas.width - 60 && this.y < 470) {
      this.x += this.speedX;
    }
  },
  moveLeft: function(canvas) {
    if (this.x > canvas.width - 530 && this.y < 470) {
      this.x -= this.speedX;
    }
  },
  winner: function(levelCompleteScreen, gameWonScreen, vehicleArray) {
    if (this.y < 50 && this.x < 90 || this.y < 50 && this.x > 210 && this.x < 240 || this.y < 50 && this.x > 370 && this.x < 400 || this.y < 50 && this.x > 530 && this.x < 560) {
      this.level++;
      if (this.level < 3) {
        levelCompleteScreen.style.display='block';
        vehicleArray.forEach(function(vehicle) {
          vehicle.speed = (vehicle.speed * 1.4);
        });
        console.log(this.level);
        return (this.x = 310, this.y = 470);
      } else {
        levelCompleteScreen.style.display='block';
        console.log(this.level);
        return (this.x = 310, this.y = 470);
      }
    }
  },
  drowns: function(gameLostScreen, frogFirstLife) {
    if (this.y < 50 && this.x > 90 && this.x < 210 || this.y < 50 && this.x > 230 && this.x < 370 || this.y < 50 && this.x > 390 && this.x < 550 ) {
      gameLostScreen.style.display='block';
      // frogFirstLife.classList.add('hide');
      return (this.x = 310, this.y = 470);
    }
  },

  detectCollision: function (vehicle, gameLostScreen) {
    var frogLeftEdge = {x: this.x-this.r, y: this.y};
    var frogRightEdge = {x: this.x+this.r, y: this.y};
    var frogTopEdge ={x: this.x, y: this.y-this.r};
    var frogBottomEdge = {x: this.x, y: this.y+this.r};

    var vehicleTopLeftCorner = {x: vehicle.x, y: vehicle.y};
    var vehicleTopRightCorner = {x: vehicle.x + vehicle.width, y: vehicle.y};
    var vehicleBottomRightCorner = {x: vehicle.x + vehicle.width, y: vehicle.y + vehicle.height};
    var vehicleBottomLeftCorner = {x: vehicle.x, y: vehicle.y + vehicle.height};

    if (frogLeftEdge.x <= vehicleBottomRightCorner.x && frogRightEdge.x >= vehicleBottomLeftCorner.x && frogBottomEdge.y >= vehicleTopRightCorner.y && frogTopEdge.y <= vehicleTopLeftCorner.y) {
      gameLostScreen.style.display='block';
      return (this.x = 310, this.y = 470);
    }
  }
};

module.exports = Frog;
