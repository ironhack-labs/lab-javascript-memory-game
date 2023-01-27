export class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0
  }

  shuffleCards() {
    // ... write your code here
    let newArr;

    if (this.cards) {
      newArr = JSON.parse(JSON.stringify(this.cards));
      let currentIndex = this.cards.length;
      let randomIndex;
      while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random()*currentIndex);
        currentIndex--;
        [newArr[currentIndex], newArr[randomIndex]] = [newArr[randomIndex], newArr[currentIndex]]
      }
      this.cards = newArr;
      return this.cards;
    }
    return newArr;
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked += 1
    
    if (card1 === card2) {
      this.pairsGuessed +=1
      return true;
    } 
    
    return false; 
  }

  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed === this.cards.length/2) {
      return true
    }
    return false
  }
}