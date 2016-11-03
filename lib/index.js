const Frog = require('../lib/frog');
const Car = require('../lib/cars');
const Bus = require('../lib/buses');
const Bike = require('../lib/bikes');
const Zone = require('../lib/zones');
const Pad = require('../lib/pads');


var canvas = document.getElementById('world');
var ctx = canvas.getContext('2d');

var frog = new Frog();
var car = new Car();
var carAlso = new Car(400);
var carBoy = new Car (200, 65);
var bus = new Bus();
var busAlso = new Bus(820);
var busBoy = new Bus(40,120);
var bike = new Bike();
var bikeAlso = new Bike(480, 175);
var bikeBoy = new Bike(3800, 175);
var bikeLeader = new Bike(240, 175);
var startZone = new Zone();
var midZone = new Zone(5, 245, 590, 10);
var endZone = new Zone(5,5);
var pad = new Pad();


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
  startZone.draw(ctx);
  midZone.centerLine(ctx);
  endZone.draw(ctx);
  pad.draw(ctx);
  car.draw(ctx).moveLeft();
  carAlso.draw(ctx).moveLeft();
  carBoy.draw(ctx).moveRight();
  bus.draw(ctx).moveLeft();
  busAlso.draw(ctx).moveLeft();
  busBoy.draw(ctx).moveLeftSlow();
  bike.draw(ctx).moveRight();
  bikeAlso.draw(ctx).moveRightSlow();
  bikeBoy.draw(ctx).moveRightSlow();
  bikeLeader.draw(ctx).moveRightSlow();
  frog.draw(ctx);
  frog.winner();
  frog.detectCollision(bus);
  requestAnimationFrame(gameLoop);
});
