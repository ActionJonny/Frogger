var Game = require('../lib/game');

var start = document.getElementById('start-game');
var game = new Game();
var canvas = document.getElementById('world');
var ctx = canvas.getContext('2d');

requestAnimationFrame(function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  game.animate();
  requestAnimationFrame(gameLoop);
});

start.addEventListener('click', function() {
  start.style.display='none';
});
