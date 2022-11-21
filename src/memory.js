class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.shuffleCards();
    // add the rest of the class properties here
  }

  shuffleCards() {
    if (!this.cards) return;

    const getRandomValue = (i, N) => Math.floor(Math.random() * (N - i) + i);

    this.cards.forEach(
      (elem, i, arr, j = getRandomValue(i, arr.length)) =>
        ([arr[i], arr[j]] = [arr[j], arr[i]])
    );

    return this.cards;
  }

  checkIfPair(card1, card2) {
    // ... write your code here

    this.pairsClicked++;

    if (card1 === card2) this.pairsGuessed++;
    return card1 === card2;
  }

  checkIfFinished() {
    // ... write your code here
    return this.pairsGuessed === this.cards.length / 2;
  }
}
