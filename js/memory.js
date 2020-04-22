class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    if (this.cards === undefined){
      return undefined;
    }
    let j = 0;
    for (let i =this.cards.length-1; i >= 1; i--) {
      j = Math.floor(Math.random()* i);
      let subs = this.cards[j];
      this.cards[j] = this.cards[i];
      this.cards[i] = subs;
    }
    return this.cards;
  }
    checkIfPair(card1, card2) {
      this.pairsClicked++;
      if (card1 === card2){
        this.pairsGuessed++;
      }
      return card1 === card2;
    }
    isFinished() {
      return this.pairsGuessed === (this.cards.length)/2;
    }
  }