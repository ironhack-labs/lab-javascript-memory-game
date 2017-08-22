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

//BARAJAR LAS CARTAS
MemoryGame.prototype._shuffleCards = function (){
/* SIN lodash
   for (var i = this.cards.length - 1; i > 0; i--) {
     var j = Math.floor(Math.random() * (i + 1));
     var temp = this.cards[i];
     this.cards[i] = this.cards[j];
     this.cards[j] = temp;
    }*/
    this.cards = _.shuffle(this.cards);
    return this.cards;
};

//SELECCIONAR UNA CARTA
MemoryGame.prototype.selectCard = function (card){
  console.log("CARD: " + card.name);
  console.log("SELECTED :" + this.selectedCards);
  this.pairsClicked += this.pairsClicked;
  if (this.selectedCards.length == 1){
    if (card.name == this.selectedCards[0].name){
      this.selectedCards = [];
      this.correctPairs += 1;
      console.log("ALRIGHT!");
      //FLIP THE CARD
    }
    else {
      console.log("Wrong guess!");
      this.selectedCards = [];
      //FLIP BOTH CARDS
    }
  }
  else {
    this.selectedCards[0] = card;
  }
  if (this.correctPairs == 12) {
    this.finished();
  }
};

MemoryGame.prototype.finished = function (){
  console.log("YOU WIN!");
};

var a = new MemoryGame();
a._shuffleCards();


// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

/*
var memoryGame;

$(document).ready(function(){
  memoryGame = new MemoryGame();
  var html = '';

  memoryGame.cards.forEach(function(pic, index) {
    var sanitizedName = pic.name.split(' ').join('_');

   html += '<div class= "card" name="card_' + sanitizedName + '">';
    html += '<div class="back"';
    html += '    name="' + pic.name + '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + '") no-repeat"';
    html += '    name="'       + pic.name +  '">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the divs to the HTML
  document.getElementById('memory_board').innerHTML = html;
});*/
