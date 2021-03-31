class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.firstCardClicked = false;
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards = ()=>{
    for(let i = this.cards.length -1; i>0; i--){
      let k = Math.floor(Math.random() * (i + 1))
      let temp = this.cards[i]
      this.cards[i] = this.cards[k]
      this.cards[k] = temp; 
    }
  }
  checkIfPair = (card1, card2)=>{
    this.pairsClicked++
    if (card1.getAttribute('data-card-name') === card2.getAttribute('data-card-name')) {
      this.pairsGuessed++
      return true
    } else {
      return false
    }
  }
  isFinished() {
    if (this.pairsGuessed*2 === this.cards.length){
      return true
    } else {
      return false
    }
  }

  turnCard(card) {
    card.classList.add('turned')
    this.pickedCards.push(card)
  }

  turnBackCards() {
    this.pickedCards[0].classList.remove('turned')
    this.pickedCards[1].classList.remove('turned')
  }

  clickCard(card) {
    this.turnCard(card)
    if (this.pickedCards.length === 2) {
      if (this.checkIfPair(this.pickedCards[0], this.pickedCards[1])){
        this.pickedCards = []
      } else {
        setTimeout(()=>{
          this.turnBackCards()
          this.pickedCards = []
        }, 400)
      }
    }
  }
}
