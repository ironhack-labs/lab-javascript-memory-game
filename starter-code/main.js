// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;
var card = "";

$(document).ready(function() {
  memoryGame = new MemoryGame();
  var html = '';

  var shuffledCards = memoryGame.shuffleCards();

  shuffledCards.forEach(function(pic, index) {
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

  $('.back').on('click', function(){
    $(this).removeClass("back");
    $(this).siblings().addClass("back");
    card = $(this).attr('name');
    memoryGame.selectCard(card);
    $('div[name="+ card +"').addClass("back");
  });

});

// On click trigger
