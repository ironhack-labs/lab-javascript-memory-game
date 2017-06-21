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

MemoryGame.prototype.shuffleCards = function () {
  this.cards = _.shuffle(this.cards);
};

MemoryGame.prototype.selectCard = function(card){
  this.selectedCards.push(card);
  console.log(this.selectedCards);
  if (this.selectedCards.length <= 1){
    card++;
  } else {
    if (this.selectedCards[0]=== this.selectedCards[1]){
      this.pairsClicked++;
      console.log("Correct Pairs!! That's the way to go!");
      this.selectedCards=[];
    } else{
      flipBack(card);
      console.log("You'll better play another game. Looser.");
      this.selectedCards=[];
    }
  }
};


// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function(){
  memoryGame = new MemoryGame();
  memoryGame.shuffleCards();

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

  $(".card").click(function(){
    flip($(this));
    var cardSelected = $(this).attr("id");
    return memoryGame.selectCard(cardSelected);
  });
});

function flip(card) {
  $(card).children('div.back').css('display', 'none');
  $(card).children('div.front').addClass('back');
}

function flipBack(card) {
  $(card).children('div.back').css('display', 'block');
  $(card).children('div.front').removeClass('back');
}
