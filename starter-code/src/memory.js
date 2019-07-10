class MemoryGame {
  constructor(card){
    this.cards = card;
    this.pickedCards = []
    this.pairsClicked = 0 //contador
    this.pairsGuessed = 0 //contador
  }
  //método random de ordenación de cartas
  shuffleCards() {
    let array = this.cards
     
      var quantityOfCards = array.length
      let currentCard
      let randomNumber
    
      // While there remain elements to shuffle…
      while (quantityOfCards) {
        // Pick a requantityOfCardsaining element…
        randomNumber = Math.floor(Math.random() * quantityOfCards--);
        // And swap it with the current element.
        currentCard = array[quantityOfCards];
        array[quantityOfCards] = array[randomNumber];
        array[randomNumber] = currentCard;
      }
  }
  //comprueba si son iguales
  checkIfPair(card1, card2) {
    this.pairsClicked ++
    //compara si son iguales
    if(card1.localeCompare(card2) === 0){
      this.pairsClicked ++
      this.pairsGuessed ++
      return  true
    }
    else{
      return false
    }
    
  }
  isFinished() {
    if(this.pairsGuessed === this.cards.length/2){
      return true
    }
    else{
      return false
    }

  }
}