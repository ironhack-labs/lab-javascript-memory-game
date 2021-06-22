class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairGuessed = 0;
  }

  shuffleCards() {
    if(!this.cards){
      return undefined;
    }

    let arr = this.cards;
    let i = arr.length;
    let j, temp;  
    while (--i > 0) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
    return arr;
  }


  checkIfPair(card1, card2) {
    this.pairsClicked+=1;

    if (card1 === card2) {

      this.pairsGuessed++;
      return true;
    } else {

      return false;
    }

  }

  checkIfFinished() {
   if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    } else {
      return false;
    }

  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
