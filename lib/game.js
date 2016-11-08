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

var troncycleOne = new Troncycle();
var troncycleEight = new Troncycle(200, 370);
var troncycleFifteen = new Troncycle(100, 370);
var troncycleTwo = new Troncycle(400, 330);
var troncycleNine = new Troncycle(200, 330);
var troncycleSixteen = new Troncycle(580, 330);
var troncycleThree = new Troncycle(300, 280);
var troncycleTen = new Troncycle(150, 280);
var troncycleSeventeen = new Troncycle(400, 280);
var troncycleFour = new Troncycle(200, 195);
var troncycleEleven = new Troncycle(40, 195);
var troncycleEightteen = new Troncycle(290, 195);
var troncycleFive = new Troncycle(400, 150);
var troncycleTwelve = new Troncycle(500, 150);
var troncycleNineteen = new Troncycle(100, 150);
var troncycleSix = new Troncycle(300, 110);
var troncycleThirteen = new Troncycle(20, 110);
var troncycleTwenty = new Troncycle(420, 110);
var troncycleSeven = new Troncycle(100, 70);
var troncycleFourteen = new Troncycle(500, 70);
var troncycleTwentyOne = new Troncycle(200, 70);

var cycles = [];
cycles.push(troncycleOne, troncycleTwo, troncycleThree, troncycleFour, troncycleFive, troncycleSix, troncycleSeven, troncycleEight, troncycleNine, troncycleTen, troncycleEleven,  troncycleTwelve,  troncycleThirteen, troncycleFourteen, troncycleFifteen, troncycleSixteen, troncycleSeventeen, troncycleEightteen, troncycleNineteen, troncycleTwenty, troncycleTwentyOne);

var water = [];
water.push(startZone, endZone);

var bottomLanes = [];
bottomLanes.push(cars[0], cars[1], cars[2], buses[0], buses[1], bikes[0], bikes[1]);

var topLanes = [];
topLanes.push(cars[3], cars[4], buses[3], buses[4], bikes[2], bikes[3], bikes[4]);

var topLaneDifferent = [];
topLaneDifferent.push(bikes[5], bikes[6]);

//GAME FUNCTIONS
  this.animate = function() {
    if(frog.level === 1) {
      this.levelThree();
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
    // vehicleArray.forEach(function(vehicle) {
    //   frog.detectCollision(vehicle, gameLostScreen);
    // });
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
    //newStuffForEachDrawAndMove
    troncycleOne.draw(ctx).moveRight();
    troncycleEight.draw(ctx).moveRight();
    troncycleFifteen.draw(ctx).moveRight();

    troncycleTwo.draw(ctx).moveLeft();
    troncycleNine.draw(ctx).moveLeft();
    troncycleSixteen.draw(ctx).moveLeft();

    troncycleThree.draw(ctx).moveRight();
    troncycleTen.draw(ctx).moveRight();
    troncycleSeventeen.draw(ctx).moveRight();

    troncycleFour.draw(ctx).moveLeft();
    troncycleEleven.draw(ctx).moveLeft();
    troncycleEightteen.draw(ctx).moveLeft();

    troncycleFive.draw(ctx).moveRight();
    troncycleTwelve.draw(ctx).moveRight();
    troncycleNineteen.draw(ctx).moveRight();

    troncycleSix.draw(ctx).moveLeft();
    troncycleThirteen.draw(ctx).moveLeft();
    troncycleTwenty.draw(ctx).moveLeft();

    troncycleSeven.draw(ctx).moveRight();
    troncycleFourteen.draw(ctx).moveRight();
    troncycleTwentyOne.draw(ctx).moveRight();

    frog.draw(ctx);
    frog.winner(levelCompleteScreen, gameWonScreen);
    frog.drowns(gameLostScreen);
    frog.livesDisplay(frogFirstLife, frogSecondLife, frogFinalLife, zeroImg);
    cycles.forEach(function(cycle) {
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
    // console.log(frog.lives);
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

module.exports = Game;
