var assert = require('chai').assert;
var Bus = require('../lib/bus');

describe('Bus', function() {
  it('should be an object', function() {
    var bus = new Bus();
    assert.isObject(bus);
  });

  it('should have a x coordinate of 540 by default', function() {
    var terminator = new Bus();
    assert.equal(terminator.x, 540);
  });

  it('should have a y coordinate of 280 by default', function() {
    var jon = new Bus();
    assert.equal(jon.y, 280);
  });

  it('should have a height of 30 by default', function() {
    var terminator = new Bus();
    assert.equal(terminator.height, 30);
  });

  it('should have a width of 120 by default', function() {
    var jon = new Bus();
    assert.equal(jon.width, 120);
  });

  it('should have a speed of 2.2 by default', function() {
    var jon = new Bus();
    assert.equal(jon.speed, 2.2);
  });

  it('should have a draw function', function(){
    var jon = new Bus();
    assert.isFunction(jon.draw);
  });

  it('should have a moveLeft function', function(){
    var jon = new Bus();
    assert.isFunction(jon.moveLeft);
  });

  it('should decrement the x value by 1.5 if moveLeft is called', function() {
    var bus = new Bus();
    bus.moveLeft();
    assert.equal(bus.x, 538.5);
  });

  it('should place the bus at an x value of 620 if moveLeft is called while bus.x is less than or equal to -120', function() {
    var bus = new Bus(-120);
    bus.moveLeft();
    assert.equal(bus.x, 600);
  });

  it('should have a moveRight function', function(){
    var jon = new Bus();
    assert.isFunction(jon.moveRight);
  });

  it('should increment the x value by 1.5 if moveRight is called', function() {
    var bus = new Bus();
    bus.moveRight();
    assert.equal(bus.x, 541.5);
  });

  it('should place the bus at an x value of -120 if moveRight is called while bus.x is less than or equal to 700', function() {
    var bus = new Bus(700);
    bus.moveRight();
    assert.equal(bus.x, -120);
  });
});
