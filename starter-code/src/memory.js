var MemoryGame = function (deckOfCards) {
    this.cards = deckOfCards;
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.currentPair = [];
    this.pickedCards = [];
  };
  
  MemoryGame.prototype.shuffleCard = function (cardsArr) {
    this.cards = shuffleArray(this.cards)

  };
  
  MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {

      this.pairsClicked++;
      if(firstCard.attr('name') === secondCard.attr('name')){
          this.pairsGuessed++;
          return true;
      } return false;
  }


  
  MemoryGame.prototype.finished = function () {
     return this.pairsGuessed >= 12;
  };


  function shuffleArray(array){

    array = JSON.parse(JSON.stringify(array))
    var copy = [], n = array.length, i;

    // While there remain elements to shuffle…
    while (n) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * array.length);
  
      // If not already shuffled, move it to the new array.
      if (i in array) {
        copy.push(array[i]);
        delete array[i];
        n--;
      }
    }
  
    return copy;

  }