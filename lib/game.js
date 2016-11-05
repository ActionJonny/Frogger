var Frog = require('../lib/frog');
var Car = require('../lib/car');
var Bus = require('../lib/bus');
var Bike = require('../lib/bike');
var Zone = require('../lib/zone');
var Pad = require('../lib/pad');

var levelComplete = document.getElementById('level-complete');
var gameLost = document.getElementById('game-lost');
var gameWon = document.getElementById('game-complete');
var canvas = document.getElementById('world');
var ctx = canvas.getContext('2d');
var frog = new Frog();
var car = new Car();
var carPerson = new Car(170);
var carBaby = new Car(325);
var carBoy = new Car(200, 103);
var carGirl = new Car(450, 103);
var bus = new Bus();
var busPerson = new Bus(200);
var busBaby = new Bus(300, 148);
var busBoy = new Bus(40,148);
var bike = new Bike();
var bikeWoman = new Bike(250);
var bikeBaby = new Bike(480, 192);
var bikeBoy = new Bike(620, 192);
var bikeLeader = new Bike(240, 192);
var bikeMan = new Bike(10, 63);
var bikeGirl = new Bike(200, 63);
var startZone = new Zone();
var midZone = new Zone(5, 245, 590, 10);
var endZone = new Zone(5,5);

var vehicleArray = [];
vehicleArray.push(car, carBaby, carPerson, carBoy, carGirl, bus, busPerson, busBaby, busBoy, bike, bikeWoman, bikeBaby, bikeBoy, bikeLeader, bikeMan, bikeGirl);

var pads = [];
  var spotBottomX = 70;
  var spotTopX = 70;
for (var i = 0; i < 11; i++) {
  if (i < 7) {
    pads.push(new Pad(spotBottomX));
    spotBottomX += 80;
    } else {
    pads.push(new Pad(spotTopX, 30));
    spotTopX += 160;
  }
}

// var bike = [];
//   var bikeBottom = 540;
//   var bikeMiddle = 240
//   var bikeTop = 10;
// for (var i = 0; i < 6; i++) {
//   if (i < 1) {
//     bike.push(new Bike(bikeBottom));
//   } else  (i < 4){
//     bike.push(new Bike(bikeMiddle, 192));
//     bikeMiddle += 240;
//   } else {
//     bike.push(new Bike(bikeTop, 129));
//     bikeTop += 190;
//   }
// }

// var bus = [];
//   var busBottom = 540;
//   var busTop = 40;
// for (var i = 0; i < 3; i++) {
//   if (i < 1) {
//     bus.push(new Bus(busBottom));
//   } else {
//     bus.push(new Bus(busTop, 148));
//     busTop += 260;
//   }
// }

// var car = [];
//   var carBottom = 400;
//   var carTop = 200;
// for (var i = 0; i < 3; i++) {
//   if (i < 2) {
//     car.push(new Car(carBottom));
//   } else {
//     car.push(new Car(carTop, 103));
//   } carTop += 140
// }

var water = [];
water.push(startZone, endZone);

var bottomLanes = [];
bottomLanes.push(car, carBaby, carPerson, bus, busPerson, bike, bikeWoman);

var topLanes = [];
topLanes.push(carBoy, carGirl, busBaby, busBoy, bikeBaby, bikeBoy, bikeLeader);

var topLaneSpeeders = [];
topLaneSpeeders.push(bikeMan, bikeGirl);

/////////////////////////////////
function Game() {
  this.animate = function() {
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
    frog.winner(levelComplete, vehicleArray);
    frog.drowns(gameLost);
    vehicleArray.forEach(function(vehicle) {
      frog.detectCollision(vehicle, gameLost);
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

module.exports = Game;
