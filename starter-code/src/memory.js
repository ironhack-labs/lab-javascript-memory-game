

var addedClikcs = 0;


class MemoryGame {
  constructor(arrayOfCards) {
    this.cards = arrayOfCards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.shuffleCards();
  }

  shuffleCards() {
    for(let i = 0; i< this.cards.length ;i++) {
      var j = Math.floor(Math.random() *(i+1))
     let a = this.cards[i];
     let b = this.cards[j];
     this.cards[i] = b;
     this.cards[j] = a;
    
    }
   return this.cards;
  }



  checkIfPair(firstCard, secondCard) {
    this.pairsClicked++;
 if(firstCard === secondCard) {
   this.pairsGuessed++;
   return true;
     } else{
      return false;
     }
  }


 isFinished() {
   if(this.pairsGuessed === this.cards.length/(2)) {
     return true;
   } else {
     return false;
   }
 }
 

}