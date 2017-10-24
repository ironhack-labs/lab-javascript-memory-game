// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function(){
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
    html += '    name="'       + pic.name +  '">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the divs to the HTML
  document.getElementById('memory_board').innerHTML = html;

  $(".card").click(function(){
    var valor = $(this).attr("name");
    if(memoryGame.selectCard(valor)){
      memoryGame.correctPairs++;
      $("#pairs_guessed").text(memoryGame.correctPairs);
    } else{
      //Esta parte para el fin de semana
      //Queda que el contador de parejas suba con cada pareja en lugar de por unidad
      //Que las cartas, una vez vueltas, en caso de acierto no se den la vuelta
    }
    memoryGame.pairsClicked++;
    $("#pairs_clicked").text(memoryGame.pairsClicked);
    swipeCard(this);
  });

  function swipeCard(card) {
    $($(card).children()).first().toggle();
    $($(card).children()).last().toggleClass("back");
  }
});
