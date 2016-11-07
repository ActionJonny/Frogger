// var assert = require('chai').assert;
// var Troncycle = require('../lib/troncycle');
//
// describe('Troncycle', function() {
//   it('should be an object', function() {
//     var bike = new Troncycle();
//     assert.isObject(bike);
//   });
//
//   it('should have a x coordinate of 540 by default', function() {
//     var terminator = new Troncycle();
//     assert.equal(terminator.x, 540);
//   });
//
//   it('should have a y coordinate of 323 by default', function() {
//     var jon = new Troncycle();
//     assert.equal(jon.y, 323);
//   });
//
//   it('should have a height of 50 by default', function() {
//     var terminator = new Troncycle();
//     assert.equal(terminator.height, 50);
//   });
//
//   it('should have a width of 30 by default', function() {
//     var jon = new Troncycle();
//     assert.equal(jon.width, 30);
//   });
//
//   it('should have a draw function', function(){
//     var jon = new Troncycle();
//     assert.isFunction(jon.draw);
//   });
//
//   it('should have a moveLeft function', function(){
//     var jon = new Troncycle();
//     assert.isFunction(jon.moveLeft);
//   });
//
//   it('should decrement the x value by 2.8 if moveLeft is called', function() {
//     var bike = new Troncycle();
//     bike.moveLeft();
//     assert.equal(bike.x, 537.2);
//   });
//
//   it('should place the bike at an x value of 650 if moveLeft is called while bike.x is less than or equal to -50', function() {
//     var bike = new Troncycle(-50);
//     bike.moveLeft();
//     assert.equal(bike.x, 650);
//   });
//
//   it('should have a moveLeftFast function', function(){
//     var jon = new Troncycle();
//     assert.isFunction(jon.moveLeftFast);
//   });
//
//   it('should decrement the x value by 3.8 if moveLeftFast is called', function() {
//     var bike = new Troncycle();
//     bike.moveLeftFast();
//     assert.equal(bike.x, 536.2);
//   });
//
//   it('should place the bike at an x value of 650 if moveLeftFast is called while bike.x is less than or equal to -50', function() {
//     var bike = new Troncycle(-50);
//     bike.moveLeftFast();
//     assert.equal(bike.x, 650);
//   });
//
//   it('should have a moveRight function', function(){
//     var jon = new Troncycle();
//     assert.isFunction(jon.moveRight);
//   });
//
//   it('should increment the x value by 4 if moveRight is called', function() {
//     var bike = new Troncycle();
//     bike.moveRight();
//     assert.equal(bike.x, 544);
//   });
//
//   it('should place the bike at an x value of -40 if moveRight is called while bike.x is less than or equal to 600', function() {
//     var bike = new Troncycle(600);
//     bike.moveRight();
//     assert.equal(bike.x, -40);
//   });
// });
