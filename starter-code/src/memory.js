var MemoryGame = function (cardsArray) {
  this.cards = cardsArray;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
}

MemoryGame.prototype.shuffleCard = function (arr) {

  function shuffle(arr) {
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
}

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++
  if (firstCard === secondCard) {
    this.pairsGuessed++
  }
  if (firstCard === secondCard) {
    return true
  } else return false
}

MemoryGame.prototype.finished = function () {

  if (this.pairsGuessed === 12) {
    return true
  } else return false
}