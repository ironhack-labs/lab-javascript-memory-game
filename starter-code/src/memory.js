// var MemoryGame = function (cards) {
//   this.cards = cards;
// };

class MemoryGame{
  constructor(cards){
    this.cards = cards
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards(cards) {
      var j, x, i;
      for (i = cards.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          x = cards[i];
          cards[i] = cards[j];
          cards[j] = x;
      }
      return cards;

  }

  checkIfPair(firstCard, secondCard ){
    this.pairsClicked += 1
    if(firstCard === secondCard){
      // this.pairsClicked += 1
      this.pairsGuessed += 1
      return true
    }else{

      return false
    }
  }
  isFinished(){
    if(this.pairsGuessed === 8){
      return true
    }else{
      return false
    }
  }

  updateScore(){
    var x = this.pairsClicked
    $('#pairs_clicked').html(x)
    var y = this.pairsGuessed
    $('#pairs_guessed').html(y)
  }

}
