// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function(){
  memoryGame = new MemoryGame();
  var html = '';

  // We shuffle our cards before displaying
  memoryGame.shuffle(memoryGame.cards);

  // Display the cards
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
  document.getElementById('memory_board').innerHTML = html;

  // Card click
  $(".card").click(function() {
    var pos = $(this).index();
    memoryGame.selectCard(pos);
    memoryGame.compare();

    // Show card
    $(this).find(".back").removeClass('back');
    $(this).find(".front").addClass('back');

    // Hide card
    setTimeout(function(){
      $(this).first().addClass('back');
      $(this).find(".front.back").removeClass('back');
    }, 2000);

    // Update score counters on card click
    $('#pairs_clicked').text(memoryGame.pairsClicked);
    $('#pairs_guessed').text(memoryGame.correctPairs);
  });

});
