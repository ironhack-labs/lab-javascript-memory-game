// //******************************************************************
// // Game Logic
// //******************************************************************
var MemoryGame = function() {
  this.cards = [
  		{ name: "aquaman",         img: "aquaman.jpg" },
  		{ name: "batman",          img: "batman.jpg" },
  		{ name: "captain america", img: "captain-america.jpg" },
  		{ name: "fantastic four",  img: "fantastic-four.jpg" },
  		{ name: "flash",           img: "flash.jpg" },
      { name: "green arrow",     img: "green-arrow.jpg" },
  		{ name: "green lantern",   img: "green-lantern.jpg" },
  		{ name: "ironman",         img: "ironman.jpg" },
  		{ name: "spiderman",       img: "spiderman.jpg" },
  		{ name: "superman",        img: "superman.jpg" },
  		{ name: "the avengers",    img: "the-avengers.jpg" },
  		{ name: "thor",            img: "thor.jpg" },
      { name: "aquaman",         img: "aquaman.jpg" },
  		{ name: "batman",          img: "batman.jpg" },
  		{ name: "captain america", img: "captain-america.jpg" },
      { name: "fantastic four",  img: "fantastic-four.jpg" },
  		{ name: "flash",           img: "flash.jpg" },
  		{ name: "green arrow",     img: "green-arrow.jpg" },
  		{ name: "green lantern",   img: "green-lantern.jpg" },
  		{ name: "ironman",         img: "ironman.jpg" },
  		{ name: "spiderman",       img: "spiderman.jpg" },
  		{ name: "superman",        img: "superman.jpg" },
  		{ name: "the avengers",    img: "the-avengers.jpg" },
  		{ name: "thor",            img: "thor.jpg" },
  	];
    this.selectedCards = [];
    this.pairsClicked = 0;
    this.correctPairs = 0;
};
// Iteration 1: shuffle the cards
MemoryGame.prototype.shuffleCards = function() {
  this.cards = _.shuffle(this.cards);
};

//Iteration 2 : start the selection cards
MemoryGame.prototype.selectCard = function(card) {
  card.removeClass('back');
  card.siblings().addClass('back');

  switch (this.selectedCards.length) {
    case 0:
      this.selectedCards.push(card);
      break;

    case 1:
      this.compareCards(card);
      break;
    default:

  }
};

//Iteration 3
MemoryGame.prototype.finished = function() {
  if (this.correctPairs == 12) {
    alert("WHOOOUU!!!. Win the game");
  }
};

MemoryGame.prototype.compareCards = function(card) {
  this.selectedCards.push(card);
  this.pairsClicked++;
  if (this.selectedCards[0].attr('name') === this.selectedCards[1].attr('name')) {
    this.correctPairs++;
    $('#pairs_guessed').text(this.correctPairs);
  } else {
    showWrong();
    this.coverCards();
  }
  this.selectedCards = [];
  $('#pairs_clicked').text(this.pairsClicked);
};

MemoryGame.prototype.coverCards = function() {
  flipBothBack(this.selectedCards[0]);
  flipBothBack(this.selectedCards[1]);
};

function flipBothBack(element) {
  setTimeout(function() {
    element.siblings().removeClass('back');
    element.addClass('back');
  }, 0.8 * 1000);

};

// function for show a message when the cards are differents
function showWrong(){
  setTimeout(function() {
    $('#wrong').toggleClass("hidden");
  }, 0.7 * 1000);
  $('#wrong').toggleClass("hidden");
};
