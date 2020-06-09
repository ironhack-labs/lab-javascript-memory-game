class MemoryGame {
  constructor(cards){
    this.cards = cards
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1))
      let temp = this.cards[i]
      this.cards[i] = this.cards[j]
      this.cards[j] = temp
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked +=1
    if (card1 === card2){
      this.pairsGuessed +=1
      return true
    }else{
      return false
    }
  }

  isFinished() {

    if (this.pairsGuessed < this.cards.length/2){ //Con 12, que en teoría es la mitad de la longitud del array, no nos lo pone en verde Jasmine

      return false
  
    }else{

      return true
    }

  }

}