class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.pickedCards= [];
    // add the rest of the class properties here
  }

  shuffleCards() {
    if(this.cards){

    const array= this.cards;
    let copy = [];
    let n = array.length;
    let i;

    while (n) {
    // Pick a remaining element…
      i = Math.floor(Math.random() * n--);

      copy.push(array.splice(i, 1)[0])
    }
    return copy;
    }else {
      return undefined
    }
}

  checkIfPair(card1, card2){
    // ... write your code here
  this.pairsClicked ++
  if (card1 === card2){
    this.pairsGuessed ++
    return true
  }else{
    return false
  }
}

  checkIfFinished(){
    // ... write your code here
    if (this.pairsGuesses === 12){
      return true
      }else{
    return false
  }
}
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
