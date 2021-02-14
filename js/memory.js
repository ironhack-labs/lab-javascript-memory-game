class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }
  shuffleCards(shuffle) {
    for (let i = this.cards.length - 1; i > 0; i--) {
      let randomInd = Math.floor(Math.random() * (i+1));
      let temp = this.cards[i];
      this.cards[i] = this.cards[randomInd];
      // console.log(‘temp’);
      // console.log(temp);
      // console.log(‘cards[i] replaced at random index’);
      // console.log(this.cards[i]);
      this.cards[randomInd] = temp;
    }
    // this.cards[0] = 1;
    // console.log(this.cards[0]);
    console.log(this.cards);
  }


    checkIfPair(card1, card2) {
      this.pairsClicked++
      if (card1 == card2) {
        this.pairsGuessed++
        return true
      } return false
    }

    isFinished() {
      if (this.cards.length = 0) {
        return true
      } else {
        return false
      }
    }
    }