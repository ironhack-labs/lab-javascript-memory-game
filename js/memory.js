class MemoryGame {
  constructor(cards, pickedCards, pairsGuessed, pairsClicked) {
    this.cards = cards;
    this.pickedCards = pickedCards;
    this.pairsClicked  = pairsClicked;
    this.pairsGuessed = pairsGuessed;
    // add the rest of the class properties here
  }

  shuffleCards() {
    // ... write your code here
  }

  checkIfPair(card1, card2, pairPickedCards) {


    if (card1.attributes[1].value === card2.attributes[1].value){
      pairPickedCards.pop()
      pairPickedCards.pop()
      return true
    } else {
        setTimeout(() => {
          card1.classList.remove('turned')  
          card2.classList.remove('turned')
          pairPickedCards.pop()
          pairPickedCards.pop()
        }, 500); 
        return false
    }

  }

  checkIfFinished() {
    // ... write your code here
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
