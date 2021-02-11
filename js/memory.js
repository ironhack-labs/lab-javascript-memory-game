class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here

    // tests

    console.log(cards);
    console.log(cards[0]);
    console.log(10);
    console.log(this.cards.length);
    console.log(
      this.pickedCards.push(this.cards[Math.floor(Math.random() * 24)])
    );
    console.log(
      this.pickedCards.push(this.cards[Math.floor(Math.random() * 24)])
    );
    console.log(this.pickedCards);
  }


  shuffleCards(cardsArray) {
    if (!cardsArray){
      return undefined;
    } else {
    // const cardsArray = [...cardsArray]
    // for (let i = cardsArray.length - 1; i > 0; i--) {
    //   const j = Math.floor(Math.random() * i);
    //   cardsArray[i] = cardsArray[j];
    //   // pickedCardsArray.push(cardsArray[j]);
    cardsArray = [...this.cards];
    for(let i = cardsArray.length - 1; i > 0; i--) {
      let randomInd = Math.floor(Math.random()*(i+1));
      let temp = cardsArray[i];
      cardsArray[i] = cardsArray[randomInd];
      cardsArray[randomInd] = temp;
    }
    console.log(`this is the new array ${cardsArray}`);
  }
  }

  checkIfPair(card1, card2) {
    if (card1 === card2){
      this.pairsClicked += 1;
      this.pairsGuessed += 1;
      return true;
    } else {
      this.pairsClicked += 1;
      return false;
    }

  }


  isFinished() {
    if (this.pairsGuessed === 0 || this.pairsGuessed < 8){
      return false
    } else if (this.pairsGuessed === 8) {
      return true;
    }
  }

}

// -- To shuffle an array a of n elements (indices 0..n-1):
// for i from n−1 downto 1 do
//      j ← random integer such that 0 ≤ j ≤ i
//      exchange a[j] and a[i]
// Math.random()
// Math.floor(Math.random()*24)

console.log(MemoryGame.cards)