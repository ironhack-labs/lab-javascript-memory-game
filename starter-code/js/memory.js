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
});

MemoryGame.prototype._shuffleCards = function() {
  this.cards = _.shuffle(this.cards);
};

MemoryGame.prototype.selectCard = function(card){
  this.selectedCards.push(_.find(this.cards,{ 'name': card }));
  this.pairsClicked += 1;
  $('#pairs_clicked').html(this.pairsClicked);
  if(this.selectedCards.length == 2){
    if(this.selectedCards[0] == this.selectedCards[1]){
      console.log("Are equal");
      this.correctPairs += 1;
      this.selectedCards = [];
      $('#pairs_guessed').html(this.correctPairs);
      if(this.correctPairs == 12){
        // Status 3 - Finish
        console.log("Finish!");
        return 3;
      };
      // Status 1 Equal (+1)
      console.log("Its equal!");
      return 1;
    }
    else{
      console.log("Different! Check again");
      this.selectedCards = [];
      // Status 0 Different (unflip)
      return 0;
    }
  }
  console.log("waiting for the next");
  return 2;

};
MemoryGame.prototype.timeout = function(){
  this.selectedCards = [];
};
MemoryGame.prototype.finished = function() {
  console.log("HAS ACABADO!!!");
};
