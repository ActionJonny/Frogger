var assert = require('chai').assert;
var Car = require('../lib/car');

describe('Car', function() {
  it('should be an object', function() {
    var car = new Car();
    assert.isObject(car);
  });

  it('should have a x coordinate of 540 by default', function() {
    var terminator = new Car();
    assert.equal(terminator.x, 540);
  });

  it('should have a y coordinate of 365 by default', function() {
    var jon = new Car();
    assert.equal(jon.y, 367);
  });

  it('should have a height of 30 by default', function() {
    var terminator = new Car();
    assert.equal(terminator.height, 30);
  });

  it('should have a width of 75 by default', function() {
    var jon = new Car();
    assert.equal(jon.width, 75);
  });

  it('should have a speed of 3 by default', function() {
    var jon = new Car();
    assert.equal(jon.speed, 3);
  });

  it('should have a draw function', function(){
    var jon = new Car();
    assert.isFunction(jon.draw);
  });

  it('should have a moveLeft function', function(){
    var jon = new Car();
    assert.isFunction(jon.moveLeft);
  });

  it('should decrement the x value by 3 if moveLeft is called', function() {
    var car = new Car();
    car.moveLeft();
    assert.equal(car.x, 537);
  });

  it('should place the car at an x value of 600 if moveLeft is called while car.x is less than or equal to -80', function() {
    var car = new Car(-80);
    car.moveLeft();
    assert.equal(car.x, 600);
  });

  it('should have a moveRight function', function(){
    var jon = new Car();
    assert.isFunction(jon.moveRight);
  });

  it('should increment the x value by 3 if moveRight is called', function() {
    var car = new Car();
    car.moveRight();
    assert.equal(car.x, 543);
  });

  it('should place the car at an x value of 600 if moveRight is called while car.x is less than or equal to -80', function() {
    var car = new Car(600);
    car.moveRight();
    assert.equal(car.x, -75);
  });
});
