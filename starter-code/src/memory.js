class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = {};
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    let  temporaryValue, randomIndex;
    let currentIndex = this.cards.length;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = this.cards[currentIndex];
    this.cards[currentIndex] = this.cards[randomIndex];
    this.cards[randomIndex] = temporaryValue;

  }

  return this.cards;
  }


  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if(card1 === card2){
      this.pairsGuessed++;
      return true;
    }else{
      return false;
    }

  }
  isFinished() {
    
    if(this.pairsGuessed === 12){
      return true;
    }else{
      return false;
    }
  }
}