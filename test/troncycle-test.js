var assert = require('chai').assert;
var Troncycle = require('../lib/troncycle');

describe('Troncycle', function() {
  it('should be an object', function() {
    var bike = new Troncycle();
    assert.isObject(bike);
  });

  it('should have a x coordinate of 580 by default', function() {
    var terminator = new Troncycle();
    assert.equal(terminator.x, 580);
  });

  it('should have a y coordinate of 370 by default', function() {
    var jon = new Troncycle();
    assert.equal(jon.y, 370);
  });

  it('should have a height of 20 by default', function() {
    var terminator = new Troncycle();
    assert.equal(terminator.height, 20);
  });

  it('should have a width of 60 by default', function() {
    var jon = new Troncycle();
    assert.equal(jon.width, 60);
  });

  it('should have a draw function', function(){
    var jon = new Troncycle();
    assert.isFunction(jon.draw);
  });

  it('should have a moveLeft function', function(){
    var jon = new Troncycle();
    assert.isFunction(jon.moveLeft);
  });

  it('should decrement the x value by 4 if moveLeft is called', function() {
    var bike = new Troncycle();
    bike.moveLeft();
    assert.equal(bike.x, 576);
  });

  it('should place the bike at an x value of 660 if moveLeft is called while bike.x is less than or equal to -60', function() {
    var bike = new Troncycle(-60);
    bike.moveLeft();
    assert.equal(bike.x, 660);
  });

  it('should have a moveRight function', function(){
    var jon = new Troncycle();
    assert.isFunction(jon.moveRight);
  });

  it('should increment the x value by 4 if moveRight is called', function() {
    var bike = new Troncycle();
    bike.moveRight();
    assert.equal(bike.x, 584);
  });

  it('should place the bike at an x value of -60 if moveRight is called while bike.x is less than or equal to 600', function() {
    var bike = new Troncycle(600);
    bike.moveRight();
    assert.equal(bike.x, -60);
  });
});
