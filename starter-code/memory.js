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
  this.pairs = [];
};

// Shuffling cards
MemoryGame.prototype._shuffleCards = function() {
  return _.shuffle(this.cards);
};

// Select card
MemoryGame.prototype.selectCard = function(card) {

  if (this.selectedCards.length > 0) {
    this.selectedCards.push(card);
    this.pairsClicked += 1; //  Increase the pairsClicked attribute of the memoryGame and update the DOM

    this.pairs.pairsClicked = this.pairsClicked; // Add in array pairsClicked

    if (this.selectedCards[0].id === this.selectedCards[1].id && this.selectedCards[0].index !== this.selectedCards[1].index) {
      console.log("Correct pairs");
      this.selectedCards = []; // Empty out the selectedCards array for the next round
      this.correctPairs += 1; // Increase the correctPairs attribute by one
      this.pairs.correctPairs = this.correctPairs;
    } else {
      console.log("Wrong Guess"); // Show error message
      this.selectedCards = [];
      // Flip both cards back to the "back side"
    }
  } else {
    this.selectedCards.push(card);
  }

  return this.pairs;


};

// Finish Game
MemoryGame.prototype.finished = function() {
  this.pairs = this.cards.length / 2;
  if (this.pairs === this.correctPairs) {
    alert("You wins");
  }
};



// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function() {
  memoryGame = new MemoryGame();
  var html = '';

  // selectedCards
  memoryGame.cards = memoryGame._shuffleCards();
  console.log(memoryGame.cards);


  memoryGame.cards.forEach(function(pic, index) {
    var sanitizedName = pic.name.split(' ').join('_');

    html += '<div class="card" data-index="' + index + '" id="card_' + sanitizedName + '">';
    html += '<div class="back"';
    html += '    name="img/' + pic.name + '"';
    html += '    id="' + pic.img + '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + '") no-repeat"';
    html += '    id="' + pic.img + '">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the divs to the HTML
  document.getElementById('memory_board').innerHTML = html;

  clickCard();
});

function clickCard() {
  $('.back').on('click', function() {
    var card = [];
    card.id = $(this).closest('.card').attr('id');
    card.index = $(this).closest('.card').attr('data-index');
    // console.log(cardId);
    var pairs = memoryGame.selectCard(card);
    console.log(pairs);

    updatePairsClicked(pairs);
    var card1 = flipCard(card.index, pairs);
  });
  return card1;
}

function flipCard(cardIndex, pairs) {

  $('#memory_board div.card').each(function() {

    if ($(this).attr('data-index') == cardIndex) {
      var backDiv = $(this).find(".back");
      var id = backDiv.attr('id');


      if (!backDiv.hasClass('show')) {
        backDiv.addClass('show').css('background-image', 'url("img/' + id + '")');
      } else {
        // backDiv.css('background-image', 'none');
        backDiv.removeClass('show').css('background', '#456783');
      }

    }
  });

  return cardIndex;

}

function checkIsCorrect(card1, card2){

}

function updatePairsClicked(pairs) {
  $('#pairs_clicked').text(pairs.pairsClicked);
  $('#pairs_guessed').text(pairs.correctPairs);
}
