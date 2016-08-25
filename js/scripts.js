//Business Logic
function Player() {
  this.turnRolls = 0;
  this.gameScore = 0;
}

//
// Player.prototype.rollTurn = function () {
//   if (this.gameTurn = 0) {
//     player1.turnscore();
//   }
//   else {
//     player2.turnScore();
//   }
// }

var player1 = new Player();
var player2 = new Player();
var player1Score = 0;
var player2Score = 0;

var activePlayer = player1;

var roll = function() {
  var current = Math.ceil(Math.random() * 6);
  return current;
}

function swap () {
  if (activePlayer === player1) {
    activePlayer = player2;
  }
  else {
    activePlayer = player1;
  }
}

Player.prototype.playerTurn = function () {
  var lastRoll = roll();
  if (activePlayer === player1) {

    player1.turnScore(lastRoll);
  }
  else {
    player2.turnScore(lastRoll);
  }
  return lastRoll;
}


Player.prototype.turnScore = function (lastRoll) {
  if (lastRoll != 1) {
    // this.gameTurn === true
    this.turnRolls += lastRoll;
  }
  else {
    this.turnRolls = 0;
    swap();
  }
  var rollTotal = this.turnRolls;
  return rollTotal;
}



//user interface Logic
$(document).ready(function() {
  $(".btn-roll").click(function (){
    $("p").remove();
    var diceRoll = activePlayer.playerTurn();
     if (activePlayer === player1) {
       $("#player").append('<p class="player"> Player 1 turn</p>');
     }
     else {
       $("#player").append('<p class="player"> Player 2 turn</p>');
     }

    $("#score").append ('<p class = "score">' + diceRoll + "</p>" );
    $("#turn-score").append ('<p class = "turn-score">' + '<span class =  "score-display">' + 'Round Score: ' + '</span>' + activePlayer.turnRolls + "</p>" );



  });
  $(".btn-hold").click(function () {

    if (activePlayer === player1) {
      player1Score += activePlayer.turnRolls;
      $("#player1-score").append ('<div class = "score-display">' + 'Total score: ' + player1Score + "</div>" );

    }
    else {
      player2Score += activePlayer.turnRolls;
      $("#player2-score").append ('<div class = "score-display">' + 'Total score: ' + player2Score + "</div>" );
    }

     swap();
  });
});
