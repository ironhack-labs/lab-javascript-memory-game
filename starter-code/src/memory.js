class MemoryGame {
  constructor (cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.shuffleCards();  //cards are shuffled directly in the beginning
  }
  
  pickedCards() {
  }

  pairsClicked() {
  }

  pairsGuessed() {
  }


  shuffleCards(cards) {
    this.cards.sort(function(a,b){
      return Math.random()-0.5;
    });
  }

  checkIfPair(firstCard, secondCard) {
    this.pairsClicked ++;
    if (firstCard === secondCard) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
      }
  }

  isFinished() {
    if (this.pairsGuessed === this.cards.length/2) {
      return true;
    } else {
      return false;
      }
  }

};

