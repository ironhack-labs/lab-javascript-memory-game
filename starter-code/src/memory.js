/*jshint esversion: 6 */

let MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {

  function shuffle(array) {
    let currentIndex = array.length,
      temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
  this.cards = shuffle(this.cards);
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++;
  $("#pairs_clicked").text(this.pairsClicked);
  if (firstCard === secondCard) {
    this.pairsGuessed++;
    $("#pairs_guessed").text(this.pairsGuessed);
  }
  return firstCard === secondCard;
};

MemoryGame.prototype.isFinished = function () {
  if (this.pairsGuessed * 2 >= this.cards.length) return true;
  return false;
};
