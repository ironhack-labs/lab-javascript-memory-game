class MemoryGame {
  constructor(cards){
    //a set of 24 cards
    this.cards = cards;
    // accepts two cards to compare
    this.pickedCards = [];
    //counts how many cards have been clicked
    this.pairsClicked = 0;
    // counts how many pairs have been guessed
    this.pairsGuessed = 0;
    //shuffle cards when creating a new game
    this.shuffleCards(cards);
  }

  shuffleCards(cardsArr){

    let cardsLength = cardsArr.length;

    while(cardsLength > 0){
      //get a random number from 0 to the length of the array
      let selectedCard = Math.floor( Math.random()*cardsLength);
      cardsLength --;

      //store the last element in the array in a variable
      let tempVar = cardsArr[cardsLength];

      //swaps the selected element with the last element
      //move the randomly selected element to the end of the array
      cardsArr[cardsLength] = cardsArr[selectedCard]
      cardsArr[selectedCard] = tempVar;
    }

    return cardsArr;
  }

  

  checkIfPair(card1, card2){
    this.pairsClicked++;
    $('#pairs_clicked').html(this.pairsClicked);
    if(card1 === card2){
      this.pairsGuessed++;
      $('#pairs_guessed').html(this.pairsGuessed);
      this.pickedCards = [];
      return true;
    } else {
      //set the timeout here for non matching pairs
      return false;
    }
  }
  isFinished(){
    if(this.pairsGuessed === (this.cards.length/2)){
      return true;
    } else {
      return false;
    }
  }
}

