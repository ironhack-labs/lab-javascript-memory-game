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
  this.control = 0;
};

//***********************  shuffle  *****************************//
MemoryGame.prototype._shuffleCards = function() {
  var array = this.cards;
  var size = array.length;
  var holder, randomIndex;

  while (size) {
    randomIndex = Math.floor(Math.random() * size--);
    holder = array[size];
    array[size] = array[randomIndex];
    array[randomIndex] = holder;
  }

  this.cards = array;
};
//_______________________________________________________________//

//***********************  score table  *************************//
MemoryGame.prototype.selectCard = function(card) {
  this.control += 1;
  if (this.selectedCards.length < 1) {
    this.selectedCards.push(card);
    match = false;
  } else if (this.selectedCards[0].attr("name") === card.attr("name")) {
    this.correctPairs += 1;
    this.pairsClicked += 1;
    this.selectedCards[0].addClass("match");
    card.addClass("match");
    this.selectedCards = [];
  } else {
    this.pairsClicked += 1;
    this.selectedCards = [];
  }
};
//_______________________________________________________________//

//************************  hide card  **************************//
function hideCard() {
  //debugger;
  // if(!$(".card div:first-child").hasClass("match")) {
    $(".back").show();
    $(".front").hide();
  // }
}
//_______________________________________________________________//

// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function() {
  memoryGame = new MemoryGame();
  var html = '';
  memoryGame._shuffleCards();

  memoryGame.cards.forEach(function(pic, index) {
    var sanitizedName = pic.name.split(' ').join('_');

    html += '<div class= "card" name="card_' + sanitizedName + '">';
    html += '<div class="back"';
    html += '    name="' + pic.name + '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + ') no-repeat"';
    html += '    name="' + pic.name + '">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the divs to the HTML
  document.getElementById('memory_board').innerHTML = html;
  $(".front").hide();

  $(".back").click(function() {

    $(this).hide();
    $(this).next().show();
    memoryGame.selectCard($(this));
    if(memoryGame.control % 2 === 0) {
      setTimeout(hideCard, 1000);
    }
  });

});
