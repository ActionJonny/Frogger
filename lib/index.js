var Frog = require('../lib/frog');
var Car = require('../lib/car');
var Bus = require('../lib/bus');
var Bike = require('../lib/bike');
var Zone = require('../lib/zone');
var Pad = require('../lib/pad');

var canvas = document.getElementById('world');
var ctx = canvas.getContext('2d');
var frog = new Frog();
var car = new Car();
var carBaby = new Car(400);
var carBoy = new Car (200, 103);
var bus = new Bus();
var busBaby = new Bus(300, 148);
var busBoy = new Bus(40,148);
var bike = new Bike();
var bikeBaby = new Bike(480, 192);
var bikeBoy = new Bike(620, 192);
var bikeLeader = new Bike(240, 192);
var bikeMan = new Bike(10, 63);
var bikeGirl = new Bike(200, 63);
var startZone = new Zone();
var midZone = new Zone(5, 245, 590, 10);
var endZone = new Zone(5,5);

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

var water = [];
water.push(startZone, endZone);

var bottomLanes = [];
bottomLanes.push(car, carBaby, bus, bike);

var topLanes = [];
topLanes.push(carBoy, busBaby, busBoy, bikeBaby, bikeBoy, bikeLeader);

var topLaneSpeeders = [];
topLaneSpeeders.push(bikeMan, bikeGirl);

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

requestAnimationFrame(function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  water.forEach(function(area) {
    area.draw(ctx);
  });
  midZone.centerLine(ctx);
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
  frog.winner();
  frog.drowns();
  frog.detectCollision(bus);
  requestAnimationFrame(gameLoop);
});
