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

// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************
var memoryGame;

$(document).ready(function(){
  memoryGame = new MemoryGame();
  var html = '';

  memoryGame.cards.forEach(function(pic, index) {
    var sanitizedName = pic.name.split(' ').join('_');

    html += '<div class= "card" id="card_' + sanitizedName + '">';
    html += '<div class="back"';
    html += '    name="img/' + pic.name + '"';
    html += '    id="'       + pic.img +  '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + '") no-repeat"';
    html += '    id="'       + pic.img +  '">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the divs to the HTML
  document.getElementById('memory_board').innerHTML = html;
});

MemoryGame.prototype._shuffleCards = function() {
  for(var i = 0;i<this.cards.length;i++){
    var randomInteger = Math.floor(Math.random()*this.cards.length);
    if(this.cards[i]!==this.cards[randomInteger]){
      this.cards[i]=this.cards[randomInteger];
    }
  }
};
MemoryGame.prototype.selectCard = function(card){
  
};


memoryGame._shuffleCards();

memoryGame.forEach(function(element){
  console.log(element);
});
