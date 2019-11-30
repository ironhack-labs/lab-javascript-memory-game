class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    let mixedCards = [];
    function shuffle(array){
      array.sort(() => Math.random() - 0.5)
    }
    if (this.cards.length <= 0){
      //mixedCards = shuffle(this.cards);
      //console.log(mixedCards);
      return shuffle(this.cards);
    }
  }
  
  checkIfPair(card1, card2) {}
  isFinished() {}
}