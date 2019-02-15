var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
  this.previousCard = '';
  this.status = true;
};

MemoryGame.prototype.shuffleCards = function (cardArray) {
  // seperate variable since length decreases with splice
  var nrCards = cardArray.length;
  newArray = [];
  for (i = 0; i < nrCards; i++) {
    var randomNr = Math.floor(Math.random() * cardArray.length);
    newArray.push(cardArray[randomNr]);
    cardArray.splice(randomNr, 1);
  }
  return newArray;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard, cardEle) {
  // update pairs clicked score
  this.pairsClicked++;
  $("#pairs_clicked").html(this.pairsClicked);
  // check if cards are the same
  if (firstCard === secondCard) {
    this.pairsGuessed++;
    $("#pairs_guessed").html(this.pairsGuessed);
    // mark correct cards
    $(cardEle).parent().addClass("correct");
    $(this.previousCard).parent().addClass("correct");
    // clear cards and check win conditions
    clearCardPicks(this);
    this.isFinished();
    return true;
  } else { // no match found.
    this.status = false;
    that = this;
    setTimeout(function () {
      // flip current + previous card
      flipCard($(cardEle));
      flipCard($(that.previousCard));
      clearCardPicks(that);
      that.status = true;
    }, 1000);
    return false;
  };
};

function clearCardPicks(element) {
  element.previousCard = '';
  element.pickedCards = [];
};

function flipCard(element) {
  $(element).parent().children().toggleClass("hidden");
};

MemoryGame.prototype.isFinished = function () {
  if (this.pairsGuessed == 12) {
    // small delay so the card flips first
    setTimeout(function () { 
      alert("Hoorah you won!");
      return true;
    }, 100);
  } else {
    return false;
  }
};