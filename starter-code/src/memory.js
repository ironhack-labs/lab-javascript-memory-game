var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;

};

MemoryGame.prototype.shuffleCards = function () {
   


};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
 
  // añadir 1 a pairsClicked
  this.pairsClicked++;

  // si dos cartas son iguales
  if(firstCard === secondCard){

    this.pairsGuessed ++;

    $(".back").addClass("blocked");
    $(".justClicked").addClass("reallyBlocked");

    $("#pairs_guessed").html(this.pairsGuessed);
    $(".justClicked").removeClass("justClicked");
    $(".back").removeClass("blocked");
  
    // si dos cartas no son iguales
  } else {

    $(".back").addClass("blocked");
    setTimeout(function(){

        $(".justClicked").css("background", "grey");
        $(".justClicked").removeClass("justClicked");
        $(".back").removeClass("blocked");
      }, 1000);

  }
}

MemoryGame.prototype.isFinished = function () {

};