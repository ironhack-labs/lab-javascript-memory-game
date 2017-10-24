// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

$(document).ready(function(){
  var memoryGame = new MemoryGame();
  var html = '';

  // Call the shuffle method
  memoryGame._shuffleCards();

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

  $('.back').on('click', function(){
      memoryGame.selectCard($(this));
      memoryGame.finished();
  });
});
