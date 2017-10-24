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

MemoryGame.prototype._shuffleCards = function() {
  return _.shuffle(this.cards);
};

MemoryGame.prototype.selectCard = function(card) {
  if (this.selectedCards.length == 0) {
    this.selectedCards.push(card);
  } else {
    if (card == this.selectedCards[0]) {
      this.correctPairs++;
      fixCards();
      blockCards();
      setTimeout(unblockCards, 2 * 1000);
    } else {
      blockCards();
      setTimeout(flipPair, 2 * 1000);
      setTimeout(unblockCards, 2 * 1000);
    }
    _.remove(this.selectedCards);
    this.pairsClicked++;
    updateScore();
    this.finished();
  }
};

MemoryGame.prototype.finished = function() {
  if (this.correctPairs == this.cards.length / 2) {
    setTimeout(function(){ alert("Ganaste Campeón"); }, 2 *1000);
    //console.log("Juego terminado");
    return true;
  } else {
    //console.log("Aún falta");
    return false;
  }
};
