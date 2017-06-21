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
memoryGame = new MemoryGame();
var arrayCurrentCards = [1];

$(document).ready(function(){

  MemoryGame.prototype.shuffleCards = function() {
    var m = memoryGame.cards.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = memoryGame.cards[m];
      memoryGame.cards[m] = memoryGame.cards[i];
      memoryGame.cards[i] = t;
    }
  };

  memoryGame.shuffleCards();
  var html = '';

  memoryGame.cards.forEach(function(pic, index) {
    var sanitizedName = pic.name.split(' ').join('_');

    html += '<div class= "card actual-image" id="card_' + sanitizedName + '">';
    html += '<div class="back"';
    html += '    name="img/' + pic.name + '"';
    html += '    id="'       + pic.img +  '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(\'img/' + pic.img + '\') no-repeat"';
    html += '    id="'       + pic.img +  '">';
    html += '</div>';
    html += '</div>';

  });

  // Add all the divs to the HTML
  document.getElementById('memory_board').innerHTML = html;

  MemoryGame.prototype.selectCard = function(card){
    card.children(":first-child").toggleClass("back");
    card.children(".front").toggleClass("actual-image");

  };



  $(".card").on("click",function(){
    arrayCurrentCards.push($(this));
    memoryGame.selectCard($(this));
    arrayCurrentCards.splice(0,1);

  });




});
