// //******************************************************************
// // Game Logic
// //******************************************************************
var timeSeconds = 3;

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
  this.cards.sort(function (){
    return Math.random() - 0.5;
  });
  console.log(this.cards);
  return this.cards;
};

MemoryGame.prototype.flipCard = function(card) {
    console.log("CARD");
    console.log(card);
    $(card.children()[0]).toggleClass("front").toggleClass("back");
    $(card.children()[1]).toggleClass("back").toggleClass("front");
}

MemoryGame.prototype.blockCards = function(cards) {
  cards.forEach(function(card){
    $(card.children().off());
  });
}

MemoryGame.prototype.selectCard = function(card) {
  this.pairsClicked += 1;
  parseInt($("#pairs_clicked").text(this.pairsClicked));
  // Turn cards by toggle classes front and back

  if(this.pairsClicked === 2) {
    this.selectedCards.push(card);
    // flip the second card inmediately
    this.flipCard(card);
    if(this.selectedCards[0].attr("name") === this.selectedCards[1].attr("name")) {
      this.blockCards(this.selectedCards);
      this.selectedCards = [];
    }
    else {
      var that = this;
      console.log("THAT");
      console.log(that.selectedCards);
      setTimeout(function(){
        that.flipCard(that.selectedCards[0]);
        that.flipCard(that.selectedCards[1]);
      }, 1000);  
      this.selectedCards = [];
    }
    this.pairsClicked = 0;
  }
  else {
    this.selectedCards.push(card);
    // flip card inmediately
    this.flipCard(card);
  }
}

// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function(){
  memoryGame = new MemoryGame();
  var html = '';

  // Suffle cards
  memoryGame._shuffleCards();

  memoryGame.cards.forEach(function(pic, index) {
    var sanitizedName = pic.name.split(' ').join('_');

    html += '<div class= "card" name="card_' + sanitizedName + '">';
    html += '<div class="back"';
    html += '    name="' + pic.name + '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + ')' + ' no-repeat"';
    html += '    name="'       + pic.name +  '">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the divs to the HTML
  document.getElementById('memory_board').innerHTML = html;

  // Click on cards
  $(".card").click(function(){
    memoryGame.selectCard($(this));
  });
});
