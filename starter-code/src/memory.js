class MemoryGame {
  constructor(cards) {
    this.cards = cards
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }


  shuffleCards(theDeck){
    let cardsArray = theDeck.length;
    let tempCard, i;
    while(cardsArray) {
      i = Math.floor(Math.random() * cardsArray--);
      
      tempCard = theDeck[cardsArray];
      theDeck[cardsArray] = theDeck[i];
      theDeck[i] = tempCard;
    }
    this.cards = theDeck
  }

  checkIfPair(firstCard,secondCard){
    this.pairsClicked += 1;
  if(firstCard.attr('name') === secondCard.attr('name')) {
    this.pairsGuessed += 1
    console.log("true its a pair!");
    return true;
  } else {
    console.log("false its not a pair!");
    return false;
  }
  }

  isFinished() {
  if(this.pairsGuessed === 8) {
      return true;
  } else {
      return false;
    }
  }

  updateScores(){
    $('#pairs_clicked').html(this.pairsClicked);
    $('#pairs_guessed').html(this.pairsGuessed);
  }

  getResult() {
    if(this.pairsGuessed === 12){
      prompt ('WooHoo! Now tell me why there are DC Logos in a marvel game :(');
    }
  }
}