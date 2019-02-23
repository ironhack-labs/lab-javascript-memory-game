var MemoryGame = function (cards) {
  this.cards = cards;

  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;

};




MemoryGame.prototype.shuffleCards = function (cards) {
 
  var x = cards.length; // length is the total amount of elements not represent index
  var temp;
  var randomIndex;

  while (x > 0) {
    // pick a random index
    randomIndex = Math.floor(Math.random() * x);
    // you need to decrease the value of x by 1 so it will count the number of indexes starting from O, otherwise x will be bigger than the array cards.
    x--;
    //store card on the temp array.
    temp = cards[x];
    // make card[x] the same as the cards[randomIndex];
    cards[x] = cards[randomIndex];
    //sw
    cards[randomIndex] = temp;
  }
 return cards 
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  // firstCard = pickedCard[0];
  // secondCard = pickedCard[1];
  this.pairsClicked++;
  $('#pairs_clicked').html(this.pairsClicked)

  if (firstCard === secondCard) {
    this.pairsGuessed++;

    //show pairsGuessed value in the front end
    $('#pairs_guessed').html(this.pairsGuessed)
    this.pickedCards = [];

    // this.isFinished

  } else {
    // var _this = this;
    // setTimeout(_this.flipCardsBack, 1000) -> another way of doing the settimeout method without needing the bind method. 

    setTimeout(this.flipCardsBack.bind(this), 1000);
  }

}



MemoryGame.prototype.isFinished = function () {
  if (this.pairsGuessed == this.cards.length / 2) {
    setTimeout(function () { alert("You won! Yayy!") }, 1000)

    // $("#title").html("Win!") --> will change the title of game
  };

};


MemoryGame.prototype.flipCardsBack = function () {

  this.pickedCards[0].children().toggleClass("front back");
  this.pickedCards[1].children().toggleClass("front back");
  this.pickedCards = []; //if you don't guess it you still have to empty the pickedCards array
}

