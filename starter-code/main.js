// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function(){
  juego = new MemoryGame();
  var html = '';
  juego.shuffleCards();
  //llamar al metodo shuffle para desordenar

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
});

$(".card").on("click", function(){
  var cardValue = $(this).attr("name")
})

juego.selectCards(cardValue)
  if(juego.selectedCards.length === 2){
    console.log(juego.selectedCards)
    if(juego.setEquals() == true) {
      console.log("Son iguales");
    if(juego.checkWinner() == true){
      console.log("Eres el mejor");
    }else{
      console.log("Sigue intentandolo");
    };
    }else{
    console.log("No son iguales");
  }
  }
