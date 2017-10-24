var memoryGame;

$(document).ready(function(){

  memoryGame = new MemoryGame();
  var html = '';

  memoryGame.cartRandom();


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
  document.getElementById('memory_board').innerHTML = html;

  $(".card").on("click", function(e){
    var e = $(this).attr("name");
    memoryGame.selectCard(e);

    showHidden(this);

    if(memoryGame.finished()){
      debugger
      var nodosSize = $('.card').length;
      for(var i = 0; i < nodosSize; i++) {
        toggleCard($('.card')[i]);
      }
    }
  });

//Una vez ganado esconde todos sus elementos;

  function showHidden(node) {
    toggleCard(node);//muestra
    if (memoryGame.selectedCards.length == 2 && !memoryGame.checkPairs()) {
      setTimeout(function () {
        toggleCard(node);//esconde_carta
        toggleCard(firstCard);//esconde_carta
      }, 1000);
    }
    else {
      firstCard = node;
    }
  }

//Muestra y esconde carta si esta mostrada la quita , si no la esconde
  function toggleCard(node) {
    $(node).children().first().toggle();
    $(node).children().last().toggleClass('back');
  }

});
