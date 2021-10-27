class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;

  }

  pushPickedCardToArray (card){
    this.pickedCards.push(card);
  }


  checkCardsClicked (){
    if (this.pickedCards.length == 2){
       let isItAPair = this.checkIfPair(this.pickedCards[0].getAttribute("data-card-name"),this.pickedCards[1].getAttribute("data-card-name"));
       return isItAPair;
     } 
  }
    
  getPickedCards (){
    return this.pickedCards;
  }

  clearPickedCards() {
    this.pickedCards = [];
  }

  shuffleCards() {
    if (this.cards){
      const shuffledCards = this.cards.sort((a, b) => 0.5 -Math.random());
      return shuffledCards;
    } 
  }


  checkIfPair(card1, card2) {
    ++this.pairsClicked;
    if (card1 === card2){
      ++this.pairsGuessed;
      return true;
    } else {
      return false;
    }
  }


  checkIfFinished() {
   return this.pairsGuessed === this.cards.length/2 ? true : false;
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
