const sleep = (milliseconds) => {
  return new Promise((resolve)=> setTimeout(resolve, milliseconds));
};

let pairsClickedBoard = document.querySelector("#pairs-clicked");
let pairsGuessedBoard = document.querySelector("#pairs-guessed");

class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards;
    this.pairsClicked =0;
    this.pairsGuessed=0;
    this.clicks=0;
  }

  clickedCard = {}

  shuffleCards() {
    // ... write your code here
    
    this.cards.sort(()=> Math.random() - 0.5)

  }

  async checkIfPair(card) {
    // ... write your code here
    card.classList.add("turned");
    this.clicks++
    if(this.clicks === 2) {
      if(card.dataset.cardName === this.clickedCard.dataset.cardName) {
        this.clickedCard.classList.add("blocked");
        card.classList.add("blocked");
        this.pairsGuessed++
        this.pairsClicked++
        this.clicks = 0
      } else {
          await sleep(1000);
          this.clickedCard.classList.remove("turned");
          card.classList.remove("turned");
          this.pairsClicked++
          this.clicks = 0
      }
    }
    this.clickedCard = card
    if(this.pairsGuessed === 12){
      await sleep(1000);
      this.checkIfFinished("You won")
    }
    if(this.pairsClicked === 20) {
      this.checkIfFinished("You lost")
    }
    pairsClickedBoard.innerHTML = this.pairsClicked;
    pairsGuessedBoard.innerHTML = this.pairsGuessed;
  }
  

  checkIfFinished(al) {
    // ... write your code here
      alert(al)
    }
  }

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
