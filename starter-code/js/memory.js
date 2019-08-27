class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    const deck = this.cards;
    let shuffledCards = [];
    let n = deck.length;
    let i = 0;
    while (n) {
      i = Math.floor(Math.random() * n--);
      shuffledCards.push(deck(i,1)[0]);
    }
  }
  checkIfPair(card1, card2) {
    this.pairsClicked++;
    let result = false;
    let str1 = JSON.stringify(card1);
    let str2 = JSON.stringify(card2);
    if (str1 == str2) {
      this.pairsGuessed++;
      result = true;
    }
    return result;
  }
  isFinished() {
    let finished = false;
    let pairsInGame = this.cards.length / 2;
    if (this.pairsGuessed == pairsInGame) {
      finished = true;
    }
    return finished;
  }
}
