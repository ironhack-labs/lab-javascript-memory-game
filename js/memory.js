/*he game logic for this game is pretty simple:

we need a MemoryGame class,
we need a method to shuffle cards,
we need a method to compare cards, and
we need a method to check if the game is finished.
Side note: We will make a single-player version of the game, which will simplify some of the logic.

Let's do this step by step.*/
class MemoryGame {
  constructor(cards) {
    //it receives an array of cards and we store it to this.cards
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }

  shuffleCards() {
    // ... write your code here
    if(this.cards===undefined){
      return undefined
    }
    const shuffledArray = this.cards.sort((a, b) => 0.5 - Math.random());
    return shuffledArray
  }

  checkIfPair(card1, card2) {
    
     this.pairsClicked+=1
     
     if(card1 === card2){
      this.pairsGuessed +=1
      return true
      }else {
       return false
     }
/**  if(card1.name.localeCompare(card2.name) === 0){
      this.pairsGuessed +=1
      return true
      }else {
       return false
     }
 */

    /*Finally, we need to make sure our game ends, and for 
    that, we can add some logic to the checkIfFinished() 
    method. Here we need to check if our property 
    pairsGuessed has reached the numbers of pairs the game has.*/

  }

  checkIfFinished() {
    // ... write your code here
    if(this.pairsGuessed === this.cards.length/2){
      return true
    }
    else{
      return false
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
