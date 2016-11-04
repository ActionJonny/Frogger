var assert = require('chai').assert;
var Pad = require('../lib/pad');

describe('Pad', function() {
  it('should be an object', function() {
    var pad = new Pad();
    assert.isObject(pad);
  });

  it('should have a x coordinate of 310 by default', function() {
    var terminator = new Pad();
    assert.equal(terminator.x, 310);
  });

  it('should have a y coordinate of 470 by default', function() {
    var jon = new Pad();
    assert.equal(jon.y, 470);
  });

  it('should have a r value of 23 by default', function() {
    var terminator = new Pad();
    assert.equal(terminator.r, 23);
  });

  it('should have a sAngle value of 0 by default', function() {
    var jon = new Pad();
    assert.equal(jon.sAngle, 0);
  });

  it('should have an eAngle value of 2*Math.PI by default', function() {
    var jon = new Pad();
    assert.equal(jon.eAngle, 2*Math.PI);
  });

  it('should have a draw function', function(){
    var jon = new Pad();
    assert.isFunction(jon.draw);
  });
});
