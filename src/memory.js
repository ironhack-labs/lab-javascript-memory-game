class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    // ... write your code here
  }

  checkIfPair(card1, card2) {
    this.pairsClicked +=1;
    if (card1 == card2) {
      this.pairsGuessed +=1;
      return true;
      }
    else return false;
  }

  checkIfFinished() {
    return (this.pairsGuessed == (this.cards.length / 2));
  
  } 

}

    
    //function finished() {
      //let result1 = false;
      //if (this.pairsClicked === (this.pickedCards.length) / 2) result1 = true;
      //return result1;
  //}
  //function notFinished() {
      //let result2 = false;
      //if (this.pairsClicked !== (this.pickedCards.length) / 2) result2 = true;
      //return result2;
  //}
  
  //let firstResult = finished(),
     //secondResult = notFinished();
  
     //if(firstResult && secondResult) {
  
    
    
    //const result = false
    //const winner = (this.pairsClicked === (this.pickedCards.length) / 2);
    //const notFinished = 
   // if (winner) {return true}
   // else {return false}
  



  
//}

//}