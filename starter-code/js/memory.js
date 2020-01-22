class MemoryGame {
  constructor(cards){ // matriz de tarjetas
    this.cards        = cards;
    this.pickedCards  = [];  // matriz == tarjetas clickleadas (para poder compararlas)
    this.pairsClicked = 0;  // elija un par
    this.pairsGuessed = 0;  // saber si a adivinado un par
  }

  shuffleCards() {
    var shuffle = [], count = this.cards.length, i = undefined;

    while(count) {
      i = Math.floor(Math.random() * this.cards.length);

      if (i in cards) {
        shuffle.push(cards[i]);
        delete cards[i];
        count--;
      }
    }

    if(shuffle !== []){
      return shuffle;
    }
    else
      return undefined;

  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;

    if(card1.name === card2.name){
      this.pairsGuessed++;
      return true;
    }
    else
      return false;
  }

  isFinished() {
    if((this.cards.length / 2) == this.pairsGuessed){
      return true;
    }
    else
      return false;
  }
}