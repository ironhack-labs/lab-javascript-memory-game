class MemoryGame {
  constructor(cards){
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.shuffleCards();
  }

shuffleCards() {
      var currentIndex = this.cards.length, temporaryValue, randomIndex;
    
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
    
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // And swap it with the current element.
        temporaryValue = this.cards[currentIndex];
        this.cards[currentIndex] = this.cards[randomIndex];
        this.cards[randomIndex] = temporaryValue;
      }
      return this.cards;
    }
    //shuffleCards() {
    //let cardsLength = this.cards.length;
    // While there remain elements to shuffle…
    //while (cardsLength > 0) {
    // decrement the number of elements to shuffle each loop
    //cardsLength--;
    //Pick a random remaining element…
    //let randomIndex = Math.floor(Math.random() * cardsLength);
    // ...store the current element in a temporary variable...
    //let temp = this.cards[cardsLength];
    // ... and swap it with the random element
    //this.cards[cardsLength] = this.cards[randomIndex];
    //this.cards[randomIndex] = temp;
    //}
    //}
    // OR this.cards.sort(() => Math.random() - 0.5);

  checkIfPair(card1, card2) {
    this.pairsClicked++;

    if (card1 === card2){
      //// increment the number of guessed pairs
      this.pairsGuessed++;
      // display the Won message in case all pairs have been guessed
      this.isFinished();
      return true;
    } else {
      return false;
    }
  }

  isFinished() {
    if (this.pairsGuessed === (this.cards.length / 2)) {
      document.querySelector('#memory-board').innerHTML = "";
      let h1 = document.createElement('h1');
      h1.style.color = 'pink';
      h1.inerHTML = 'YOU WON!!!';
      document.querySelector('#memory-board').appendChild(h1);
      return true;
    }
  }
}