/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Game = __webpack_require__(1);

	var start = document.getElementById('start-game');
	var gameLost = document.getElementById('game-lost');
	var gameWon = document.getElementById('game-complete');

	var canvas = document.getElementById('world');
	var ctx = canvas.getContext('2d');
	var game = new Game();

	requestAnimationFrame(function gameLoop() {
	  ctx.clearRect(0, 0, canvas.width, canvas.height);
	  game.animate();
	  requestAnimationFrame(gameLoop);
	});

	start.addEventListener('click', function () {
	  start.style.display = 'none';
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var Frog = __webpack_require__(2);
	var Car = __webpack_require__(3);
	var Bus = __webpack_require__(4);
	var Bike = __webpack_require__(5);
	var Zone = __webpack_require__(6);
	var Pad = __webpack_require__(7);
	var Troncycle = __webpack_require__(8);

	var levelCompleteScreen = document.getElementById('level-complete');
	var gameLostScreen = document.getElementById('game-lost');
	var gameWonScreen = document.getElementById('game-complete');
	var frogFinalLife = document.getElementById('final-life');
	var frogSecondLife = document.getElementById('second-life');
	var frogFirstLife = document.getElementById('first-life');
	var zeroImg = document.getElementById('zero-img');

	var canvas = document.getElementById('world');
	var ctx = canvas.getContext('2d');
	var game = new Game();
	var frog = new Frog();

	//GAME
	function Game() {
	  var startZone = new Zone();
	  var midZone = new Zone(5, 245, 590, 10);
	  var endZone = new Zone(5, 5);

	  var pads = [];
	  var spotBottomX = 310;
	  var spotTopX = 70;
	  for (var i = 0; i < 5; i++) {
	    if (i < 1) {
	      pads.push(new Pad(spotBottomX));
	    } else {
	      pads.push(new Pad(spotTopX, 30));
	      spotTopX += 160;
	    }
	  }

	  var bikes = [];
	  var firstBikeX = 250;
	  var nextBikeX = 240;
	  var thirdBikeX = 10;
	  for (var j = 0; j < 7; j++) {
	    if (j < 2) {
	      bikes.push(new Bike(firstBikeX));
	      firstBikeX -= 290;
	    } else if (j < 5) {
	      bikes.push(new Bike(nextBikeX, 192));
	      nextBikeX -= 120;
	    } else {
	      bikes.push(new Bike(thirdBikeX, 63));
	      thirdBikeX += 190;
	    }
	  }

	  var buses = [];
	  var firstBusX = 540;
	  var secondBusX = 40;
	  for (var k = 0; k < 5; k++) {
	    if (k < 2) {
	      buses.push(new Bus(firstBusX));
	      firstBusX -= 240;
	    } else {
	      buses.push(new Bus(secondBusX, 148));
	      secondBusX += 320;
	    }
	  }

	  var cars = [];
	  var firstCarsX = 400;
	  var secondCarsX = 200;
	  for (var l = 0; l < 6; l++) {
	    if (l < 3) {
	      cars.push(new Car(firstCarsX));
	      firstCarsX -= 255;
	    } else {
	      cars.push(new Car(secondCarsX, 103));
	    }secondCarsX += 240;
	  }

	  var vehicleArray = [];
	  for (var m = 0; m < cars.length; m++) {
	    vehicleArray.push(cars[m]);
	  }
	  for (var n = 0; n < buses.length; n++) {
	    vehicleArray.push(buses[n]);
	  }
	  for (var o = 0; o < bikes.length; o++) {
	    vehicleArray.push(bikes[o]);
	  }

	  var troncycleOne = new Troncycle();
	  var troncycleEight = new Troncycle(200, 370);
	  var troncycleFifteen = new Troncycle(50, 370);
	  var troncycleTwo = new Troncycle(400, 330);
	  var troncycleNine = new Troncycle(200, 330);
	  var troncycleSixteen = new Troncycle(580, 330);
	  var troncycleThree = new Troncycle(300, 280);
	  var troncycleTen = new Troncycle(150, 280);
	  var troncycleSeventeen = new Troncycle(420, 280);
	  var troncycleFour = new Troncycle(200, 195);
	  var troncycleEleven = new Troncycle(40, 195);
	  var troncycleEightteen = new Troncycle(290, 195);
	  var troncycleFive = new Troncycle(390, 150);
	  var troncycleTwelve = new Troncycle(500, 150);
	  var troncycleNineteen = new Troncycle(100, 150);
	  var troncycleSix = new Troncycle(300, 110);
	  var troncycleThirteen = new Troncycle(20, 110);
	  var troncycleTwenty = new Troncycle(420, 110);
	  var troncycleSeven = new Troncycle(90, 70);
	  var troncycleFourteen = new Troncycle(500, 70);
	  var troncycleTwentyOne = new Troncycle(200, 70);

	  var cycles = [];
	  cycles.push(troncycleOne, troncycleTwo, troncycleThree, troncycleFour, troncycleFive, troncycleSix, troncycleSeven, troncycleEight, troncycleNine, troncycleTen, troncycleEleven, troncycleTwelve, troncycleThirteen, troncycleFourteen, troncycleFifteen, troncycleSixteen, troncycleSeventeen, troncycleEightteen, troncycleNineteen, troncycleTwenty, troncycleTwentyOne);

	  var cyclesMoveRight = [];
	  cyclesMoveRight.push(troncycleOne, troncycleThree, troncycleFive, troncycleSeven, troncycleEight, troncycleTen, troncycleTwelve, troncycleFourteen, troncycleFifteen, troncycleSeventeen, troncycleNineteen, troncycleTwentyOne);

	  var cyclesMoveLeft = [];
	  cyclesMoveLeft.push(troncycleTwo, troncycleFour, troncycleSix, troncycleNine, troncycleEleven, troncycleThirteen, troncycleSixteen, troncycleEightteen, troncycleTwenty);

	  var water = [];
	  water.push(startZone, endZone);

	  var bottomLanes = [];
	  bottomLanes.push(cars[0], cars[1], cars[2], buses[0], buses[1], bikes[0], bikes[1]);

	  var topLanes = [];
	  topLanes.push(cars[3], cars[4], buses[2], buses[3], bikes[2], bikes[3], bikes[4]);

	  var topLaneDifferent = [];
	  topLaneDifferent.push(bikes[5], bikes[6]);

	  //GAME FUNCTIONS
	  this.animate = function () {
	    if (frog.level === 1) {
	      this.levelOne();
	    } else if (frog.level === 2) {
	      this.levelTwo();
	    } else if (frog.level === 3) {
	      this.levelThree();
	    }
	  };
	  this.levelOne = function () {
	    water.forEach(function (area) {
	      area.draw(ctx);
	    });
	    midZone.drawCenterLine(ctx);
	    pads.forEach(function (pad) {
	      pad.draw(ctx);
	    });
	    bottomLanes.forEach(function (obstacle) {
	      obstacle.draw(ctx).moveRight();
	    });
	    topLanes.forEach(function (obstacle) {
	      obstacle.draw(ctx).moveLeft();
	    });
	    topLaneDifferent.forEach(function (obstacle) {
	      obstacle.draw(ctx).moveLeftFast();
	    });
	    frog.draw(ctx);
	    frog.winner(levelCompleteScreen, gameWonScreen);
	    frog.drowns(gameLostScreen);
	    frog.livesDisplay(frogFirstLife, frogSecondLife, frogFinalLife, zeroImg);
	    vehicleArray.forEach(function (vehicle) {
	      frog.detectCollision(vehicle, gameLostScreen);
	    });
	  };
	  this.levelTwo = function () {
	    water.forEach(function (area) {
	      area.draw(ctx);
	    });
	    midZone.drawCenterLine(ctx);
	    pads.forEach(function (pad) {
	      pad.draw(ctx);
	    });
	    bottomLanes.forEach(function (obstacle) {
	      obstacle.draw(ctx).moveRightFast();
	    });
	    topLanes.forEach(function (obstacle) {
	      obstacle.draw(ctx).moveLeftFast();
	    });
	    topLaneDifferent.forEach(function (obstacle) {
	      obstacle.draw(ctx).moveLeft();
	    });
	    frog.draw(ctx);
	    frog.winner(levelCompleteScreen, gameWonScreen);
	    frog.drowns(gameLostScreen);
	    frog.livesDisplay(frogFirstLife, frogSecondLife, frogFinalLife, zeroImg);
	    vehicleArray.forEach(function (vehicle) {
	      frog.detectCollision(vehicle, gameLostScreen);
	    });
	  };
	  this.levelThree = function () {
	    water.forEach(function (area) {
	      area.draw(ctx);
	    });
	    midZone.drawCenterLine(ctx);
	    pads.forEach(function (pad) {
	      pad.draw(ctx);
	    });
	    cyclesMoveRight.forEach(function (obstacle) {
	      obstacle.draw(ctx).moveRight();
	    });
	    cyclesMoveLeft.forEach(function (obstacle) {
	      obstacle.draw(ctx).moveLeft();
	    });
	    frog.draw(ctx);
	    frog.winner(levelCompleteScreen, gameWonScreen);
	    frog.drowns(gameLostScreen);
	    frog.livesDisplay(frogFirstLife, frogSecondLife, frogFinalLife, zeroImg);
	    cycles.forEach(function (cycle) {
	      frog.detectCollision(cycle, gameLostScreen);
	    });
	  };
	}

	document.addEventListener('keydown', function (event) {
	  if (event.keyCode === 37) {
	    frog.moveLeft(canvas);
	  }
	  if (event.keyCode === 38) {
	    frog.moveUp(canvas);
	  }
	  if (event.keyCode === 39) {
	    frog.moveRight(canvas);
	  }
	  if (event.keyCode === 40) {
	    frog.moveDown(canvas);
	  }
	});

	document.addEventListener('keyup', function (event) {
	  if (event.which === 13 && frog.lives === 0) {
	    gameLostScreen.style.display = 'none';
	    frog.lives = 3;
	    frog.level = 1;
	    zeroImg.classList.add('hide');
	    frogFirstLife.classList.remove('hide');
	    frogSecondLife.classList.remove('hide');
	    frogFinalLife.classList.remove('hide');
	  }
	});

	document.addEventListener('keyup', function (event) {
	  if (event.which === 13 && frog.level === 4) {
	    gameWonScreen.style.display = 'none';
	    frog.lives = 3;
	    frog.level = 1;
	    frogFirstLife.classList.remove('hide');
	    frogSecondLife.classList.remove('hide');
	    frogFinalLife.classList.remove('hide');
	  }
	});

	document.addEventListener('keydown', function (event) {
	  if (event.which === 38 && frog.lives <= 0) {
	    frog.lives = 0;
	    frog.x = 310;
	    frog.y = 470;
	  }
	});

	document.addEventListener('keyup', function (event) {
	  if (event.which === 13) {
	    levelCompleteScreen.style.display = 'none';
	    frog.canMove = true;
	  }
	});

	function checkForFrogLives() {
	  if (frog.lives === 0) {
	    frog.canMove = false;
	  }
	}

	module.exports = Game;

/***/ },
/* 2 */
/***/ function(module, exports) {

	function Frog(x, y, r, sAngle, eAngle, speedX, speedY, level, lives, canMove) {
	  this.x = x || 310;
	  this.y = y || 470;
	  this.r = r || 15;
	  this.sAngle = sAngle || 0;
	  this.eAngle = eAngle || 2 * Math.PI;
	  this.speedX = speedX || 40;
	  this.speedY = speedY || 44;
	  this.level = level || 1;
	  this.lives = lives || 3;
	  this.canMove = true;
	}

	function checkForLives() {
	  if (this.lives === 0) {
	    this.canMove = false;
	  }
	}

	Frog.prototype = {
	  draw: function (ctx) {
	    ctx.beginPath();
	    ctx.arc(this.x, this.y, this.r, this.sAngle, this.eAngle);
	    ctx.fillStyle = '#99CC99';
	    ctx.fill();
	    ctx.lineWidth = 2;
	    ctx.strokeStyle = '#A55999';
	    ctx.stroke();
	    return this;
	  },
	  moveDown: function (canvas) {
	    if (this.y < canvas.height - 60 && this.x > 290 && this.x < 320 || this.y < canvas.height - 90) {
	      this.y += this.speedY;
	    }
	  },
	  moveUp: function (canvas) {
	    if (this.y > canvas.height - 460 && this.canMove === true) {
	      this.y -= this.speedY;
	    }
	  },
	  moveRight: function (canvas) {
	    if (this.x < canvas.width - 60 && this.y < 470) {
	      this.x += this.speedX;
	    }
	  },
	  moveLeft: function (canvas) {
	    if (this.x > canvas.width - 530 && this.y < 470) {
	      this.x -= this.speedX;
	    }
	  },
	  winner: function (levelCompleteScreen, gameWonScreen) {
	    if (this.y < 50 && this.x < 90 || this.y < 50 && this.x > 210 && this.x < 240 || this.y < 50 && this.x > 370 && this.x < 400 || this.y < 50 && this.x > 530 && this.x < 560) {
	      this.level++;
	      this.canMove = false;
	      if (this.level < 3) {
	        levelCompleteScreen.style.display = 'block';
	        return this.x = 310, this.y = 470;
	      } else if (this.level === 3) {
	        levelCompleteScreen.style.display = 'block';
	        return this.x = 310, this.y = 470;
	      } else if (this.level > 3) {
	        gameWonScreen.style.display = 'block';
	        return this.x = 310, this.y = 470;
	      }
	    }
	  },
	  drowns: function (gameLostScreen) {
	    if (this.y < 50 && this.x > 90 && this.x < 210 || this.y < 50 && this.x > 230 && this.x < 370 || this.y < 50 && this.x > 390 && this.x < 550) {
	      this.lives--;
	      checkForLives();
	      if (this.lives > 0) {
	        return this.x = 310, this.y = 470;
	      } else gameLostScreen.style.display = 'block';
	      return this.x = 310, this.y = 470;
	    }
	  },
	  livesDisplay: function (frogFirstLife, frogSecondLife, frogFinalLife, zeroImg) {
	    if (this.lives === 2) {
	      frogFirstLife.classList.add('hide');
	    } else if (this.lives === 1) {
	      frogSecondLife.classList.add('hide');
	    } else if (this.lives === 0) {
	      frogFinalLife.classList.add('hide');
	      zeroImg.classList.remove('hide');
	    }
	  },
	  detectCollision: function (vehicle, gameLostScreen) {
	    //FROG
	    var frogLeftEdge = { x: this.x - this.r, y: this.y };
	    var frogRightEdge = { x: this.x + this.r, y: this.y };
	    var frogTopEdge = { x: this.x, y: this.y - this.r };
	    var frogBottomEdge = { x: this.x, y: this.y + this.r };
	    //VEHICLE
	    var vehicleTopLeftCorner = { x: vehicle.x, y: vehicle.y };
	    var vehicleTopRightCorner = { x: vehicle.x + vehicle.width, y: vehicle.y };
	    var vehicleBottomRightCorner = { x: vehicle.x + vehicle.width, y: vehicle.y + vehicle.height };
	    var vehicleBottomLeftCorner = { x: vehicle.x, y: vehicle.y + vehicle.height };
	    if (frogLeftEdge.x <= vehicleBottomRightCorner.x && frogRightEdge.x >= vehicleBottomLeftCorner.x && frogBottomEdge.y >= vehicleTopRightCorner.y && frogTopEdge.y <= vehicleTopLeftCorner.y) {
	      this.lives--;
	      checkForLives();
	      if (this.lives > 0) {
	        return this.x = 310, this.y = 470;
	      } else gameLostScreen.style.display = 'block';
	      return this.x = 310, this.y = 470;
	    }
	  }
	};

	module.exports = Frog;

/***/ },
/* 3 */
/***/ function(module, exports) {

	function Car(x, y, width, height, speed) {
	  this.x = x || 400;
	  this.y = y || 367;
	  this.width = width || 75;
	  this.height = height || 30;
	  this.speed = speed || 2;
	}

	Car.prototype = {
	  draw: function (ctx) {
	    ctx.fillStyle = '#CCCCCC';
	    ctx.fillRect(this.x, this.y, this.width, this.height);
	    return this;
	  },
	  moveLeft: function () {
	    if (this.x > -80) {
	      this.x -= this.speed;
	    } else this.x = 600;
	  },
	  moveLeftFast: function () {
	    if (this.x > -80) {
	      this.x -= this.speed + 1;
	    } else this.x = 600;
	  },
	  moveRight: function () {
	    if (this.x < 600) {
	      this.x += this.speed;
	    } else this.x = -75;
	  },
	  moveRightFast: function () {
	    if (this.x < 600) {
	      this.x += this.speed + 1;
	    } else this.x = -75;
	  }
	};

	module.exports = Car;

/***/ },
/* 4 */
/***/ function(module, exports) {

	function Bus(x, y, width, height, speed) {
	  this.x = x || 540;
	  this.y = y || 280;
	  this.width = width || 120;
	  this.height = height || 30;
	  this.speed = speed || 2.2;
	}

	Bus.prototype = {
	  draw: function (ctx) {
	    ctx.fillStyle = '#FFCC00';
	    ctx.fillRect(this.x, this.y, this.width, this.height);
	    return this;
	  },
	  moveRight: function () {
	    if (this.x < 600) {
	      this.x += this.speed - 0.7;
	    } else this.x = -120;
	  },
	  moveRightFast: function () {
	    if (this.x < 600) {
	      this.x += this.speed;
	    } else this.x = -120;
	  },
	  moveLeft: function () {
	    if (this.x > -120) {
	      this.x -= this.speed - 0.7;
	    } else this.x = 600;
	  },
	  moveLeftFast: function () {
	    if (this.x > -120) {
	      this.x -= this.speed;
	    } else this.x = 600;
	  }
	};

	module.exports = Bus;

/***/ },
/* 5 */
/***/ function(module, exports) {

	function Bike(x, y, width, height, speed) {
	  this.x = x || 540;
	  this.y = y || 323;
	  this.width = width || 50;
	  this.height = height || 30;
	  this.speed = speed || 4.1;
	}

	Bike.prototype = {
	  draw: function (ctx) {
	    ctx.fillStyle = '#E18942';
	    ctx.fillRect(this.x, this.y, this.width, this.height);
	    return this;
	  },
	  moveRight: function () {
	    if (this.x < 600) {
	      this.x += this.speed - 1.2;
	    } else this.x = -40;
	  },
	  moveRightFast: function () {
	    if (this.x < 600) {
	      this.x += this.speed;
	    } else this.x = -40;
	  },
	  moveLeft: function () {
	    if (this.x > -50) {
	      this.x -= this.speed - 1.8;
	    } else this.x = 600;
	  },
	  moveLeftFast: function () {
	    if (this.x > -50) {
	      this.x -= this.speed;
	    } else this.x = 600;
	  }
	};

	module.exports = Bike;

/***/ },
/* 6 */
/***/ function(module, exports) {

	function Zone(x, y, height, width) {
	  this.x = x || 5;
	  this.y = y || 445;
	  this.height = height || 590;
	  this.width = width || 50;
	}

	Zone.prototype = {
	  draw: function (ctx) {
	    ctx.fillStyle = '#4FD5D6';
	    ctx.fillRect(this.x, this.y, this.height, this.width);
	    return this;
	  },
	  drawCenterLine: function (ctx) {
	    ctx.fillStyle = '#CC9900';
	    ctx.fillRect(this.x, this.y, this.height, this.width);
	    return this;
	  }
	};

	module.exports = Zone;

/***/ },
/* 7 */
/***/ function(module, exports) {

	function Pad(x, y, r, sAngle, eAngle) {
	  this.x = x || 310;
	  this.y = y || 470;
	  this.r = r || 23;
	  this.sAngle = sAngle || 0;
	  this.eAngle = eAngle || 2 * Math.PI;
	}

	Pad.prototype = {
	  draw: function (ctx) {
	    ctx.beginPath();
	    ctx.arc(this.x, this.y, this.r, this.sAngle, this.eAngle);
	    ctx.fillStyle = '#003300';
	    ctx.fill();
	    return this;
	  }
	};

	module.exports = Pad;

/***/ },
/* 8 */
/***/ function(module, exports) {

	
	function Troncycle(x, y, width, height, speed) {
	  this.x = x || 580;
	  this.y = y || 370;
	  this.width = width || 60;
	  this.height = height || 20;
	  this.speed = speed || 4;
	}

	Troncycle.prototype = {
	  draw: function (ctx) {
	    ctx.fillStyle = '#A55999';
	    ctx.fillRect(this.x, this.y, this.width, this.height);
	    return this;
	  },
	  moveRight: function () {
	    if (this.x < 600) {
	      this.x += this.speed;
	    } else this.x = -60;
	  },
	  moveLeft: function () {
	    if (this.x > -60) {
	      this.x -= this.speed;
	    } else this.x = 660;
	  }
	};

	module.exports = Troncycle;

/***/ }
/******/ ]);