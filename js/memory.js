class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }

   // función con el algoritmo Fisher-Yates para mezclar un array aleatoriamente.


  shuffleCards() {
   
    for (let i = this.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  // función que compara si las cartas son siguales.

  checkIfPair(card1, card2) {
    
    this.pairsClicked += 1
    if (card1 === card2) {
      setTimeout(function(){ document.querySelector('#pair').play() }, 1000);
      this.pairsGuessed += 1
      return true
    } else {
      return false
    }
  }

  // función que comprueba si el juego ha terminado.

  isFinished() {

    if (this.pairsGuessed === /*this.cards.length / 2*/2) {
      return true
    } else {
      return false
    }
  }

  newGameButton() {
    const resetButton = document.createElement('button')
    const btnText = document.createTextNode('Press to start again!')
    resetButton.appendChild(btnText)
    const newGame = document.getElementById('new-game')
    newGame.appendChild(resetButton)
    const startAgain = document.querySelector('#new-game button')
    startAgain.onclick = () => {
      window.location.reload()
    }
  }
}