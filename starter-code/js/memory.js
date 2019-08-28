class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.pickedCards = [];
    // add the rest of the class properties here
  }
  shuffleCards() {
    // let auxCards = [];
    // let suffleCards = []; 
    // let j
    // for (let i = this.cards.lenght - 1; i >= 0; i--) {
    //   j = Math.round(Math.random() * 120);
      
    //   auxCards[j] = this.cards[i];
      
    // }

    // auxCards.map(card => card);

    // console.log(auxCards);
    // // for (i = 0; i < this.cards.lenght; i++) {
    // //   j = Math.round(Math.random() * 120);
      
    // //   auxCards[] = this.cards[i];
      
    // // }

    // console.log(auxCards);
    // auxCards.forEach((card, idx) => {
    //   suffleCards[idx] = card;
    // });
    
    // return suffleCards;
  }
  checkIfPair(card1, card2) {}
  isFinished() {}
}