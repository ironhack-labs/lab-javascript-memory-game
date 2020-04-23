class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    //return random order from cards
    this.cards.sort(function () {
      return Math.random() - 0.5
    })
  }
  checkIfPair(card1, card2) {
    //Increase pairsClicked when click 2 cards and evaluate
    this.pairsClicked += 1;
    //Pass the value to html
    document.querySelector('#pairs-clicked').innerHTML = memoryGame.pairsClicked;
    if (card1 === card2) {
      //If the cards are the same, increases pairsGuessed and shows at HTML
      this.pairsGuessed += 1;
      document.querySelector('#pairs-guessed').innerHTML = memoryGame.pairsGuessed;
      return true
    }
    return false;
  }
  isFinished() {
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    }
    return false
  }
  congrats() {
    //Shows a GIF at HTML after 1 (one) second
    setTimeout(function () {
      document.querySelector('#memory-board').style.display = 'none';
      document.querySelector('#score').style.display = 'none';
      const congrats = document.createElement('img');
      congrats.src = '/img/200.gif'
      congrats.style.display = 'block'
      congrats.style.margin = 'auto'
      document.body.appendChild(congrats)
    }, 1000)
  }
}