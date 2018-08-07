var MemoryGame = function(cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = [];
  this.pairsGuessed = [];
};

MemoryGame.prototype.shuffleCards = function(cardsArr) {
  this.cards = shuffle(cardsArr);
};

MemoryGame.prototype.checkIfPair = function(firstCard, secondCard) {
  let firstName = $(firstCard)
    .parent()
    .attr("id");
  let secondName = $(secondCard)
    .parent()
    .attr("id");

  return firstName === secondName;
};

MemoryGame.prototype.finished = function() {
  return this.pairsGuessed.length * 2 === this.cards.length;
};

function shuffle(array) {
  array = JSON.parse(JSON.stringify(array));
  var copy = [],
    n = array.length,
    i;

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
