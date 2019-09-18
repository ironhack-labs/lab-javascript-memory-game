class MemoryGame {
  constructor(cards){
    this.cards = cards;
    // add the rest of the class properties here
      this.pickedCards = [];
      this.pairsClicked = 0;
      this.pairsGuessed = 0;
  }
  shuffleCards() {

    for(let i = 0; i< this.cards.length; i ++)
    {
      let posicao = Math.floor(Math.random()*this.cards.length)

      let aux = this.cards[i];
      this.cards[i] = this.cards[posicao];
      this.cards[posicao] = aux;
    }
}

  checkIfPair(card1, card2) {

    if(card1 == card2){
      this.pairsClicked = 0;
      this.pairsGuessed = 1;
      return true;
      
    }
    else
    {
      this.pairsClicked = 1;
      this.pairsGuessed = 0;
    return  false;
    }

  }
  isFinished() {

    if (this.pairsGuessed  * 2 == this.cards.length)
    {
      return true;
    }
    
    else{
      return false;}

  }
}

