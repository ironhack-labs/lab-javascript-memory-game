class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    for (let i = this.cards.length -1; i > 0; i--) {
      const j = Math.floor(Math.random()*(i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
    return this.cards;
  }


    /*
  shuffleCards() {
      for (let i = this.cards.length-1; i>0; i--) {
        let shuffledCards = Math.floor(Math.random()*(i+1))
        let randomCard = this.cards[shuffledCards];
        this.cards[shuffledCards] = newArray[i];
        this.cards[i] = randomCard;
    }
    return this.cards;
    }
  }



    let currentIndex = cardsArray.length, randomIndex;
    if (cardsArray) {
      return undefined;
    } else {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [cardsArray[currentIndex]], cardsArray[randomIndex] = [
        array[randomIndex], array[currentIndex]];
    }
    return cardsArray
  }


    shuffleCards(argument1) {
    shuffledCards = eachCard.sort((a, b) => Math.random() - 0.5);
    return shuffledCards;
  }

  
    shuffleCards(argument1) {
      for (let i = this.cards.length -1; i > 0; i--) {
        const j = Math.floor(Math.random()*(i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
      }
    }
  

      shuffleCards(argument1) {
    if (!argument1) {
      return undefined
    } else {
      let newArray = this.cards;
      for (let i = this.cards.length-1; i>0; i--) {
        let shuffledCards = Math.floor(Math.random()*(i+1))
        let randomCard = newArray[shuffledCards];
        newArray[shuffledCards] = newArray[i];
        newArray[i] = randomCard;
    }
    return newArray;
    }
  }

  */

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      this.checkIfFinished();
      return true;
    } else {
      return false;
    }
  }

  resetClickedPair() {
    this.pickedCards = [];
  }


  checkIfFinished() {
    let correctPairs = this.pairsGuessed
    if (correctPairs < this.cards.length / 2) {
      return false;
    } else {
      return true;
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
