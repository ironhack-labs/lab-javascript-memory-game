
var Deck = function () {
  this.cards = $(".tile"); //an array of img tags
  this.allClicks = []; //an array of the last two clicked elements
};  //Deck constructor

Deck.prototype.shuffle = function () {
  var shuffledDeck = [];                    //create an empty array to hold the "src" strings of each card in the original deck
  this.cards.each(function (i, element) {
    shuffledDeck[i] = $(this).attr("src");
  });
  var m = shuffledDeck.length, t, i;
  while (m) {                               // While there remain elements to shuffle
    i = Math.floor(Math.random() * m--);    // Pick a remaining element
    t = this.cards[m];                      // And swap it with the current element
    this.cards[m] = this.cards[i];
    this.cards[i] = t;
  }
  this.cards.each(function (i, element) {   //for each card in the original deck, assign its "src" attribute to the string in the matching index of the shuffled deck;
     $(this).attr("src", shuffledDeck[i]);
  });
};  //Shuffles images

Deck.prototype.selectCard = function () {
  var that = this;
  $('.pic').click(function() {
    var clicked = $(this).find("img");              //find img tag inside of clicked div
    if(clicked.hasClass("matched")) {  //If the img tag has been clicked or matched, exit the function
    return;                                         //early return
    }
    else {
      clicked.toggle();                             //Show clicked image tag                  //Add the clicked class to the clicked img tag
      that.allClicks.unshift(clicked);

      var timeoutId = setTimeout(function () {
        if(that.allClicks.length >= 2 && that.allClicks[0].attr('src') === that.allClicks[1].attr('src')) { //If the src attribute for the image tags in indices 0 & 1 match,
          for ( i = 0; i < 2; i += 1) {
            that.allClicks[i].addClass("matched");
          }
          that.allClicks.splice(0,2);
        }
        else if (that.allClicks.length >= 2 && that.allClicks[0].attr('src') != that.allClicks[1].attr('src')) { //If the src attributes for the image tags in indices 0 & 1 match,
          for (i = 0; i < 2; i++){
            that.allClicks[i].hide(); //hide the clicked images
          }
          that.allClicks.splice(0,2);
        }

      }, 1000);

      //array must be emptied when it reaches length of 2
    }
  });
};  //Evaluates two clicked images from equivalence and hides unequal images

Deck.prototype.finished = function () {

};




$(document).ready(function(){
$('.tile').toggle();
var newGame = new Deck(); //create new instance of deck
newGame.shuffle();
newGame.selectCard();

});
