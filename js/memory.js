class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }
  shuffleCards() {
    this.cards.sort(() => Math.random() - 0.5);
  }
  checkIfPair(card1, card2) {

    if (card1 == card2) {
      this.pairsClicked++
      this.pairsGuessed++
      return true
    } else {
      this.pairsClicked++
      return false
    }
  }

  isFinished() {
    if (this.pairsGuessed == 12 && this.pairsClicked <= 30) {
    window.alert(`¡YOU WIN! Whit ${this.pairsClicked} pairs Clicked `)
      }
      else if (this.pairsGuessed == 12 && this.pairsClicked > 30) {
        window.alert(`¡YOU WIN! Whit ${this.pairsClicked} pairs Clicked,but you can do better...! `)
      }
    } 
   

} 