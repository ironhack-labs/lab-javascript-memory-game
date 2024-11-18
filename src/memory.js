class MemoryGame {
  constructor(cards) {
    this.cards = this.shuffleCards(cards);
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards(arr) {
    let j, temp;
    if(!arr){
      return undefined;
    }

    /* for (let i = mixedCards.length - 1; i > 0; i--){
      j = Math.floor(Math.random()*(i+1));
      temp = mixedCards[j];
      mixedCards[j] = mixedCards[i];
      mixedCards[i] = temp;
    }
    return mixedCards; */

    let i = arr.length;
    while (--i > 0) {
      let randIndex = Math.floor(Math.random() * (i + 1));
      [arr[randIndex], arr[i]] = [arr[i], arr[randIndex]];
    }
    return arr;
  }

  checkIfPair(card1, card2) {
    const card1Name = card1.getAttribute('data-card-name');
    const card2Name = card2.getAttribute('data-card-name');

    this.pairsClicked++;
    document.querySelector("#pairs-clicked").innerHTML = this.pairsClicked;

    if(card1Name===card2Name){
      this.pairsGuessed++;
      document.querySelector("#pairs-guessed").innerHTML = this.pairsGuessed;
      return true;
    }
    return false;
  }

  checkIfFinished() {
    // ... write your code here
     // if we have 12 pairs
     if(this.pairsGuessed === 12){
      console.log('Game is finished :)')
    }
  }
}
