var MemoryGame = function (cards) {
  this.cards = cards;
  this.currentPair = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};


/*
// will take the ordered array of cards and shuffles them
// code adapted from the answer here https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
*/
MemoryGame.prototype.shuffleCard = function (cardsArr) {
  var currentIndex = cardsArr.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = cardsArr[currentIndex];
    cardsArr[currentIndex] = cardsArr[randomIndex];
    cardsArr[randomIndex] = temporaryValue;
  }

  return cardsArr;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  $('.back').addClass('blocked');
  this.pairsClicked++;
  $('#pairs_clicked').text(this.pairsClicked);
  if(firstCard === secondCard){
    this.pairsGuessed++;
    $('#pairs_guessed').text(this.pairsGuessed);
    $('.just-clicked').removeClass('just-clicked');
    $('.back').removeClass('blocked');
    if(this.finished()){
      alert("CONGRATULATIONS!!! Refresh the game to start over.")
    }
  }
  else{
    var explode = function(){
      $('.just-clicked').parent().children().toggleClass("front back");
      $('.just-clicked').removeClass('just-clicked');
      $('.back').removeClass('blocked');
    };
    setTimeout(explode, 2000);
  }
  this.currentPair = [];
}

MemoryGame.prototype.finished = function () {
  totalPairs = this.cards.length / 2;
  if(this.pairsGuessed < totalPairs){
    return false;
  }
  else{
    return true;
  }
};


