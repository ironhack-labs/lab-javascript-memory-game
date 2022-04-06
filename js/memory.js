class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    const randomArray = this.cards;
    for (let i = randomArray.length - 1; i >= 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      randomArray.push(randomArray[randomIndex]);
      randomArray.splice(randomIndex, 1);
    }
    console.log(randomArray);
    this.cards = randomArray;
  }

  checkIfPair(card1, card2) {
    this.checkIfFinished();
    console.log(this.pairsClicked, this.pairsGuessed);
    // const htmlElePairsClicked = document.getElementById('pairs-clicked');
    // const htmlElePairsGuessed = document.getElementById('pairs-guessed');
    if (card1.innerHTML === card2.innerHTML) {
      this.pairsGuessed++;
      this.pairsClicked++;
      // htmlElePairsClicked.innerText = this.pairsClicked;
      // htmlElePairsGuessed.innerText = this.pairsGuessed;
      this.pickedCards = [];
      this.checkIfFinished();
    } else if (card1 !== card2) {
      this.pairsClicked++;
      this.pickedCards = [];
      // htmlElePairsClicked.innerText = this.pairsClicked;
      card1.classList.remove('turned');
      card2.classList.remove('turned');
    }
  }

  controlDashboard() {
    const htmlElePairsClicked = document.getElementById('pairs-clicked');
    const htmlElePairsGuessed = document.getElementById('pairs-guessed');
    setTimeout(() => {
      htmlElePairsClicked.innerText = this.pairsClicked;
      htmlElePairsGuessed.innerText = this.pairsGuessed;
      this.controlDashboard();
    }, 500);
  }

  checkIfFinished() {
    if (this.pairsGuessed >= 11) {
      this.pairsGuessed = 0;
      this.pairsClicked = 0;
      alert('Congratulations, reload to play again');
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;

//htmlElePairsClicked.innerText = this.pairsClicked;
//htmlElePairsClicked.innerText = this.pairsClicked;
//htmlElePairsGuessed.innerText = this.pairsGuessed;
//
//
