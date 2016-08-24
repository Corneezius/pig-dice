//Business Logic
function Player(roll, score, turn) {
  this.turnRolls = roll;
  this.gameScore = score;
  this.gameTurn = true;
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

var player1 = new Player(0,0,true);
var player2 = new Player(0,0,false);
var roll = function() { var current = Math.ceil(Math.random() * 6); return current; }

Player.prototype.turnScore = function (lastRoll) {
  if (lastRoll != 1 && this.gameTurn === true) {
    this.turnRolls += lastRoll;
  }
  else {
    gameTurn = false;
  }
}



//user interface Logic
$(document).ready(function() {
  $(".btn-roll").click(function (){
    $("p").remove();
    var lastRoll = roll();
    $("#score").append ('<p class = "score">' + lastRoll + "</p>" );


    player1.turnScore(lastRoll)


    console.log(player1.turnRolls);
  });
});
