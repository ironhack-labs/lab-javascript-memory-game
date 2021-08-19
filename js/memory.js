class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsGuessed = 0;
    this.pairsClicked = 0;
    // add the rest of the class properties here
  }

  shuffleCards() {
   /*
    if(!this.random){
      return undefined;
    }
    else{

      let copyCards = [...cards];
      let auxArr = [];
      let count = 0;

      while (copyCards.length != 0){

        let rd = Math.floor(this.copyCards.length*Math.random());

        auxArr.push(copyCards[rd]);

        copyCards.splice(rd, 1);
        
        this.cards[count] = Arr[count];

        count++;

      }
    }
    return this.cards
  */
    // ... write your code here
    if (!this.cards) {
      return undefined;
    } else {
      this.cards.length -= 1;
      return Math.floor(Math.random() * this.cards.length) +1;
      };
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    // ... write your code here
    

    if(card1 === card2){

      this.pairsGuessed++;
      return true;
    }
    else{
      return false;
    }
  
  }

  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed == 0 || this.pairsGuessed < this.cards.length/2){
      return false;
    }
    else{

      return true;
    }

  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
