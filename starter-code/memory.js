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
    this.pairsGuessed = 0;
};

MemoryGame.prototype.selectCard = function(element) {
  this.flipCard(element);
  this.selectedCards.push(element);

  if(this.selectedCards.length === 2) {
    var card1 = this.selectedCards[0].getAttribute('name');
    var card2 = this.selectedCards[1].getAttribute('name');

    if (card1 === card2 ) {
      this.pairsGuessed = this.pairsGuessed + 1;
      $('#pairs_guessed').html(this.pairsGuessed);
    }
    else {
      for(var i = 0; i < this.selectedCards.length; i++) {
        this.flipCard(this.selectedCards[i]);
      }
    }
    this.pairsClicked = this.pairsClicked + 1;
    $('#pairs_clicked').html(this.pairsClicked);
    this.selectedCards = [];
  }
};

MemoryGame.prototype.flipCard = function(element) {
  $(element).toggleClass('front').toggleClass('back');
  $(element).next().toggleClass('back').toggleClass('front');
};
// shuffle

MemoryGame.prototype.shuffleCards = function(){
  var cards = _.shuffle(this.cards);
  this.cards = cards;
};
