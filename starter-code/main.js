// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;
function blockCards() {
  $('.back, .front').addClass('blocked');
}
function unblockCards() {
  $('.back, .front').removeClass('blocked');
}
function reveal(element) {
  $(element).next().addClass('back');
  $(element).css('display', 'none');
}
function flip(element) {
  $(element).removeClass('back');
  $(element).prev().css('display', 'block');
}
function flipPair() {
  var reveleadCars = $('.front.back:not(".fixed")');
  flip(reveleadCars);
}
function fixCards() {
  var guessedCards = $('.front.back:not(".fixed")');
  $(guessedCards).addClass('fixed');
  $(guessedCards).prev().addClass('fixed');
}
$(document).ready( function () {
  memoryGame = new MemoryGame();
  var html = '';

  memoryGame.cards = memoryGame._shuffleCards();

  memoryGame.cards.forEach(function(pic, index) {
    var sanitizedName = pic.name.split(' ').join('_');

    html += '<div class= "card" name="card_' + sanitizedName + '">';
    html += '<div class="back"';
    html += '    name="' + pic.name + '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + '") no-repeat"';
    html += '    name="'       + pic.name +  '">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the divs to the HTML
  // document.getElementById('memory_board').innerHTML = html;
  // Ya que estamos usando JQuery, mejor:
  $('#memory_board').html(html);
  //$('.back').on('click', function() { console.log( $(this).attr('name') ); });
  $('.back').on('click', function() {
    var turn = memoryGame.selectedCards.length;
    if ( turn < 2) {
      reveal(this);
    } else if (turn == 2) {
      flip(this);
    }
    var cardName = $(this).attr('name');
    memoryGame.selectCard(cardName);
  });

});
