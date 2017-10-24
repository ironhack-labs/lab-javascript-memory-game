// //******************************************************************
// // Game Logic
// //******************************************************************
var MemoryGame = function() {
  this.cards = [{
      name: "aquaman",
      img: "aquaman.jpg"
    },
    {
      name: "batman",
      img: "batman.jpg"
    },
    {
      name: "captain america",
      img: "captain-america.jpg"
    },
    {
      name: "fantastic four",
      img: "fantastic-four.jpg"
    },
    {
      name: "flash",
      img: "flash.jpg"
    },
    {
      name: "green arrow",
      img: "green-arrow.jpg"
    },
    {
      name: "green lantern",
      img: "green-lantern.jpg"
    },
    {
      name: "ironman",
      img: "ironman.jpg"
    },
    {
      name: "spiderman",
      img: "spiderman.jpg"
    },
    {
      name: "superman",
      img: "superman.jpg"
    },
    {
      name: "the avengers",
      img: "the-avengers.jpg"
    },
    {
      name: "thor",
      img: "thor.jpg"
    },
    {
      name: "aquaman",
      img: "aquaman.jpg"
    },
    {
      name: "batman",
      img: "batman.jpg"
    },
    {
      name: "captain america",
      img: "captain-america.jpg"
    },
    {
      name: "fantastic four",
      img: "fantastic-four.jpg"
    },
    {
      name: "flash",
      img: "flash.jpg"
    },
    {
      name: "green arrow",
      img: "green-arrow.jpg"
    },
    {
      name: "green lantern",
      img: "green-lantern.jpg"
    },
    {
      name: "ironman",
      img: "ironman.jpg"
    },
    {
      name: "spiderman",
      img: "spiderman.jpg"
    },
    {
      name: "superman",
      img: "superman.jpg"
    },
    {
      name: "the avengers",
      img: "the-avengers.jpg"
    },
    {
      name: "thor",
      img: "thor.jpg"
    },
  ];
  this.selectedCards = [];
  this.pairsClicked = 0;
  this.correctPairs = 0;
};

MemoryGame.prototype.shuffleCards = function() {
  var i = 0
    , aleatorio = 0
    ,nonShuffledCards = this.cards
    ,shuffledCards = [];
  for (i = nonShuffledCards.length - 1; i > -1 ; i--) {
    aleatorio = Math.round(Math.random() * i);
    shuffledCards.push(nonShuffledCards[aleatorio]);
    nonShuffledCards.splice([aleatorio],1);
  }
  return(shuffledCards);
};




// var someArray = [1,2,3,4,5,6,7,8,9];
// var theLength = someArray.length - 1;
// var toSwap; // The index we will swap  (i.e. the random number)
// var temp; // A temporary variable to hold reference to index variable i points to
// for (i = theLength; i > 0; i--) {
//     toSwap = Math.floor(Math.random() * i);
//     temp = someArray[i];
//     someArray[i] = someArray[toSwap];
//     someArray[toSwap] = temp;


// Selected Cards - Array with 1, 2 or 0 values

// Pairs Clicked - Keeps track of the amount of cicks

// Correct Pairs - Number of correct clicks

// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function() {
  memoryGame = new MemoryGame();
  var html = '';


memoryGame.shuffleCards();

  memoryGame.cards.forEach(function(pic, index) {
    var sanitizedName = pic.name.split(' ').join('_');
    html += '<div class= "card" name="card_' + sanitizedName + '">';
    html += '<div class="back"';
    html += '    name="' + pic.name + '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url("img/' + pic.img + '") no-repeat"';
    html += '    name="' + pic.name + '">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the divs to the HTML
  document.getElementById('memory_board').innerHTML = html;
});
