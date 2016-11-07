var Frog = require('../lib/frog');
var Car = require('../lib/car');
var Bus = require('../lib/bus');
var Bike = require('../lib/bike');
var Zone = require('../lib/zone');
var Pad = require('../lib/pad');

var levelCompleteScreen = document.getElementById('level-complete');
var gameLostScreen = document.getElementById('game-lost');
var gameWonScreen = document.getElementById('game-complete');
var canvas = document.getElementById('world');
var frogFinalLife = document.getElementById('final-life');
var frogSecondLife = document.getElementById('second-life');
var frogFirstLife = document.getElementById('first-life');

var ctx = canvas.getContext('2d');
var frog = new Frog();
var game = new Game();

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
  for (var i = 0; i < 7; i++) {
  if (i < 2) {
    bikes.push(new Bike(firstBikeX));
    firstBikeX -= 290;
    } else if (i < 5){
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
  for (var i = 0; i < 5; i++) {
    if (i < 2) {
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
for (var i = 0; i < 6; i++) {
  if (i < 3) {
    cars.push(new Car(firstCarsX));
    firstCarsX -= 255;
  } else {
    cars.push(new Car(secondCarsX, 103));
  } secondCarsX += 240;
}

var vehicleArray = [];
  for(var i = 0; i < cars.length; i++) {
  vehicleArray.push(cars[i]);
  }
  for(var j = 0; j < buses.length; j++) {
  vehicleArray.push(buses[j]);
  }
  for(var k = 0; k < bikes.length; k++) {
  vehicleArray.push(bikes[k]);
}

var water = [];
water.push(startZone, endZone);

var bottomLanes = [];
bottomLanes.push(cars[0], cars[1], cars[2], buses[0], buses[1], bikes[0], bikes[1]);

var topLanes = [];
topLanes.push(cars[3], cars[4], buses[3], buses[4], bikes[2], bikes[3], bikes[4]);

var topLaneSpeeders = [];
topLaneSpeeders.push(bikes[5], bikes[6]);

/////////////////////////////////
function Game() {
  this.animate = function() {
    if (frog.level < 3) {
      this.stageOne();
    } else if (frog.level >= 3) {
      this.stageTwo();
    }
  };
  this.stageOne = function() {
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
    topLaneSpeeders.forEach(function(obstacle) {
      obstacle.draw(ctx).moveLeftFast();
    });
    frog.draw(ctx);
    frog.winner(levelCompleteScreen, gameWonScreen, vehicleArray, game);
    frog.drowns(gameLostScreen);
    frog.livesDisplay(frogFirstLife, frogSecondLife, frogFinalLife);
    // vehicleArray.forEach(function(vehicle) {
    //   frog.detectCollision(vehicle, gameLostScreen);
    // });
  };
  this.stageTwo = function() {
    water.forEach(function(area) {
      area.draw(ctx);
    });
    midZone.drawCenterLine(ctx);
    pads.forEach(function(pad) {
      pad.draw(ctx);
    });
    // bottomLanes.forEach(function(obstacle) {
    //   obstacle.draw(ctx).moveRight();
    // });
    topLanes.forEach(function(obstacle) {
      obstacle.draw(ctx).moveLeft();
    });
    topLaneSpeeders.forEach(function(obstacle) {
      obstacle.draw(ctx).moveLeftFast();
    });
    frog.draw(ctx);
    frog.winner(levelCompleteScreen, gameWonScreen, vehicleArray, game);
    frog.drowns(gameLostScreen);
    // vehicleArray.forEach(function(vehicle) {
    //   frog.detectCollision(vehicle, gameLostScreen);
    // });
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

module.exports = Game;
