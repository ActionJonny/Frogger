var Frog = require('../lib/frog');
var Car = require('../lib/car');
var Bus = require('../lib/bus');
var Bike = require('../lib/bike');
var Zone = require('../lib/zone');
var Pad = require('../lib/pad');
var Troncycle = require('../lib/troncycle');

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
  var endZone = new Zone(5,5);

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
    } else if (j < 5){
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
    } secondCarsX += 240;
  }

  var vehicleArray = [];
    for(var m = 0; m < cars.length; m++) {
    vehicleArray.push(cars[m]);
    }
    for(var n = 0; n < buses.length; n++) {
    vehicleArray.push(buses[n]);
    }
    for(var o = 0; o < bikes.length; o++) {
    vehicleArray.push(bikes[o]);
  }

  var troncycles = [];
    var firstTronX = 70;
    var secondTronX = 20;
    var thirdTronX = 330;
    var fourthTronX = 350;
    var fifthTronX = 200;
    var sixthTronX = 200;
    var seventhTronX = 190;
  for (var p = 0; p < 26; p++) {
    if (p < 4) {
      troncycles.push(new Troncycle(firstTronX, 370));
      firstTronX -= 180;
    } else if (p < 8){
      troncycles.push(new Troncycle(secondTronX, 330));
      secondTronX += 240;
    } else if (p < 11){
      troncycles.push(new Troncycle(thirdTronX, 280));
      thirdTronX -= 150;
    } else if (p < 15){
      troncycles.push(new Troncycle(fourthTronX, 195));
      fourthTronX += 160;
    } else if (p < 18){
      troncycles.push(new Troncycle(fifthTronX, 150));
      fifthTronX -= 290;
    } else if (p < 21){
      troncycles.push(new Troncycle(sixthTronX, 110));
      sixthTronX += 280;
    } else{
      troncycles.push(new Troncycle(seventhTronX, 70));
      seventhTronX -= 170;
    }
  }

  var cycleArray = [];
  for (var q = 0; q < troncycles.length; q++){
    cycleArray.push(troncycles[q]);
  }

  var water = [];
  water.push(startZone, endZone);

  var bottomLanes = [];
  bottomLanes.push(cars[0], cars[1], cars[2], buses[0], buses[1], bikes[0], bikes[1]);

  var topLanes = [];
  topLanes.push(cars[3], cars[4], buses[2], buses[3], bikes[2], bikes[3], bikes[4]);

  var topLaneDifferent = [];
  topLaneDifferent.push(bikes[5], bikes[6]);

  var cyclesMoveRight = [];
  cyclesMoveRight.push(troncycles[0], troncycles[1], troncycles[2], troncycles[3], troncycles[8], troncycles[9], troncycles[10], troncycles[15], troncycles[16], troncycles[17], troncycles[21], troncycles[22], troncycles[23], troncycles[24]);

  var cyclesMoveLeft = [];
  cyclesMoveLeft.push(troncycles[4], troncycles[5], troncycles[6], troncycles[7], troncycles[11], troncycles[12], troncycles[13], troncycles[14], troncycles[18], troncycles[19], troncycles[20]);

  //GAME FUNCTIONS
  this.animate = function() {
    if(frog.level === 1) {
      this.levelOne();
    } else if(frog.level === 2) {
      this.levelTwo();
    } else if (frog.level === 3) {
      this.levelThree();
    }
  };
  this.levelOne = function() {
    water.forEach(function(area) {
      area.draw(ctx);
    });
    midZone.drawCenterLine(ctx);
    pads.forEach(function(pad) {
      pad.draw(ctx);
    });
    bottomLanes.forEach(function(obstacle) {
      obstacle.draw(ctx).moveRight();
    });
    topLanes.forEach(function(obstacle) {
      obstacle.draw(ctx).moveLeft();
    });
    topLaneDifferent.forEach(function(obstacle) {
      obstacle.draw(ctx).moveLeftFast();
    });
    frog.draw(ctx);
    frog.winner(levelCompleteScreen, gameWonScreen);
    frog.drowns(gameLostScreen);
    frog.livesDisplay(frogFirstLife, frogSecondLife, frogFinalLife, zeroImg);
    vehicleArray.forEach(function(vehicle) {
      frog.detectCollision(vehicle, gameLostScreen);
    });
  };
  this.levelTwo = function() {
    water.forEach(function(area) {
      area.draw(ctx);
    });
    midZone.drawCenterLine(ctx);
    pads.forEach(function(pad) {
      pad.draw(ctx);
    });
    bottomLanes.forEach(function(obstacle) {
      obstacle.draw(ctx).moveRightFast();
    });
    topLanes.forEach(function(obstacle) {
      obstacle.draw(ctx).moveLeftFast();
    });
    topLaneDifferent.forEach(function(obstacle) {
      obstacle.draw(ctx).moveLeft();
    });
    frog.draw(ctx);
    frog.winner(levelCompleteScreen, gameWonScreen);
    frog.drowns(gameLostScreen);
    frog.livesDisplay(frogFirstLife, frogSecondLife, frogFinalLife, zeroImg);
    vehicleArray.forEach(function(vehicle) {
      frog.detectCollision(vehicle, gameLostScreen);
    });
  };
  this.levelThree = function() {
    water.forEach(function(area) {
      area.draw(ctx);
    });
    midZone.drawCenterLine(ctx);
    pads.forEach(function(pad) {
      pad.draw(ctx);
    });
    cyclesMoveRight.forEach(function(obstacle) {
      obstacle.draw(ctx).moveRight();
    });
    cyclesMoveLeft.forEach(function(obstacle) {
      obstacle.draw(ctx).moveLeft();
    });
    frog.draw(ctx);
    frog.winner(levelCompleteScreen, gameWonScreen);
    frog.drowns(gameLostScreen);
    frog.livesDisplay(frogFirstLife, frogSecondLife, frogFinalLife, zeroImg);
    troncycles.forEach(function(cycle) {
      frog.detectCollision(cycle, gameLostScreen);
    });
  };
}

document.addEventListener('keydown', function(event) {
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

document.addEventListener('keyup', function(event) {
  if (event.which === 13 && frog.lives === 0) {
    gameLostScreen.style.display='none';
    frog.lives = 3;
    frog.level = 1;
    zeroImg.classList.add('hide');
    frogFirstLife.classList.remove('hide');
    frogSecondLife.classList.remove('hide');
    frogFinalLife.classList.remove('hide');
  }
});

document.addEventListener('keyup', function(event) {
  if (event.which === 13 && frog.level === 4) {
    gameWonScreen.style.display='none';
    frog.lives = 3;
    frog.level = 1;
    frogFirstLife.classList.remove('hide');
    frogSecondLife.classList.remove('hide');
    frogFinalLife.classList.remove('hide');
  }
});

document.addEventListener('keydown', function(event) {
  if (event.which === 38 && frog.lives <= 0) {
    frog.lives = 0;
    frog.x = 310;
    frog.y = 470;
  }
});

document.addEventListener('keyup', function(event) {
  if (event.which === 13) {
    levelCompleteScreen.style.display='none';
    frog.canMove = true;
  }
});

module.exports = Game;
