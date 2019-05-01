class MemoryGame {
  constructor(card){
    this.cards = card;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }
  shuffleCards() {
    let array = this.cards
    var copy = [], n = array.length, i;
    // While there remain elements to shuffle…
    while (n) {

      // Pick a remaining element…
      i = Math.floor(Math.random() * array.length);

      // If not already shuffled, move it to the new array.
      if (i in array) {
        copy.push(array[i]);
        delete array[i];
      }
      n--;  
    }
  }

  checkIfPair(card1, card2) {

    this.pairsClicked++

    if (card1 == card2) { 
      this.pairsGuessed++ 
      return true
    }
    console.log(this.pairsClicked, this.pairsGuessed)
    return false

  }
  isFinished() {
    console.log(this.cards)
    // return this.pairsGuessed == this.cards.length/2
    console.log(this.pairsGuessed, this.cards.length)
    if (this.pairsGuessed == this.cards.length/2) 
    { 
      return true 
    }
    return false
  }

}