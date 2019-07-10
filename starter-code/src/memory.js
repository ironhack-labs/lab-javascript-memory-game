class MemoryGame {
  constructor(card){
    this.cards = card;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }
  shuffleCards() {
    let index = this.cards.length
    console.log(this.cards.length)
    let randomIndex = 0
    let aux 
    while (0!== index){
      randomIndex = Math.floor(Math.random() * index)
      index--

      aux = cards[index]
      this.cards[index] = this.cards[randomIndex]
      this.cards[randomIndex] = aux
    }
    console.log(this.cards.length)
    //return this.cards
  }

  checkIfPair(card1, card2) {

    if(card1.localeCompare(card2) === 0){
      this.pairsClicked++
      this.pairsGuessed++
      return true

    }
    else {
      this.pairsClicked++
      return false
    }
  }
  
  isFinished() {
    if (this.pairsGuessed === this.cards.length/2) {
      return true
    }
    else {
      return false }
  }

  document.querySelectorAll(".back").forEach(function(card) {
    card.onclick = function(e) {
      let clickedCardBack = e.currentTarget.parentNode.childNodes[1];
      let clickedCardFront = e.currentTarget.parentNode.childNodes[3];
      clickedCardBack.className = "front";
      clickedCardFront.className = "back";
    };
  });
});
}