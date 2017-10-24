

var memoryGame;

$(document).ready(function(){
  game1 = new MemoryGame();
  //game2 = new MemoryGame();
  console.log("esto es lo que vale mi nuevo objeto ", game1.cards);
  game1.cards = game1._shuffleCards()
  console.log("esto es lo que vale despues de suffle ", game1.cards);
  //game2.cards =game2._shuffleCards();

  var html = '';
  game1.cards.forEach(function(pic, index) {
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

  $(".card").on("click", function (){
  var cardName = $(this).attr("name");
  game1.selectCard (cardName);
  if (game1.selectedCards.length == 2){
    game1.pairsClicked++;
  } if (game1.compareCards () == true){
    game1.correctPairs ++;
    console.log("They are equal!!!");
  }
  else {
    console.log ("Sorry, they are not equal!!!");
  }
  game1.deleteArray();
  game1.winner ();
    console.log ("You won!!!!");
});

});
