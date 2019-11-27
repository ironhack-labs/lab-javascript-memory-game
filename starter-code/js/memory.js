class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsGuessed = 0;
    this.pairsClicked = 0;
    this.shuffleCards();
    this.isFinished();
  }
  shuffleCards() {
    let len = this.cards.length;
    while (len > 0) {
      len--;
      let temp = this.cards[len];
      let randomIdx = Math.floor(Math.random() * len);
      this.cards[len] = this.cards[randomIdx];
      this.cards[randomIdx] = temp;
    }
  }
  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      this.isFinished();
      return true;
    }
    return false;
  }

  isFinished() {
    if (this.pairsGuessed > this.cards.length/2) {
      return false
    } else {
      return true;
    }
  }
}
      // document.querySelector("#memory_board").innerHTML = "";
      // let h1 = document.createElement("h1");
      // h1.style.color = "pink";
      // h1.innerHTML = "YOU WON!!!";
      // document.querySelector("#memory_board").appendChild(h1);
