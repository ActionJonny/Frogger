var assert = require('chai').assert;
var Zone = require('../lib/zone');

describe('Zone', function() {
  it('should be an object', function() {
    var zone = new Zone();
    assert.isObject(zone);
  });

  it('should have a x coordinate of 5 by default', function() {
    var terminator = new Zone();
    assert.equal(terminator.x, 5);
  });

  it('should have a y coordinate of 445 by default', function() {
    var jon = new Zone();
    assert.equal(jon.y, 445);
  });

  it('should have a height of 590 by default', function() {
    var terminator = new Zone();
    assert.equal(terminator.height, 590);
  });

  it('should have a width of 50 by default', function() {
    var jon = new Zone();
    assert.equal(jon.width, 50);
  });

  it('should have a draw function', function(){
    var jon = new Zone();
    assert.isFunction(jon.draw);
  });

  it('should have a drawCenterLine function', function(){
    var jon = new Zone();
    assert.isFunction(jon.drawCenterLine);
  });
});
