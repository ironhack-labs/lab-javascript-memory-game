class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.clickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }


  shuffleCards() {
    let rand = null;
    let temp = null;

    for (let i = 0; i < this.cards.length; i++) {
      rand = Math.floor(Math.random() * (this.cards.length - i) + i);

      temp = this.cards[i];
      this.cards[i] = this.cards[rand];
      this.cards[rand] = temp;
    }
  }

  clickCard(card) {
    card.classList.toggle('turned')
    memoryGame.clickedCards.push(card.getAttribute('data-card-name'))
    if (memoryGame.clickedCards.length > 2) {
      memoryGame.clickedCards = []
      document.querySelectorAll('.turned').forEach(turnedCard => turnedCard.classList.toggle('turned'))
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }


  isFinished() {
    return (this.pairsGuessed === this.cards.length / 2 ? true : false);
  }
}