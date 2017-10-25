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
    html += 'style="background: url(img/' + pic.img + '") no-repeat"';
    html += '    name="' + pic.name + '">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the divs to the HTML
  document.getElementById('memory_board').innerHTML = html;

  $('.card').on('click', function() {
    var cardSelect = $(this);
    var cardToCheck = $(this).attr('name');

    if (memoryGame.selectedCards.length <= 2){
      memoryGame.selectCards(cardToCheck);
        flipCard(cardSelect);
  } else {
    flipCardReset(cardSelect);
  }
    if (memoryGame.selectedCards.length == 2) {
      memoryGame.checkCards();
          flipCardReset(cardSelect);
    }
  });

  function flipCard(frontCard){
    $(cardSelect).children().first().toggle();
    $(cardSelect).children().last().toggleClass('back');
  }
  function flipCardReset(backCard){
    $(backCard).children().first().toggleClass('back');
    $(backCard).children().last().toggleClass('front');
  };

});
