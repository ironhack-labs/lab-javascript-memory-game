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

MemoryGame.prototype.compareCards = function (visibleCards) {
  /* check */console.log(visibleCards[0]);
  /* check */console.log(visibleCards[1]);
  if(visibleCards[0] === visibleCards[1]) {
    console.log("you win!");

  } else $(".card").toggleClass("back");
};


// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

// function to shuffle array

$(document).ready(function(){

function shuffle(array) {

  /* check */ console.log(array[1]); // check para ver como entra el array al loop
  /* check */ console.log(array); // es diferente del array inicial, es como si ya hubiera shuffleado: POR QUE?

  var temporaryValue, randomIndex;

  for (i=0; i<array.length; i++) {

    randomIndex = Math.floor(Math.random() * i);

    temporaryValue = array[i];
    array[i] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  /* check */ console.log(array[1]); // es diferente del console log array [1] al principio: OK

  return array;
}

// creating the grid

var memoryGame;


  memoryGame = new MemoryGame();
  var html = '';

  shuffle(memoryGame.cards);

  memoryGame.cards.forEach(function(pic, index) {
    var sanitizedName = pic.name.split(' ').join('_');

    html += '<div class= "card" name="card_' + sanitizedName + '">';
    html += '<div class="back"';
    html += '    name="' + pic.name + '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + ') no-repeat"';
    html += '    name="'       + pic.name +  '">';
    html += '</div>';
    html += '</div>';
  });




  // Add all the divs to the HTML
  document.getElementById('memory_board').innerHTML = html;


// flip card
var clicksCounter = 0;
var visibleCards = [];

  $(".card").click(function(){
    $(this).children().toggleClass("back");
    clicksCounter++;
    console.log('Imprimo this');
    var cardName = $(this).attr('name');
    visibleCards.push(cardName);
    /* check */ console.log(visibleCards);
    if(clicksCounter === 2) {
      memoryGame.compareCards(visibleCards);
    }
    /* check */ console.log("accumulated clicks " + clicksCounter); // see status of variable
  });


});
