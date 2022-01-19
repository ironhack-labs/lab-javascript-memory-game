class MemoryGame {
  constructor(cards) {
    this.cards = cards
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
    // add the rest of the class properties here
    
  }

  shuffleCards() {
   
    if(cards === undefined) {
      return undefined;
    }     
        //tamaÃ±o del arraycartas
    let numberCard = cards.length,
      randomIndex;

     while (numberCard != 0) { 
        randomIndex = Math.floor(Math.random() * numberCard);
      numberCard--;
       [cards[numberCard], cards[randomIndex]] = [
        cards[randomIndex],
        cards[numberCard]
      ];
    }
    return cards;
  }
  checkIfPair(card1, card2) {
    this.pickedCards ++
    if(card1 == card2) {
      this.pairsGuessed ++
      return true
    } else {
      return false
    }
  }

  checkIfFinished() {
    if(this.pairsGuessed == 12){
      return true
    } else {
      return false
    }
  }
    
  }

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
