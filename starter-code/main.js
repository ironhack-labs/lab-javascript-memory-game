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

  // Show and hide cards
  $(".card").click(function() {
    var pos = $(this).index();
    memoryGame.selectCard(pos);
    memoryGame.compare();
    $('#pairs_clicked').text(memoryGame.pairsClicked);

    if ($(this).find('.back').hasClass('back')){
      $(this).find(".back").removeClass('back');
      $(this).find(".front").addClass('back');
    } else {
      $(this).find(".back").addClass('back');
      $(this).find(".front").removeClass('back');
    }
  });

  // Update pairs clicked

});
