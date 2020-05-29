class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.clickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }


  shuffleCards() {
    /*
    let rand = null;
    let temp = null;

    for (let i = 0; i < this.cards.length; i++) {
      rand = Math.floor(Math.random() * (this.cards.length - i) + i);

      temp = this.cards[i];
      this.cards[i] = this.cards[rand];
      this.cards[rand] = temp;
    }
    */
  }

  clickCard(card) {
    this.turnCard(card)
    this.clickedCards.push(card)

    if (this.clickedCards.length === 2) {
      let card1 = this.clickedCards[0];
      let card2 = this.clickedCards[1];

      let card1Name = card1.getAttribute('data-card-name') 
      let card2Name = card2.getAttribute('data-card-name')

      if (this.checkIfPair(card1Name, card2Name)) {
        this.clickedCards.forEach(card => card.classList.add('blocked'))
      } else {
          this.clickedCards.forEach(card => setTimeout(this.turnCard(card), 1500))
      }


      pairsClickedCounter.innerText = this.pairsClicked;
      pairsGuessedCounter.innerText = this.pairsGuessed;
      this.clickedCards = [];
    }

    if (this.isFinished()) alert('YOU WON!!')
  }
turnCard(card) {

      if (!card.classList.contains('blocked')) {
      card.classList.toggle('turned')
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