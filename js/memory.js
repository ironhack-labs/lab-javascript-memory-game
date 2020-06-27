class MemoryGame {
  constructor(cards){
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.numberOfCards = cards.length;  //24 
  }
  shuffleCards() {
    let randomCard;
    let newArr = []
    for (let i = 0; i<this.numberOfCards; i++) {
      randomCard = Math.floor(Math.random() * this.cards.length);
      newArr.push(this.cards[randomCard]);
      this.cards.splice(randomCard,1);
      //console.log("i:", i, "Rand:", randomCard, " Length:", this.cards.length);
    }
    this.cards = newArr;
  }
  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    }return false;
  }
  isFinished() {
    return this.pairsGuessed === this.numberOfCards / 2 ? true : false;
    }
  }