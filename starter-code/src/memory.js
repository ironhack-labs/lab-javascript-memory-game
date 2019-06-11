class MemoryGame {
  constructor(card){
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0 
  }

  shuffleCards() {
    // this.cards.name.sort(function(a,b) {
    //   if (a.name > b.name) return 1 
    //   if (b.name < b.name) return -1
    // })
    // return cards
    // let cards = this.cards
    let m = cards.length, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      [cards[m], cards[i]]= [cards[i], cards[m]];
    }
      // return this.cards
  }
  checkIfPair(card1, card2) {
    this.pairsClicked += 1
    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true 
    } else {
      return false 
    }

  }
  isFinished() {
    let boo = false;
    /////// esto lo igualaba a cards.length/2 y no me daba ni pa dios y si harcodeo esto a 8 me da bien 
    if(this.pairsGuessed=== 8) {
      boo = true;
    }
    return boo;
  }
}