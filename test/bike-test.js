var assert = require('chai').assert;
var Bike = require('../lib/bike');

describe('Bike', function() {
  it('should be an object', function() {
    var bike = new Bike();
    assert.isObject(bike);
  });

  it('should have a x coordinate of 540 by default', function() {
    var terminator = new Bike();
    assert.equal(terminator.x, 540);
  });

  it('should have a y coordinate of 323 by default', function() {
    var jon = new Bike();
    assert.equal(jon.y, 323);
  });


  it('should have a height of 30 by default', function() {
    var terminator = new Bike();
    assert.equal(terminator.height, 30);
  });

  it('should have a width of 50 by default', function() {
    var jon = new Bike();
    assert.equal(jon.width, 50);
  });

  it('should have a speed of 4.1 by default', function() {
    var jon = new Bike();
    assert.equal(jon.speed, 4.1);

  });

  it('should have a draw function', function(){
    var jon = new Bike();
    assert.isFunction(jon.draw);
  });

  it('should have a moveLeft function', function(){
    var jon = new Bike();
    assert.isFunction(jon.moveLeft);
  });

  it('should decrement the x value by 2.3 if moveLeft is called', function() {
    var bike = new Bike();
    bike.moveLeft();
    assert.equal(bike.x, 537.7);
  });

  it('should place the bike at an x value of 650 if moveLeft is called while bike.x is less than or equal to -50', function() {
    var bike = new Bike(-50);
    bike.moveLeft();
    assert.equal(bike.x, 600);
  });

  it('should have a moveLeftFast function', function(){
    var jon = new Bike();
    assert.isFunction(jon.moveLeftFast);
  });

  it('should decrement the x value by 4.1 if moveLeftFast is called', function() {
    var bike = new Bike();
    bike.moveLeftFast();
    assert.equal(bike.x, 535.9);
  });

  it('should place the bike at an x value of 650 if moveLeftFast is called while bike.x is less than or equal to -50', function() {
    var bike = new Bike(-50);
    bike.moveLeftFast();
    assert.equal(bike.x, 600);
  });

  it('should have a moveRight function', function(){
    var jon = new Bike();
    assert.isFunction(jon.moveRight);
  });

  it('should increment the x value by 2.9 if moveRight is called', function() {
    var bike = new Bike();
    bike.moveRight();
    assert.equal(bike.x, 542.9);
  });

  it('should place the bike at an x value of -40 if moveRight is called while bike.x is less than or equal to 600', function() {
    var bike = new Bike(600);
    bike.moveRight();
    assert.equal(bike.x, -40);
  });
});
