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
  // CARDS SHUFFLER BEFORE GAME STARTS: from link in HTML https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.min.js ??
  this._shuffleCards();
};

// GAME STRUCTURE AND LOGIC

MemoryGame.prototype._shuffleCards = function() {
  this.cards = _.shuffle(this.cards);
};


MemoryGame.prototype._selectCard = function(card) {

  if (this.selectedCards.length === 0) {
    $(card).addClass('blocked');
    this.selectedCards.push(card);
  } else if (this.selectedCards.length === 1) {
    updatePairsClicked();
    $(card).addClass('blocked');
    this.selectedCards.push(card);
    if (this.selectedCards[0].id === this.selectedCards[1].id) {
      pairsGuessed();
      this.selectedCards = [];
      checkIfWon();
    } else {
      var that = this;
      setTimeout(function() {
        $(that.selectedCards[0]).removeClass("blocked");
        $(that.selectedCards[1]).removeClass("blocked");
        $(that.selectedCards[0]).css("background-image", "");
        $(that.selectedCards[1]).css("background-image", "");
        $(that.selectedCards[0]).css("background-color", "#456783");
        $(that.selectedCards[1]).css("background-color", "#456783");
        that.selectedCards = [];
      }, 500);
    }
  }
};


// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function() {
  memoryGame = new MemoryGame();
  var html = '';

  memoryGame.cards.forEach(function(picture, index) {
    html += '<div class= "card" ';
    html += 'name="img/' + picture.name + '"' + ' id= ' + picture.img + '>';
    html += '</div>';
  });

  // Add all the divs to the HTML
  $('#memory_board').append(html);

  // Create click button event
  $('.card').on('click', function() {

    var cardIndex = $(this).index();
    var cardPicture = "url(img/" + $(this).attr("id") + ")";

    $(this).css("background-image", cardPicture);
    memoryGame._selectCard(this);
  });

});

//PAIRS CLICKED - adds to pairs clicked every two cards
function updatePairsClicked() {
  memoryGame.pairsClicked++;
  $('#pairs_clicked').html(memoryGame.pairsClicked);
}

//PAIRS GUESSED - when a correct pair is guessed, add to correct pairs
function pairsGuessed() {
  memoryGame.correctPairs++;
  $('#pairs_guessed').html(memoryGame.correctPairs);
}

//CHECK IF WON - number of correct pairs are equal to # pairs in game
function checkIfWon() {
  if (memoryGame.correctPairs === memoryGame.cards.length / 2) {
    $('h2').html("YOU WON :)");
    setTimeout(function() {
      location.reload();
    }, 3000);
  }
}
