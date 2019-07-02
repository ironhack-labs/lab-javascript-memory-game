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
    //shuffle the given cards

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
    //determines if two cards are the same or not. If they are the same, leave them flipped. If they are different, then flip them back over.
    this.pairsClicked++;
    $('#pairs_clicked').html(this.pairsClicked);
    if(card1 === card2){
      console.log('did you make it to true')
      this.pairsGuessed++;
      $('#pairs_guessed').html(this.pairsGuessed);
      memoryGame.pickedCards.forEach((card, index) => {
        $(memoryGame.pickedCards[index]).children(":first").toggle()
      })
      this.pickedCards = [];
    } else {
      cards = [...memoryGame.pickedCards]
      setTimeout(function(){
        cards.forEach((card, index) => {
          console.log(card[0])
          $(card[0]).children(":first").toggleClass("back front");
          $(card[0]).children(":nth-child(2)").toggleClass("front back"); 
        })
      }, 1000)
      this.pickedCards = [];
     
    }
  }
  isFinished(){
    //determines if the player has won the game. The game is over when the number of pairs guessed is half the number of cards on the board.
    if(this.pairsGuessed === (this.cards.length/2)){
      return true;
    } else {
      return false;
    }
  }
}


