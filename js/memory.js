class MemoryGame {
  constructor(cards, pickedCards, pairsClicked, pairsGuessed) {
    this.cards = cards
    // add the rest of the class properties here
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards(cards = undefined) {
    let shuffledCards = []

    if (0 !== cards.length) {

      for (let i = 0; i < cards.length; i++) {

        cards[i] = cards[Math.floor((Math.random() * cards.length))]

        shuffledCards.push(cards[i])

      }

      return shuffledCards

    } else {
      return undefined
    }

  }
  //   for(i = 0; i < cards.length; i++) {
  //   var count = 0;
  //   for (var j = 0; j < Math.floor(Math.random() * cards.length); j++) {
  //     count++;
  //   }
  //   console.log(count);
  // }


  //   for(let i = 0; i < arr.length; i++) {
  //    {
  //     console.log(arr[j]);
  //   }
  // }


  //   for (let i=0; i<cards.length; i++) {
  //     cards[i] = i
  //   } 

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
    if (this.pairsGuessed === (this.cards.length / 2)) {
      return true
    } else {
      return false
    }
  }
}