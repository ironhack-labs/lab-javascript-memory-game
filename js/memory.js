class MemoryGame {
  constructor(cards){
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0

  }

  shuffleCards() {

  if (!this.cards){

    return undefined
    
  } 

    let shuffle = []
    let cardsMixed = []

    for(let i = 0; i < this.cards.length; i++){
    shuffle = Math.floor(Math.random() * i + 1)
    cardsMixed = this.cards[i]
    this.cards[i] = this.cards[shuffle]
    this.cards[shuffle] = cardsMixed
    }
  return cardsMixed
  
  }

  checkIfPair(card1, card2) {
    if (card1 === card2){
      this.pairsClicked++
      this.pairsGuessed++
      return true
    }
    else{
      this.pairsClicked++
      return false
    }
  }

  isFinished() {

    if(!this.pairsClicked || this.pairsGuessed < (this.cards.length/2)){
      return false
    }else{
      return true
    }

  }

}