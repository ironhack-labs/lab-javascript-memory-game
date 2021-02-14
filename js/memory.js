export class MemoryGame {
   constructor(cards) {
     this.cards = cards;
     this.pickedCards = [];
     this.pairsClicked = 0;
     this.pairsGuessed = 0;
   }

   shuffleCards(cardsArr) {
     cardsArr = this.cards;
     for (let i = cardsArr.length - 1; i > 0; i--) {
       let j = Math.floor(Math.random() * (i + 1));
       let temp = cardsArr[i];
       cardsArr[i] = cardsArr[j];
       cardsArr[j] = temp;
     }
     return cardsArr;
   }

  //  shuffleCards() {
  //    let shuffledStack = [];
  //    console.log(shuffledStack)
  //    for (let i = 0; i < this.cards.length; i++) {
  //      let j = Math.floor(Math.random()*i);
  //      let temp = this.cards[j];
  //      this.cards[j] = this.cards[i];
  //      this.cards[i] = temp;

  //      shuffledStack.push(this.cards[j]);
  //    }
  //    console.log(shuffledStack)
  //    return shuffledStack;
  //  }


   checkIfPair(card1, card2) {
     this.pairsClicked++;
     if (card1 === card2) {
      this.pairsGuessed++;
      return true;
     } else {
      return false
     }
   }

   isFinished() {
     if ( this.cards.length / 2 === this.pairsGuessed) {
       return true;
     }
     return false;
   }
 }