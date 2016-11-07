var assert = require('chai').assert;
var Frog = require('../lib/frog');
var canvas = new Canvas();

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

  it('should have a draw function', function(){
    var jon = new Frog();
    assert.isFunction(jon.draw);
  });

  it('should have a moveDown function', function(){
    var jon = new Frog();
    assert.isFunction(jon.moveDown);
  });

  it('should increase the y value by 44 if moveDown is called', function(){
    var jon = new Frog(0, 100);
    jon.moveDown(canvas);
    assert.equal(jon.y, 144);
  });

  it('should have a moveUp function', function(){
    var jon = new Frog();
    assert.isFunction(jon.moveUp);
  });

  it('should decrease the y value by 44 if moveUp is called', function(){
    var jon = new Frog(0, 100);
    jon.moveUp(canvas);
    assert.equal(jon.y, 56);
  });

  it('should have a moveRight function', function(){
    var jon = new Frog();
    assert.isFunction(jon.moveRight);
  });

  it('should increase the x value by 80 if moveRight is called', function(){
    var jon = new Frog();
    jon.moveRight(canvas);
    assert.equal(jon.x, 390);
  });

  it('should have a moveLeft function', function(){
    var jon = new Frog();
    assert.isFunction(jon.moveLeft);
  });

  it('should decrease the x value by 80 if moveLeft is called', function(){
    var jon = new Frog();
    jon.moveLeft(canvas);
    assert.equal(jon.x, 230);
  });

  it('should have a winner function', function(){
    var jon = new Frog();
    assert.isFunction(jon.winner);
  });

  it('should have a drowns function', function(){
    var jon = new Frog();
    assert.isFunction(jon.drowns);
  });

  // it('should return the frog to the start if it drowns', function(){
  //   var jon = new Frog(120, 30);
  //   var adam = new Frog(270, 30);
  //   var wilbur = new Frog(420, 30);
  //   jon.drowns(gameLost);
  //   adam.drowns(gameLost);
  //   wilbur.drowns(gameLost);
  //   assert.equal(jon.x, 310);
  //   assert.equal(jon.y, 470);
  //   assert.equal(adam.x, 310);
  //   assert.equal(adam.y, 470);
  //   assert.equal(wilbur.x, 310);
  //   assert.equal(wilbur.y, 470);
  //
  // });

  it('should have a detectCollision function', function(){
    var jon = new Frog();
    assert.isFunction(jon.detectCollision);
  });

  // it('should return the frog to the start if it gets hit by a vehicle', function() {
  //
  // })
});

////////////
function Canvas(height, width) {
  this.height = 500;
  this.width = 600;
}
