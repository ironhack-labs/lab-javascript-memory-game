// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function(){
  memoryGame = new MemoryGame();
  var html = '';

  memoryGame._shuffleCarts();

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

  // Var for saving the superheroes guessed.
  var superheroes = [];
  // Selecting the card by the user
  $(".card").click(function(){
    var cardSelected = $(this).attr("name");
    console.log (superheroes);
    if ($.inArray(cardSelected,superheroes) > -1) {
      console.log ("You have discovered this pair yet. Choose another one");
    }
    else {
      console.log("The card you select is: "+cardSelected);
      memoryGame.selectCard(cardSelected, superheroes);
    }
    if (memoryGame.correctPairs == (memoryGame.cards.length/2)){
      console.log("YOU WON! ");
    }
  });
});
