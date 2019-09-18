class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }
  shuffleCards() {
	for (let i = 0; i<this.cards.length; i += 1) {
	    let position = Math.floor(Math.random()*this.cards.length)
	    let temp = this.cards[i]
	    let current = this.cards[position]
	    this.cards[i] =  current
	    this.cards[position] = temp
	}
  }
  checkIfPair(card1, card2) {
  	if (card1 == card2) {
  		this.pairsGuessed += 1
  		return true
  	} else {
  		this.pairsClicked += 1
  		return false
  	}
  }
  isFinished() {
  	if (this.pairsGuessed >= (this.cards.length/2)) {
  		return true
  	} else {
  		return false
  	}
  }
}