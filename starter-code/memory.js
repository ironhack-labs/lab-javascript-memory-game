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

// Object prototype functions

MemoryGame.prototype.shuffle = function(array) {
  this.cards = _.shuffle(array);
  console.log('- Cards shuffled');
  console.log(this.cards);
}

MemoryGame.prototype.selectCard = function(cardPos){
  // Add to the empty array of cards our selected one
  this.selectedCards.push(this.cards[cardPos]);
  console.log('- One card selected at position: ' + cardPos);

  // Check card's name
  console.log('- Name: ' + this.cards[cardPos].name);

  // Increase cards clicked counter
  if(this.pairsClicked % 2 == 0 || this.pairsClicked != 0){
    console.log('- Pairs clicked: ' + this.pairsClicked);
  } else {
    this.pairsClicked++;
  }

  // Delete pair from Selected cards array to leave room for rest

}

MemoryGame.prototype.compare = function(){
  if(this.selectedCards.length == 2){
    var card1 = this.selectedCards[0];
    var card2 = this.selectedCards[1];

    if(card1.name == card2.name){
      alert('MATCH');
    } else {
      console.log('SORRY, NO MATCH')
    }
  }
}

MemoryGame.prototype.finished = function() {
  if(this.pairsClicked == 12){
    alert('You win'); // All pairs found therefore he wins
  }
};
