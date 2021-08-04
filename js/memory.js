class MemoryGame {
  constructor(cards, pickedCards, pairsClicked=0, pairGuessed=0) {
    this.cards = cards;
    this.pickedCards = pickedCards;
    this.pairsClicked = pairsClicked;
    this.pairGuessed = pairGuessed;
    // add the rest of the class properties here
  }
  
  shuffleCards(cards) {
    if(cards.length === 0){
      return null;
    }
    const shuffledCard = cards.map((card,index,array)=>{
      let randomPos = Math.floor(Math.random()*(array.length-index)+index);
      let aux = card[index];
      card = card[randomPos];
      card[randomPos]=aux;
    })

    // ... write your code here
  }

  checkIfPair(card1, card2) {
    if(card1.name === card2.name){
      this.pairsClicked +=1;
      this.pairGuessed +=1;
      return true;
    }else{
      this.pairsClicked +=1;
      return false;
    }
  }

  checkIfFinished() {
    if(this.pairGuessed === 12){
      return true;
    }else{
      return false;
    }
    // ... write your code here
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
