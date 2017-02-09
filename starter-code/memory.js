var Deck = function () {
  // this.cards = array of images by src attribute;
  this.cards = $(".tile"); //gets an array of img tags

};

Deck.prototype.shuffle = function () {

  //lets create a copy of the original deck and shuffle it, then assign the attributes of each card in the shuffled deck back to the original deck indices.

  var shuffledDeck = []; //create an empty array to hold the "src" strings of each card in the original deck

  this.cards.each(function (i, element) {
    shuffledDeck[i] = $(this).attr("src");
  });

  var m = shuffledDeck.length, t, i;

  // While there remain elements to shuffle
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element
    t = this.cards[m];
    this.cards[m] = this.cards[i];
    this.cards[i] = t;
  }

  this.cards.each(function (i, element) { //for each card in the original deck, assign its "src" attribute to the string in the matching index of the shuffled deck;
     $(this).attr("src", shuffledDeck[i]);
  });
};

Deck.prototype.selectCard = function () {

  $('.pic').click(function () {
    var clicked = null;
      clicked = $(this).find("img");
      if(clicked.hasClass("clicked")) {

      }
      else {
        clicked.toggle();
        clicked.addClass("clicked");
        allClicks.unshift(clicked);
        clickCount++;
        if (allClicks.length > 2 && allClicks[0] != allClicks[1]) {
          allClicks.forEach(function (image) {
            image.removeClass("clicked");
            image.toggle();
          });
          allClicks.splice(0,2);
          }
        }
      });
  };

Deck.prototype.finished = function () {

};

var allClicks = [];
var clickCount = 0;

$(document).ready(function(){

  var newGame = new Deck(); //create new instance of deck
  newGame.shuffle(); //shuffle the cards
  $('.tile').toggle(); //hide all image tags on load
  newGame.selectCard();

});
