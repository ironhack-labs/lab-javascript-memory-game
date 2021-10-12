class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0;
    this.pairsGuessed = 0;

    // add the rest of the class properties here
  }


//Write down the numbers from 1 through N.
//Pick a random number k between one and the number of unstruck numbers remaining (inclusive).
//Counting from the low end, strike out the kth number not yet struck out, and write it down at the end of a separate list.
//Repeat from step 2 until all the numbers have been struck out.
//The sequence of numbers written down in step 3 is now a random permutation of the original numbers.
  

shuffleCards() {
  if(!this.cards){
    return undefined
  }

   const suffleArray = cards => {
     for(let i= cards.length - 1; i>0; i--) {
       const j= Math.floor(Math.random()*(i+1))
       const temp = cards[i];
       cards[i] = cards[j];
       cards[j] = temp;
     
     }
   }
   suffleArray(this.cards)
  }


  checkIfPair(card1, card2) {
    this.pairsClicked = this.pairsClicked +1
    if (card1=== card2) {
      this.pairsGuessed=this.pairsGuessed+1;
      return true
    }
    return false
  }

  checkIfFinished() {
    return this.pairsGuessed === this.cards.length/2
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
