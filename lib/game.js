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
// var car = new Car();
// var carPerson = new Car(170);
// var carBaby = new Car(325);
// var carBoy = new Car(200, 103);
// var carGirl = new Car(450, 103);
// var bus = new Bus();
// var busPerson = new Bus(200);
// var busBaby = new Bus(300, 148);
// var busBoy = new Bus(40,148);
// var bike = new Bike();
// var bikeWoman = new Bike(250);
// var bikeBaby = new Bike(480, 192);
// var bikeBoy = new Bike(620, 192);
// var bikeLeader = new Bike(240, 192);
// var bikeMan = new Bike(10, 63);
// var bikeGirl = new Bike(200, 63);
var startZone = new Zone();
var midZone = new Zone(5, 245, 590, 10);
var endZone = new Zone(5,5);

var vehicleArray = [];
vehicleArray.push();

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

var bikes = [];
  var firstX = 250;
  var nextX = 240;
  var thirdX = 10;
  for (var i = 0; i < 7; i++) {
    if (i < 2) {
      bikes.push(new Bike(firstX));
      firstX -= 290;
    } else if (i < 5){
      bikes.push(new Bike(nextX, 192));
      nextX -= 120;
      } else {
      bikes.push(new Bike(thirdX, 63));
      thirdX += 190;
    }
}

var buses = [];
var firstX = 540;
var secondX = 40;
  for (var i = 0; i < 5; i++) {
   if (i < 2) {
     buses.push(new Bus(firstX));
     firstX -= 240;
   } else {
     buses.push(new Bus(secondX, 148));
     secondX += 320;
   }
 }

 var cars = [];
 var firstX = 400;
 var secondX = 200;
  for (var i = 0; i < 6; i++) {
    if (i < 3) {
      cars.push(new Car(firstX));
      firstX -= 255;
    } else {
      cars.push(new Car(secondX, 103));
    } secondX += 240;
  }

  var vehicleArray = [];
   for(var i = 0; i < cars.length; i++) {
     vehicleArray.push(cars[i])
 }
    for(var j = 0; j < buses.length; j++) {
      vehicleArray.push(buses[j])
 }
    for(var k = 0; k < bikes.length; k++) {
      vehicleArray.push(bikes[k])
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
    water.forEach(function(area) {
      area.draw(ctx);
    });
    midZone.drawCenterLine(ctx);
    pads.forEach(function(pad) {
      pad.draw(ctx);
    });
    // bikes[0].draw(ctx).moveRight();
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
