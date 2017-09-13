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

MemoryGame.prototype._shuffleCards = function () {
  // Modern Fisher-Yates shuffling algorithm
  var length = this.cards.length
  for (var i = 0; i < length - 2; i++) {
    var j = Math.floor(Math.random() * (length - i)) + i
    this.cards = shuffle(i, j, this.cards)
  }
  // console.log(this.cards)
}

function shuffle (IndexCardA, IndexCardB, array) {
  // Copies the original array and returns a new one with the two items exchanging place
  var new_array = array.slice()
  var cardB = array[IndexCardB]

  new_array[IndexCardB] = array[IndexCardA]
  new_array[IndexCardA] = cardB
  return new_array
}

MemoryGame.prototype.selectCard = function (card) {
  if (this.selectedCards.length === 0) {
    // Case: Adding a first card
    this.selectedCards.push(card)
  }
  else {
    // Case: Adding a second card
    this.selectedCards.push(card)
    this.pairsClicked += 1
    var cardA = this.selectedCards[0]
    var cardB = this.selectedCards[1]

    if (cardA === cardB) {
      // Case: Good guess
      this.selectedCards = [] // resetting selectedCards
      this.correctPairs += 1

      // Updating game score-board on screen
      $('#pairs_guessed').text(this.correctPairs)
      $('#pairs_clicked').text(this.pairsClicked)

      // Hiding the front of the two cards, and displaying the backs
      $('.toUndisplay[name="' + cardA + '"]').removeClass('toUndisplay')
      $('.toUndisplay[name="' + cardB + '"]').removeClass('toUndisplay')
      $('.toDisplay[name="' + cardA + '"]').removeClass('toDisplay')
      $('.toDisplay[name="' + cardB + '"]').removeClass('toDisplay')
    }
    else {
      // Case: Wrong guess
      $('#pairs_clicked').text(this.pairsClicked)

      setTimeout(function () {
        $('.toUndisplay').css('display', 'none')
        $('.toDisplay').show()
      }, 1000) // We wait a bit before hiding the two (different) cards
      this.selectedCards = [] // Resetting selectedcards *after* closing
    }
  }
}

MemoryGame.prototype.finished = function () {
  if (this.correctPairs === this.cards.length / 2) {
    console.log('You won!') //=====> Not tested yet <====
  }
}

// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function(){
  memoryGame = new MemoryGame();  // init
  memoryGame._shuffleCards()      // shuffle at every new game
  var html = '';

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

  // ==================
  //   Click Handling
  // ==================
  // Handling clicks on a backwards-facing card
  $('.back').on('click', function () {
    $(this).css('display', 'none') // Hiding the back card
    $(this).parent().children('.front').show() // Showing the front card
    $(this).parent().children('.front').addClass('blocked') // Blocks the open card, so that it can't be closed immediately
    var card_name = ($(this).parent().children('.front').attr("name"))
    // console.log(card_name)

    //We add the following classes so that we can easily select and flip the cards back if the user guesses wrong:
    $(this).parent().children('.front').addClass('toUndisplay')
    $(this).addClass('toDisplay')

    memoryGame.selectCard(card_name)
    rules_enforcer(memoryGame) //Game police: prevents the user from opening too many cards
  });

  // Stopping the user from clicking more than 2 cards at once
  function rules_enforcer (memoryGame) {
    if (memoryGame.selectedCards.length >= 2) {
      $('.back').addClass('blocked')
    }
  }
});
