class MemoryGame {
  constructor(cards){
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }
  shuffleCards() {

    /* ejemplo web
    
   var arr = ['A','B','C','D','E','F','G','H']
   var i = arr.length, k , temp;      // k is to generate random index and temp is to swap the values
   while(--i > 0){
      k = Math.floor(Math.random() * (i+1));
      temp = arr[k];
      arr[k] = arr[i];
      arr[i] = temp;
   }
   document.write(arr); */

    for (let i = this.cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
  }
  }
  checkIfPair(card1, card2) {
    this.pairsClicked++
    if (card1 === card2) {
      this.pairsGuessed++
      return true
    } else {
      return false
    }
  }
  isFinished() {
    // if (this.pairsGuessed === 0) {
    //   return false
    // } else if (this.pairsGuessed < 12) {
    //   return false
    // } else if (this.pairsGuessed === 12) {
    //   return true
    // }

    if (this.pairsGuessed == (this.cards.length / 2)) {
      return true
    } else {
      return false
    }
  }
}