// //******************************************************************
// // Game Logic
// //******************************************************************
var MemoryGame = function () {
  this.cards = [
    { name: "aquaman", img: "aquaman.jpg" },
    { name: "batman", img: "batman.jpg" },
    { name: "captain america", img: "captain-america.jpg" },
    { name: "fantastic four", img: "fantastic-four.jpg" },
    { name: "flash", img: "flash.jpg" },
    { name: "green arrow", img: "green-arrow.jpg" },
    { name: "green lantern", img: "green-lantern.jpg" },
    { name: "ironman", img: "ironman.jpg" },
    { name: "spiderman", img: "spiderman.jpg" },
    { name: "superman", img: "superman.jpg" },
    { name: "the avengers", img: "the-avengers.jpg" },
    { name: "thor", img: "thor.jpg" },
    { name: "aquaman", img: "aquaman.jpg" },
    { name: "batman", img: "batman.jpg" },
    { name: "captain america", img: "captain-america.jpg" },
    { name: "fantastic four", img: "fantastic-four.jpg" },
    { name: "flash", img: "flash.jpg" },
    { name: "green arrow", img: "green-arrow.jpg" },
    { name: "green lantern", img: "green-lantern.jpg" },
    { name: "ironman", img: "ironman.jpg" },
    { name: "spiderman", img: "spiderman.jpg" },
    { name: "superman", img: "superman.jpg" },
    { name: "the avengers", img: "the-avengers.jpg" },
    { name: "thor", img: "thor.jpg" },
  ];
  this.selectedCards = []; // Array including the card object selected and the index
  this.pairsClicked = 0;
  this.correctPairs = 0;
};


// Method to shuffle the cards 
MemoryGame.prototype._shuffleCards = function () {

  // Fisher–Yates shuffle
  for (var i = memoryGame.cards.length - 1, j = 0, swapTmpVar = 0; i > 0; i -= 1) {
    j = Math.floor(Math.random() * memoryGame.cards.length);
    swapTmpVar = memoryGame.cards[i];

    memoryGame.cards[i] = memoryGame.cards[j]
    memoryGame.cards[j] = swapTmpVar;
  }
};

// Selecting a card function
MemoryGame.prototype.selectCard = function (card, index) {

  //  If the user has selected a card in the last turn
  if (this.selectedCards.length > 0) {

    // Add the card to the selectedCards array and move on 
    this.selectedCards.push([card, index]);

    console.log("Card " + this.selectedCards[0][0].name + " was previously selected");

    // Increase the pairsClicked attribute of the memoryGame and update the DOM
    this.pairsClicked += 1;
    $("#pairs_clicked").text(this.pairsClicked);

    // Compare the newly selected card to the previously selected card. Are they of the same type?
    if (this.selectedCards[0][0].name === this.selectedCards[1][0].name) {
      console.log("Pair found");

      // Possibly add some styling to tell the user "Wrong Guess"
      $('#score').animate({ backgroundColor: '#00cc99' }, 100).animate({ backgroundColor: '#D3E3FF' }, 100);

      // Increase the correctPairs attribute by one
      this.correctPairs += 1;
      $("#pairs_guessed").text(this.correctPairs);

      // End the game when the user won
      if (this.correctPairs === 12) {
        setTimeout(this.finished, 100);
      }
      // Empty out the selectedCards array for the next round
      this.selectedCards = [];

    } else {
      // Possibly add some styling to tell the user "Wrong Guess"
      $('#score').animate({ backgroundColor: '#ff5050' }, 100).animate({ backgroundColor: '#D3E3FF' }, 100);

      console.log("Wrong pair :'(", );

      // Flip both cards back to the "back side"
      // BACK - first card
      setTimeout(function () {
        var cardParentIndex = this.selectedCards[0][1] + 1;
        $('.card:nth-child(' + cardParentIndex + ') div:first-child').toggleClass('back');
        $('.card:nth-child(' + cardParentIndex + ') div:last-child').toggleClass('front-displayed');

        // BACK - second card
        cardParentIndex = this.selectedCards[1][1] + 1;
        $('.card:nth-child(' + cardParentIndex + ') div:first-child').toggleClass('back');
        $('.card:nth-child(' + cardParentIndex + ') div:last-child').toggleClass('front-displayed');

        // Empty out the selectedCards array for the next round
        this.selectedCards = [];
        
      }.bind(this), 1000);
    }



  }

  // If no card was selected before
  else {
    // Add the card to the selectedCards array and move on 
    this.selectedCards.push([card, index]);
    console.log('First card selected');

  }
};

// Ending the game
MemoryGame.prototype.finished = function () {
  console.log("Congratulations!!!");
  if (confirm('Well done, you rock! Do you want to play again?')) {
    resetGame();
    newGame();
  } else {
    alert("No worries, see you!");
  }
};


// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;
var newGame;
var resetGame;

$(document).ready(function () {

  resetGame = function () {
    $('#pairs_clicked').text("0");
    $("#pairs_guessed").text("0");
    document.getElementById('memory_board').innerHTML = "";
    memoryGame = 0;
  }

  newGame = function () {
    memoryGame = new MemoryGame();
    memoryGame._shuffleCards();
    var html = '';

    memoryGame.cards.forEach(function (pic, index) {
      var sanitizedName = pic.name.split(' ').join('_');

      html += '<div class= "card " id="card_' + sanitizedName + '">';
      html += '<div class="back"';
      html += '    name="img/' + pic.name + '"';
      html += '    id="' + pic.img + '">';
      html += '</div>';
      html += '<div class="front" ';
      html += 'style="background: url(\'img/' + pic.img + '\') no-repeat"';
      html += '    id="' + pic.img + '">';
      html += '</div>';
      html += '</div>';
    });

    // Add all the divs to the HTML
    document.getElementById('memory_board').innerHTML = html;

    // Initialise the state of the score block
    $('#score').attr('style', 'background-color: #D3E3FF; position: fixed; top: 0; right: 0');


    // The card is not filpped
    $('.back').on('click', function () {
      // Retrive the selected card parent node (<div class="card" id="card_...)
      var $cardSelected = $(this).parent();

      // Flip the card
      $(this).toggleClass('back');
      $cardSelected.children('.front').toggleClass('front-displayed');

      // Find the index of the item in the list of cards in the HTML
      // It should be = to the index of the card in the cards array
      var cardIndex = $('.card').index($cardSelected);

      // check if we have a match
      memoryGame.selectCard(memoryGame.cards[cardIndex], cardIndex);
    });
  }

  // run the game
  newGame();

});
