var MemoryGame = function (deckOfCards) {
    this.cards = deckOfCards;
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.currentPair = [];
  };
  
  MemoryGame.prototype.shuffleCard = function (cardsArr) {
      var shuffledArray = [];
      while(shuffledArray.length < 24){
          var randomNumber = Math.floor(Math.random()*this.cards.length);
          var randomElement = this.cards[randomNumber];
          shuffledArray.push(randomElement);
          this.cards.splice(randomNumber, 1);
      }
      this.cards = shuffledArray;
  };
  
  MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
      this.pairsClicked++;
      if(firstCard.attr('name') === secondCard.attr('name')){
          this.pairsGuessed++;
          return true;
      }
      return false;
  }
  
  MemoryGame.prototype.finished = function () {
     return this.pairsGuessed >= 12;
  };