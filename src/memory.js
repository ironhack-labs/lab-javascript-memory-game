class MemoryGame {
  constructor(cards) {
    this.cards = cards; //array of cards
    this.pickedCards =[]; //array
    this.pairsClicked =0; //array
    this.pairsGuessed =0; // aray
    // add the rest of the class properties here
  }

  shuffleCards() {

    if (!this.cards) { //this.cards(array) is falsy...
      return undefined;
    }
//last index should be removed after loop  i>0
// since it shouldn't be included in the arry for shuffling!

for (let i=this.cards.length-1; i>0; i--){ 
  
let temp = Math.floor(Math.random() * (i+1)) //
this.cards[i], this.cards[temp] = this.cards[temp], this.cards[i];

// this.cards[temp] = this.cards[i];
// this.cards[i] = this.cards[j];
// this.cards[j] = this.cards[temp] 
  //---> LAST Line: 
  // j array can have i array's original value 
  //since we make temp array = i array on the 1st line
}  
return this.cards; //shoudl return...!
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++
    if (card1.name === card2.name) {
      this.pairsGuessed++
      return true;
    } else {
      return false;
    }
    }
  

  checkIfFinished() {

    if (this.pairsGuessed < (this.cards.length/2) ||this.pairsGuessed===0) 
    { return false; 
    }  else if (this.pairsGuessed === (this.cards.length/2)) {
return true;
    } 
  }
}
