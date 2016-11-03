const assert = require('chai').assert;
const Frog = require('../lib/frog');
// const $ = require('jquery');

describe('Frog', function() {
  it('should be an object', function() {
    var jonnyBoy = new Frog();
    assert.isObject(jonnyBoy);
  });

  it('should have a x coordinate of 310 by default', function() {
    var terminator = new Frog();
    assert.equal(terminator.x, 310);
  });

  it('should have a y coordinate of 470 by default', function() {
    var jon = new Frog();
    assert.equal(jon.y, 470);
  });

  it('should have a r value of 15 by default', function() {
    var terminator = new Frog();
    assert.equal(terminator.r, 15);
  });

  it('should have a sAngle value of 0 by default', function() {
    var jon = new Frog();
    assert.equal(jon.sAngle, 0);
  });

  it('should have an eAngle value of 2*Math.PI by default', function() {
    var jon = new Frog();
    assert.equal(jon.eAngle, 2*Math.PI);
  });
  ///////////
  it('should have a draw function', function(){
    var jon = new Frog();
    assert.isFunction(jon.draw);
  });

  it('should have a moveDown function', function(){
    var jon = new Frog();
    assert.isFunction(jon.moveDown);
  });

  it('should have a moveUp function', function(){
    var jon = new Frog();
    assert.isFunction(jon.moveUp);
  });

  it('should have a moveRight function', function(){
    var jon = new Frog();
    assert.isFunction(jon.moveRight);
  });

  it('should have a moveLeft function', function(){
    var jon = new Frog();
    assert.isFunction(jon.moveLeft);
  });
});
