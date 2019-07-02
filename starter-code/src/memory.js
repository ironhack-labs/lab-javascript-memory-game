class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsGuessed = 0
    this.pairsClicked = 0
    this.shuffleCards(cards)

  }
  shuffleCards(arrayOfCards) {
    let arrayLen = arrayOfCards.length
    while (arrayLen !== 0) {
      let randomIndex = Math.floor(Math.random() * arrayLen);
      arrayLen--;
      let temporaryCard = arrayOfCards[arrayLen]
      arrayOfCards[arrayLen] = arrayOfCards[randomIndex]
      arrayOfCards[randomIndex] = temporaryCard
    }
    return arrayOfCards;
  }
  checkIfPair(card1, card2) {
    this.pairsClicked++
    document.getElementById('pairs_clicked').innerHTML = this.pairsClicked
    if (card1 === card2) {
      this.pairsGuessed++;
      document.getElementById('pairs_guessed').innerHTML = this.pairsGuessed
      let matchingCards = [...document.getElementsByClassName('just-clicked')]
      matchingCards.forEach(card => {
        card.classList.add('blocked')
        card.classList.remove('just-clicked')
      })
      console.log('they are equal')
    } else {
      let matchingCards = [...document.getElementsByClassName('back just-clicked blocked ')]
      matchingCards.forEach(card => {
        setTimeout(() => {
          card.style.background = null;
          card.classList.remove('blocked')
          card.classList.remove('just-clicked')
        }, 1000)
      })
    }
    this.pickedCards = []
    this.isFinished()
  }

  isFinished() {
    if (this.pairsGuessed === 12) {
      let msg = document.createElement('h3')
      msg.innerHTML = "You Won!!"
      document.getElementById("memory_board").appendChild(msg)
    }
  }
}