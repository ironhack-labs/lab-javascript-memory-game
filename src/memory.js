class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {
    // Start from the last element and swap it with a randomly selected element before it
    for (let i = this.cards.length - 1; i > 0; i--) {
      // Generate a random index between 0 and i (inclusive)
      const j = Math.floor(Math.random() * (i + 1));

      // Swap array[i] with array[j]
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  checkIfPair(card1, card2) {
    if (card1.getAttribute('data-card-name') == card2.getAttribute('data-card-name')) {
      this.pairsGuessed ++
      document.getElementById('pairs-guessed').innerText = this.pairsGuessed
    }
    else {
      card1.classList.remove('turned')
      card2.classList.remove('turned')
    }
    this.pickedCards = []
  }

  checkIfFinished() {
    if (this.pairsGuessed == 12) alert('Congrats! you finished the game')
  }
}
