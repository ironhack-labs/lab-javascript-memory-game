var MemoryGame = function (cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  
  };
  
  MemoryGame.prototype.shuffleCard = function (cardsArr) {
    // Fisher-Yates Shuffle
    var copyArr = cardsArr;
    var newArr = [];
    while (copyArr.length > 0){
      var selection = Math.floor(Math.random() * copyArr.length);
      var deletedCard = copyArr.splice(selection, 1);
      newArr.push(deletedCard[0]);
    }
    this.cards = newArr;
    return newArr;
  };
  
  MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
    if(firstCard === secondCard){
      this.pairsClicked++;
      this.pairsGuessed++;
      if(this.pairsGuessed==12)
        {
          ("$h1").text("juan_gano");
        }
      return true;
    } else {
      this.pairsClicked++;
      return false;
    }
  }
  
  MemoryGame.prototype.finished = function () {
    if (this.pairsGuessed === 12){
      return true;
    }
    return false;
  };
  
