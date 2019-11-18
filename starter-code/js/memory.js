class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    this.cards.sort(() => Math.random() - 0.5)
    // Different sort algoritm
    // for (let i = this.cards.length - 1; i > 0; i--) {
    //   let j = Math.floor(Math.random() * (i + 1));
    //   [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    // }
  }
  
  checkIfPair(card1, card2) {
    this.pairsClicked += 1
    if (card1.getAttribute('data-card-name') == card2.getAttribute('data-card-name')) {
       this.pairsGuessed += 1
       console.log('this is a pair')
       return true
    } else return false
  }
  isFinished() {
    if(this.pairsGuessed == Number(this.cards.length / 2 )) return true
    else return false
  }
}