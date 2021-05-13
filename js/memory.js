class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
   /*Fisher yates algorithm
    const shuffleArray = array => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }*/
  }

  checkIfPair(card1, card2) {
    if (card1 === card2){
      this.pairsGuessed++;
      this.pairsClicked++;
      return true;
    } else {
      this.pairsClicked++;
      return false;
    }

  }
  isFinished() {}
}