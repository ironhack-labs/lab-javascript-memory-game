// Juego Memorma

class MemoryGame {
  constructor(card){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards(cardsArr) {
    var i, j;
    for (i = cardsArr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
      
       
    }
    return; 
  }
  checkIfPair(card1, card2) {}
  isFinished() {}
}