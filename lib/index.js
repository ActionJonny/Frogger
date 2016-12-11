var Game = require('../lib/game');
var start = document.getElementById('start-game');

var canvas = document.getElementById('world');
var ctx = canvas.getContext('2d');
var game = new Game();

var winnerName = document.getElementById('name-input');
var submitBtn = document.getElementById('winner-btn');
var thankYou = document.getElementById('thank-you');


requestAnimationFrame(function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  game.animate();
  requestAnimationFrame(gameLoop);
});

start.addEventListener('click', function() {
  start.style.display='none';
});

//Firebase amazingness
var config = {
  apiKey: "AIzaSyAl4Ge0Gt-MdeJMe7CVWAisyLmxkJ6hE6M",
  authDomain: "froggerhighscore.firebaseapp.com",
  databaseURL: "https://froggerhighscore.firebaseio.com",
  storageBucket: "froggerhighscore.appspot.com",
  messagingSenderId: "1008096789933"
};
firebase.initializeApp(config);
var database = firebase.database();

var ref = database.ref('names');
ref.on('value', gotData, errData);

function gotData(data) {
  var names = data.val();
  var keys = Object.keys(names);
  for(var i = 0; i < keys.length; i++) {
    var k = keys[i];
    var name = names[k].name;
    console.log(name);
  }
}

function errData(data) {
  console.log('Error!!!');
  console.log(err);
}



submitBtn.addEventListener('click', function() {
  submitName();
  this.style.display = 'none';
  winnerName.style.dislay = 'none';
  thankYou.innerHTML = 'Thank You!';
});

function submitName() {
  var data = {
    name: winnerName.value
  };
  var ref = database.ref('names');
  ref.push(data);
}
