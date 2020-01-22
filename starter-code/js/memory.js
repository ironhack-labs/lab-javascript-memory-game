class MemoryGame {
  constructor(cards){
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    let i = 0;
    let j = 0;
    let temp = null;
    for (i = this.cards.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1));
      temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
  }

  checkIfPair(card1, card2) {

  }

  isFinished() {

  }
}

// var arr = ['A','B','C','D','E','F','G','H']
// function shuffle (array) {
//   var i = 0
//     , j = 0
//     , temp = null

//   for (i = array.length - 1; i > 0; i -= 1) {
//     j = Math.floor(Math.random() * (i + 1))
//     temp = array[i]
//     array[i] = array[j]
//     array[j] = temp
//   }
// }

// shuffle(arr);
