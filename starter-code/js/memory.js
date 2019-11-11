class MemoryGame {

    constructor(cards){
    this.cards = cards;
    this.pairsClicked=0
    this.pickedCards=[]
    this.pairsGuessed = 0;
    this.cardsGuessed = []
    
        // add the rest of the class properties here
  }


  shuffleCards() {
    let shuffle=[];
  this.cards.forEach((card, i) => {
  let tempCard = card;
  let randomIndexCard = Math.floor(Math.random()*this.cards.length)
  let tempCard2 = this.cards[randomIndexCard];
  this.cards[i] = tempCard2
  this.cards[randomIndexCard] = tempCard;
  })
  }


  checkIfPair(card1, card2) {
    this.pairsClicked++
  if (card1 == card2){
    this.pairsGuessed++
    return true
  }
  return false
  }


  isFinished() {
    if (this.pairsGuessed == this.cards.length/2) {
      return true
    }
    return false
  }
}