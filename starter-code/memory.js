var MemoryGame = function() {
  this.Cards = [
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
  this.picked_cards  = [];
  this.pairs_clicked = 0;
  this.pairs_guessed = 0;
  this._shuffleCard();
};
// this function just takes the array of cards above and shuffles them into a random order
MemoryGame.prototype._shuffleCard = function() {
  var counter = this.Cards.length;

  while (counter > 0) {
    index = Math.floor(Math.random() * counter);
    counter--;
    temp = this.Cards[counter];
    this.Cards[counter] = this.Cards[index];
    this.Cards[index] = temp;
  }
  return;
};

var memoryGame;
$(document).ready(function(){
  memoryGame = new MemoryGame();
  memoryGame._shuffleCard();

  var imgUrl = function (indexOfPic) {
      return memoryGame.Cards[indexOfPic].img;
  };
//assign shuffled cards to each pic div
  var picClass = $('.pic');
  $('.pic').each( function (i) {
    $(this).prepend($('<img>',{class:'moveimg', src:'img/' + imgUrl(i)}));
  });

var cards = [];
var matchedCards = [];
var pairsGuessed = $('#guessed').text();
var pairsClicked = $('#clicked').text();
var right = 0;
var wrong = 0;
//Display img only on click
  $('.pic img').addClass('displaynone');
  $('.pic').on('click', function() {
    $(this).children('img').removeClass('displaynone');
    cards.push($(this).children('img'));

    if(cards.length === 2) {
      console.log(cards);
      if(cards[0].attr('src') === cards[1].attr('src')) {
        console.log('we match');
        matchedCards.push(cards[0], cards[1]);
        for(i = 0; i < matchedCards.length; i++) {
          matchedCards[i].addClass('matched');
        }
        cards = [];
        right ++;
        pairsGuessed = $('#guessed').text(right);
        if(right === 12) {
          alert('YOU WIN!!!!!!!!');
        }
      } else {
        console.log('poop');
        setTimeout(function(){ $('.pic img').not('.matched').addClass('displaynone'); }, 700);
        cards = [];
        wrong ++;
        pairsGuessed = $('#clicked').text(wrong);
      }
    }
  });

});
