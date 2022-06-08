class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.upsideCard = 0;
    // add the rest of the class properties here
  }

  getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
  }

  shuffleCards() {
    if(this.cards === undefined){return undefined};
    let auxCard;
    for(let i = 0; i<this.cards.length ; i++){
       //get random number between i and length
       const r = this.getRandom(i, this.cards.length);
       //swap i and r
       auxCard = { ...this.cards[r]};

       this.cards[r] = {...this.cards[i]};

       this.cards[i] = {...auxCard};

     }
     return this.cards;
  }
  

  checkIfPair(card1, card2) {
    
    this.pairsClicked++;
    const sameCards = card1 == card2;
    if(sameCards){
      this.pairsGuessed ++;
    };

    return sameCards;
  }

  checkIfFinished() {
    return this.pairsGuessed === 12;
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
