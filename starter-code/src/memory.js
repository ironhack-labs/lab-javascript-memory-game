class MemoryGame {
  pickedCards = [];
  pairsClicked = 0;
  pairsGuessed = 0;
  constructor(cards){
    this.cards = cards;
  }

  shuffleCards() {
    var currentIndex = this.cards.length;
    var tempValue = 0;
    var randomIndex = 0;

    // Recorremos el array
    while (0 !== currentIndex) {
  
      // elegimos un indice aleatoriamente
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // lo cambiammos con el elemento actual 
      tempValue = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = tempValue;
    }  
  };

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if(card1 === card2) {  
      this.pairsGuessed++;
      return true
    }else return false;
  };



  isFinished() {
    if(this.pairsGuessed < this.cards.length / 2 )return false
    else return true;
  };
};