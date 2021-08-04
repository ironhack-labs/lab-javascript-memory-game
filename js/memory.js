class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here

    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;



  }

  shuffleCards() {
  
    const min = 0;
    const max = this.cards.length;
    let randomNumber;

    this.cards.forEach(() => {

      randomNumber = Math.floor(Math.random() * (max - min)) + min;

      const selectedCard = this.cards[randomNumber];

      this.cards.splice(randomNumber, 1);
      this.cards.push(selectedCard)      
    });

  }


  checkIfPair(cardName1, cardName2) {
    // ... write your code here

    this.pairsClicked += 1;

    if(cardName1 === cardName2) {

      this.pairsGuessed += 1;

        return true;

        
    } 
    return false;
  
  }

  checkIfFinished() {
    // ... write your code here

       return this.cards.length / 2 === this.pairsGuessed;



  } 
   

}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;

if (cardsArray != null && cardsArray !== undefined) {
        
}


//console.log('Olá Mundos');
