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
  var array = this.cards,
      length = array.length,
      current,
      remain;

  // While there remain elements to shuffle…
  while (length) {

    // Pick a remaining element…
    remain = Math.floor(Math.random() * length--);

    // And swap it with the current element.
    current = array[length];
    array[length] = array[remain];
    array[remain] = current;
  }

  return this.cards;

};

MemoryGame.prototype.selectCard = function(card) {
    if (this.selectedCards.length === 2){
      console.log(this.selectedCards[0]);
      console.log(this.selectedCards[1]);
      if(this.selectedCards[0] === this.selectedCards[1]){
        console.log("You got it rigth");
        this.selectedCards = [];
        this.correctPairs +=1;
        if(this.correctPairs === 12) {
          this.finished();
        }
        this.pairsClicked = 0;
        console.log(this.correctPairs);
      } else {
        console.log("Wrong guess, try again");
        this.selectedCards=[];
        this.pairsClicked = 0;
      }
    }

};

MemoryGame.prototype.finished = function() {
    return "You WIN :)";
};
// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function(){
  memoryGame = new MemoryGame();
  memoryGame._shuffleCards();
  var html = '';

  memoryGame.cards.forEach(function(pic, index) {
    var sanitizedName = pic.name.split(' ').join(' ');

    html += '<div class= "card" id="' + sanitizedName + '" index='+ index +'">';
    html += '<div class="back"';
    html += '    name="' + pic.name + '"';
    html += '    id="'       + pic.img +  '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(./img/' + pic.img + '") no-repeat"';
    html += '    id="'       + pic.img +  '">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the divs to the HTML
  document.getElementById('memory_board').innerHTML = html;

  $(".card").click(function(){
    var clickCard = String($(this).attr("id"));
    $(this).find(":first-child").removeClass("back");
    $(this).find(":first-child").next().addClass("back");
    memoryGame.pairsClicked +=1;
    memoryGame.selectedCards.push(clickCard);
    memoryGame.selectCard();
  });

});
