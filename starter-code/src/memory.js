
class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  

  shuffleCards(cards) {
    let currentCard = this.cards.length;
    while(currentCard !== 0) {
       const randomNumber = Math.floor(Math.random() * currentCard);
       currentCard -= 1;
     }
    // for(let i = card.length - 1; i > 0; i--) {
    //   const j = Math.floor(Math.random() * (i +1));
    //   [card[i], card[j]] = [card[j], card[i]]
    // }
    // return ;
  }

  checkIfPair(ironman, batman) {
    this.pairsClicked = 1;
    if(ironman === batman){
      this.pairsGuessed = 1;
      return true;
    }return false;
  }

  isFinished() {
    if(this.pairsGuessed === (this.cards.length / 2)) {
      return true;
    } return false;
  }

}


