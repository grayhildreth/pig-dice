//back-end business logic

function diceNumber() {
  return Math.floor(Math.random() * (6)) + 1;
}

//constructor

function dicePlayer (name, score, turn) {
  this.name = name;
  this.score = score;
  this.turn = turn;
}

//create new player

var player1 = new Player("Player One", 0, true);
var player2 = new Player("Player Two", 0, false);


//front-end user interface logic

$(document).ready(function() {
  $("form#pig-dice").click(function(event) {


    event.preventDefault();

  });
});
