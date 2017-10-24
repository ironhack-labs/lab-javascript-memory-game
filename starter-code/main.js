// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function(){
  game1 = new MemoryGame();
  game1._shuffleCards();

var html = '';
  game1.cards.forEach(function(pic, index) {
    var sanitizedName = pic.name.split(' ').join('_');

   html += '<div class= "card" name="card_' + sanitizedName + '">';
    html += '<div class="back"';
    html += '    name="' + pic.name + '"pic_img="'+pic.img+'">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the divs to the HTML
  document.getElementById('memory_board').innerHTML = html;

  $(".back").on( "click", function() {
    var imgCarta = $(this).attr('pic_img');
    $(this).css('background', "url('img/"+imgCarta+"'");
    //Guardo el valor de la carta clickada
    var valorcarta = $(this).attr('name')
    //Compruebo las cartas que tengo en el array
    game1.selectCards(valorcarta)
    if(game1.selectedCards.length == 2){
      console.log(game1.selectedCards)
      if(game1.checkEquals() == true) {
        console.log('Son iguales')
        if (game1.checkWinner() == true) {
          console.log('Has ganado!!!!')
        } else {
          console.log('Todavia te queda!')
        };
      } else {
        console.log('No son iguales')
      }
    }

  });
});
