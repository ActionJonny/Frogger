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
    assert.equal(jon.y, 365);
  });

  it('should have a height of 75 by default', function() {
    var terminator = new Car();
    assert.equal(terminator.height, 75);
  });

  it('should have a width of 30 by default', function() {
    var jon = new Car();
    assert.equal(jon.width, 30);
  });

  it('should have a draw function', function(){
    var jon = new Car();
    assert.isFunction(jon.draw);
  });
});
