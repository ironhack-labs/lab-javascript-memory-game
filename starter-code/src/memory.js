var MemoryGame = function (cards) {
  
  this.cards = cards;
  
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;

  this.shuffleCards();
};

MemoryGame.prototype.shuffleCards = function () {

  let array = [...this.cards];

  for (let i = (array.length - 1); i > 0; i -= 1) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }

  this.cards = array;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  
  this.pairsClicked++;
  $('#pairs_clicked').text(this.pairsClicked);

  const correct = firstCard === secondCard;

  if (correct) {
    this.pairsGuessed++;
    $('#pairs_guessed').text(this.pairsGuessed);
  }

   return correct;
};

MemoryGame.prototype.flipBack = function (name) {
  const cards = $(`[data-card-name="${name}"] div`);

  for (let i = 0; i < cards.length; i++) {
    cards[i].attributes["name"]
      ? cards[i].className = "back"
      : cards[i].className = "front"
  }
};

MemoryGame.prototype.isFinished = function () {
  return this.pairsGuessed === (this.cards.length / 2)
};