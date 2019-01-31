
  class MemoryGame {
    constructor (cards){
      this.cards = cards;
      this.pickedCards = [];
      this.pairsClicked = 0;
      this.pairsGuessed = 0;
    }
  };
  
  MemoryGame.prototype.shuffleCards = function () {
    let ungeneratedCards = [];
    for (let i = 0; i < 24; i++){
      ungeneratedCards.push(i);
    }
    
    let newCards = [];
    while (ungeneratedCards.length){
      let generatedCardNum =  Math.floor(Math.random () * (ungeneratedCards.length-1))
      let genCard = ungeneratedCards.splice(generatedCardNum, 1)[0]
      newCards.push(genCard)
    }
    
    this.cards = newCards;
  };
  
  MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
    let result = false;
    this.pairsClicked = 1;
    if (firstCard === secondCard){
      this.pairsGuessed++;
      result = true;
    }
    return result
  }
  
  MemoryGame.prototype.isFinished = function () {
    let gameFinished = false;
    if (this.pairsGuessed === 12){gameFinished = true};
    return gameFinished;
  };

  