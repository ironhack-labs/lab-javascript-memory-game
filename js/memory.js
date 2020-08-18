class MemoryGame {
  constructor(cards){
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards(cards) {
    // implementation of Fisher and Yates Algorithem
    if(!cards || cards.length === 0) return undefined;

    const shaffled = JSON.parse(JSON.stringify(cards));
    for(let i = shaffled.length-1; i > 1; i--) {
      let j = Math.round(Math.random() * i);

      let tempCard = shaffled[i];
      shaffled[i] = shaffled[j];
      shaffled[j] = tempCard;
    }

    return shaffled;
  }

  checkIfPair(card1, card2) {
    if(!card1 || !card2) return false;

    this.pairsClicked++;
    if(card1 === card2) this.pairsGuessed++;
    
    return (card1 === card2);
  }

  isFinished() {
    return this.pairsGuessed >= cards.length;
  }

}