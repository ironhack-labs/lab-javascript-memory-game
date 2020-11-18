class MemoryGame {
  constructor(cards){
    this.cards = cards;

    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }
  shuffleCards() {

    let shuffledImages = shuffle(imagElementsArray);
    for ( i = 0 ; i < shuffledImages.length ; i++ ){
      //add the shuffled images to each card
      cardElements[i].appendChild(shuffledImages[i]);
    }

  }

  checkIfPair(card1, card2) {
    this.pairsClicked ++;
    if (card1 === card2){
      this.pairsClicked ++;
      return true;
    }else{
      return false;
    }
  }

  isFinished() {
    if(this.pairsGuessed === this.cards.length/2) {
        return true;
    }else{
    return false;
    }
  }

}
