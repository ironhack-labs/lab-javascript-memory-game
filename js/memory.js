class MemoryGame {
  constructor(cards){
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
 //let formerCardsString = memoryGame.cards.map(card => card.name).toString();
 //memoryGame.shuffleCards();
 //let newCardsString = memoryGame.cards.map(card => card.name).toString();
 //expect(formerCardsString === newCardsString).toBe(false);
  shuffleCards() {
    let cantidad = cards.length;//24
      for(let i =0; i < cantidad;i++){
        this.cards.math
    }

  }
  checkIfPair(card1, card2) {
    this.pairsClicked++;
      if(card1 === card2){ 
        this.pairsGuessed++; 
        return true }
      else {return false}

  }
  isFinished() {

    if (this.pairsGuessed = 12){ 
      this.pairsGuessed =  true;
    }
    else {this.pairsGuessed = false}
    return false
    alert("Has acabado la partida")
 }
}