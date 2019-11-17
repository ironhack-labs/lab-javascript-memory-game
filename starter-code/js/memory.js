let pairsClicked = 0;
let pairsGuessed = 0;

class MemoryGame {

  constructor(cards, pickedCards, pairsClicked, pairsGuessed){
    this.cards = cards;
    this.pickedCards = pickedCards;
    this.pairsClicked = pairsClicked;
    this.pairsGuessed = pairsGuessed;
  }

  shuffleCards() {
    this.cards.forEach((c, i) => {
      let j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    })
  }
  
  checkIfPair(card1, card2) {
    noClickSpam = true;
    if (card1 == card2) {
      noClickSpam = false;
      pairsGuessed += 1
      pickedCards[1].push(card1)
      document.getElementById("pairs_guessed").innerText = pairsGuessed;
    return true;
    } else {
      // sexy function
      pairsClicked = setTimeout(() => document.querySelectorAll('.card').forEach((card, i) => { 
          if (!pickedCards[1].includes(card.getAttribute("data-card-name"))) card.classList.remove("turned");
          document.getElementById("pairs_clicked").innerText = pairsClicked;
          noClickSpam = false;
        }), 1000)
      return false;
    }
  }

  isFinished = () => (pickedCards[1].length == 12)
}
