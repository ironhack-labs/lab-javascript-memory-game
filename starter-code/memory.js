//******************************************************************
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

// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

MemoryGame.prototype.cartRandom = function() {
  var random = _.shuffle(this.cards);
  return this.cards = random;
};

MemoryGame.prototype.selectCard = function(card) {
  if (card){
    this.selectedCards.push(card);
  }
};

MemoryGame.prototype.checkPairs = function() {
  this.pairsClicked += 1;
  if (this.selectedCards[0] == this.selectedCards[1]){
    this.correctPairs += 1;
    this.selectedCards = [];
    return true;
  }
  this.selectedCards = [];
  return false;
};

MemoryGame.prototype.finished = function() {
  var sizePairsWin = this.cards.length/2;
  if (this.correctPairs ==  sizePairsWin) {
    console.log("You win!!");
    this.correctPairs = 0;
    return true;
  }
  console.log("continue...!!")
}
