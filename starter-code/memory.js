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

// Baraja cartas
MemoryGame.prototype.shuffleCards = function () {
  var resultado = _.shuffle(this.cards);
  this.cards = resultado;
};

// Selecciona cartas
MemoryGame.prototype.selectCard = function(cards) {
 //console.log(cards);
};

// Compara cartas
MemoryGame.prototype.compareCards = function(){
  if (this.selectedCards[0] == this.selectCard[1]){
    console.log('Son iguales');
  } else {
    console.log('No son iguales');
  }
};


MemoryGame.prototype.newSelectedCards = function(){
  this.selectedCards = [];
};


// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************
var memoryGame;

$(document).ready(function(){
  memoryGame = new MemoryGame();
  var html = '';

  memoryGame.shuffleCards();
  //console.log(memoryGame.cards);

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

  $('.card').click(function() {
    var card =  $(this).attr('id');
    memoryGame.selectedCards.push(card);
    if (memoryGame.selectedCards.length == 2) {
      console.log(memoryGame.selectedCards[0] + " / " + memoryGame.selectedCards[1]);
      memoryGame.compareCards();
      memoryGame.newSelectedCards();
    }
    console.log(memoryGame.selectedCards);
  });

//Boca abajo
  /*function abajoCard(card) {
    $(card).children('div.back').css('display', 'none');
    $(card).children('div.front').addClass('back');
    console.log(abajoCard);
  }*/
});
