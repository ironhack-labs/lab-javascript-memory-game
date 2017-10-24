var memoryGame;

$(document).ready(function(){
  game1 = new MemoryGame();

game1.cards = game1._shuffleCards();

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

  $('.back').click(function(){
    var imageCard = $(this).attr('name');
    $(this).attr('style', '"background: url(img/" + imageCard +""');
  });


  $('.card').click(function(){
    var character = $(this).attr('name');
    game1.selectCard(character);
    if(game1.selectedCards.length == 2) {
      game1.pairsClicked++;
      if(game1.compareCards() == true){
        game1.correctPairs++;
        document.getElementById("pairs_guessed").innerHTML = game1.correctPairs;
        console.log("son iguales");
      }else{
        console.log("no son iguales");
        document.getElementById("pairs_clicked").innerHTML = game1.pairsClicked;
      }
      game1.deleteArray();
    }
  });
  if(game1.chooseWinner()){
    console.log("YOU WON!");
  }

});
