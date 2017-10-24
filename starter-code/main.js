$(document).ready(function() {
  var memoryGame = new MemoryGame();
  var shuffleCards = memoryGame._shuffleCards(memoryGame.cards);
  var html = '';
  memoryGame.selectCard(1)
  memoryGame.selectCard(2)
  console.log(memoryGame.selectedCards);
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

  $(".back").on('click', function() {
    //Entra el DIV
    memoryGame.selectCard($(this));
    memoryGame.finished();
  });
})
