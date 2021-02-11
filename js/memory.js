// export 
class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards  = [] ;
    this.pairsClicked = 0 ;
    this.pairsGuessed = 0 ;
  }

  shuffleCards() {
    const hat = [...this.cards] ;
    this.cards = [] ;

    let card ;
    while (hat.length > 0) {
      card = hat.splice(Math.floor(Math.random()*hat.length),1 )[0] ;
      this.cards.push( card )
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++
    if(card1 === card2) {
      this.pairsGuessed++ ;
      return true ;
    } else {
      return false ;
    }
  }

  isFinished() {
    return 2*this.pairsGuessed === this.cards.length ;
  }

  resetGame() {
    this.pairsClicked = 0 ;
    this.pairsGuessed = 0 ;
    this.shuffleCards() ;
  }

}