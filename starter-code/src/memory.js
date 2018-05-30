var MemoryGame = function (cards) {
  this.cards = this.shuffleCard(cards);
    // this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};


MemoryGame.prototype.shuffleCard = function (cardsArr) {

    var copy = [], n = cardsArr.length, i;
    // While there remain elements to shuffle…
    while (n) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * cardsArr.length);
  
      // If not already shuffled, move it to the new cardsArr.
      if (i in cardsArr) {
        copy.push(cardsArr[i]);
        delete cardsArr[i];
        n--;
      }
    }
    return copy;
};


MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked += 1;
  $("#pairs_clicked").text(this.pairsClicked);
  console.log("clicked ", this.pairsClicked);
  this.pickedCards = [];
  if (firstCard == secondCard) {
    this.pairsGuessed += 1;
    $("#pairs_guessed").text(this.pairsGuessed);
    console.log("guessed ", this.pairsGuessed)
    console.log('same!')
    return true
  }
  return false
}


MemoryGame.prototype.finished = function () {
  return (this.pairsGuessed > 0 && this.pairsGuessed < 12)
};
