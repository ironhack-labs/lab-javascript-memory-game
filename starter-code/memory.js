


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
  this.pickedCards  = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
  this.shuffleCard();
};
// ---------------_> PROGRAM UNIVERSE  <--------------------

// ------- Method to shuffle the cards


MemoryGame.prototype.shuffleCard = function() {
  var counter = this.Cards.length, j, temp;

  while (--counter > 0) {
    j = Math.floor(Math.random() * (counter+1));
    temp = this.Cards[j];
    this.Cards[j] = this.Cards[counter];
    this.Cards[counter] = temp;
  }
};


// ------- Method to shuffle the cards   ENDS


  $( document ).ready(function() {

    // Your code here.

var theGame = new MemoryGame();

console.log(theGame.Cards);


theGame.shuffleCard();
$('.pic').append('<img src="#">');
for (i = 0; i < theGame.Cards.length; i++) {
  $('.pic img').eq(i).attr('src', 'img/' + theGame.Cards[i].img);
}


// ------- FUNCTION THAT MATCHS CARDS


MemoryGame.prototype.selectCard = function(card) {

  // this.shuffleCard
};

// ------- FUNCTION THAT MATCHS CARDS   ENDS



// ------- FUNCTION  WIN WIN WIN WIN  A R E A


MemoryGame.prototype.finished = function() {
  if (this.pairsGuessed >= 16) {
  alert("You are done");
}
};

// ------- FUNCTION  WIN WIN WIN WIN  A R E A  ENDS







// ---------------_> USER UNIVERSE  <--------------------


//Event Listener


$('.pic').on('click', function(){

});





});
