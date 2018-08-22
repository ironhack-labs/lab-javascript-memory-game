// var MemoryGame = function (cards) {
//   this.cards = cards;
// };

class MemoryGame {
  
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards(cards) {
    var j, x, i;
    for (i = cards.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = cards[i];
        cards[i] = cards[j];
        cards[j] = x;
    }
    return cards;

  }

  checkIfPair(firstCard, secondCard) {


    this.pairsClicked++;


    if (firstCard === secondCard) {
      this.pairsGuessed++;
      console.log(this.pairsClicked, this.pairsGuessed)
      return true;
    } else {
      console.log(this.pairsClicked, this.pairsGuessed)
      return false;
  }
}

  isFinished() {
    if (this.pairsGuessed === 12) {
      return true;
    } else {
      return false;
    }
  }

  
}