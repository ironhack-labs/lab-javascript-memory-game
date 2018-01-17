var MemoryGame = function (cards) {
      this.cards = cards;
      this.pickedCards = [];
      this.pairsClicked = 0;
      this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCard = function (array) {
      var copy = [];
      var n = array.length
      var i;
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
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
      this.pairsClicked += 1;
      if (firstCard === secondCard) {
            this.pairsGuessed += 1;
            return true;
      } else {
            return false;
      }
}

MemoryGame.prototype.finished = function () {
      if (this.pairsGuessed === this.cards.length/2) {
            return true;
      } else {
            return false;
      }
};