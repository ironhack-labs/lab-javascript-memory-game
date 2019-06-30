class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    var currIndex = this.cards.length, temp, randomIndex;

    while (currIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currIndex);
      currIndex -= 1;
      temp = this.cards[currIndex];
      this.cards[currIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = temp;
    }
  }

checkIfPair(card1, card2) {
if(card1 === card2){
  this.pairsGuessed++;
  this.pairsClicked++;
  console.log("PAIR");
  $('#pairs_guessed').html(this.pairsGuessed);
  $('#pairs_clicked').html(this.pairsClicked);
      return true;
}else{
  this.pairsClicked++;
  $('#pairs_clicked').html(this.pairsClicked);
  return false;
}

}

isFinished() {
    if(this.pairsGuessed === this.cards.length / 2){
      return true;
    }else{
      return false;
    }

  }

}

