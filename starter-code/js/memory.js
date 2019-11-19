class MemoryGame {
  constructor(cards){
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    } 
  }
  
  checkIfPair(card1, card2) {
    if(card1 === card2){
      this.pairsGuessed++;
      memoryGame.pickedCards = [];
      return true;
    } else {
      this.pairsClicked++;
      setTimeout(() => {
        this.pickedCards[0].classList.remove('turned');
        this.pickedCards[1].classList.remove('turned');
        memoryGame.pickedCards = [];
      }, 1000);
      return false;
    }
  }

  isFinished() {
    if(this.pairsGuessed === 8){
      setTimeout(()=> {
        alert("Congratulations, YOU WON!");
      },1000);
      return true;
    } else {
      return false;
    }
  }
} 
