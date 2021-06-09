class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
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

    /*
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


    shuffledCards = eachCard.sort(() => Math.random() - 0.5);
    }
    return shuffledCards;
  }
  */

  checkIfPair(card1, card2) {
    if (card1 === card2) {
      this.pairsClicked += 1;
      this.pairsGuessed += 1;
      return true;
    } else {
      this.pairsClicked += 1;
      return false;
    }
  }

  checkIfFinished() {
    let correctPairs = this.pairsGuessed
    if (correctPairs < this.cards.length/2) {
      return false;
    } else {
      return true;
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
