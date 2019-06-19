class MemoryGame {
  constructor(card){
    this.cards = cards;
    this.firstGuess = undefined;
    this.secondGuess = undefined;
    this.clicks = 0;
    this.correctGuesses = 0;
  }
  shuffleCards() {
    //shuffle:https://javascript.info/task/shuffle
    this.cards.sort(() => Math.random() - 0.5);
  }
  checkIfPair() {
    if(this.firstGuess.parent().data('cardName') === this.secondGuess.parent().data('cardName')){
      return true;
    }else {
      return false
    }
  }
  isFinished() {
    if(this.correctGuesses === 12){
      return true;
    }else{
      return false;
    }
  }
}