var Game = require('../lib/game');

var start = document.getElementById('start-game');
var gameLost = document.getElementById('game-lost');
var gameWon = document.getElementById('game-complete');

var canvas = document.getElementById('world');
var ctx = canvas.getContext('2d');
var game = new Game();

requestAnimationFrame(function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  game.animate();
  requestAnimationFrame(gameLoop);
});

start.addEventListener('click', function() {
  start.style.display='none';
});
