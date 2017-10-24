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
    $(this).children().first().toggle();//Cambia a none y block;
    $(this).children().last().toggleClass('back');//le pone una clase y se la quita;

    if (memoryGame.selectedCards.length == 2) {
      if(memoryGame.checkPairs()){

      }
      else {
        var that = this
        setTimeout(function () {
          $(that).children().first().toggle();
          $(that).children().last().toggleClass('back');
          $(firstCard).children().first().toggle();
          $(firstCard).children().last().toggleClass('back');
        }, 1000);
      }
    } else {
      firstCard = this
    }
  });
  
});
