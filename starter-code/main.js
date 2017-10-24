$(document).ready(function(){

  var memoryGame = new MemoryGame();
  var html = '';

  memoryGame.shuffle();
  // console.log(memoryGame.cards);
  // memoryGame.selectedCard();
  // console.log(memoryGame.selectedCards);
  // // memoryGame.checkCard();
// memoryGame.finished();


  memoryGame.cards.forEach(function(pic, index) {
    var sanitizedName = pic.name.split(' ').join('_');

   html += '<div class= "card" name="card_' + sanitizedName + '">';
    html += '<div class="back"';
    html += 'name="' + pic.name + '" pic_path="' + pic.img + '">';
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
    $(this).addClass("is-clicked");

    var name = $(this).attr("pic_path");
    $(this).css("background-image", "url('img/"+name+"");
    var selectedCardResult= memoryGame.selectedCard(name);


    if(memoryGame.selectedCards.length === 2) {
      var memoryResult = memoryGame.checkPairs();

      $("#pairs_clicked").html(memoryGame.pairsClicked);
      // console.log(memoryResult);
      if(memoryResult === false) {
        console.log($(this));
        // setTimeout(function() {
        //   $(".back").hasClass(".is-clicked").hide();
        // }, 1000);

        // $(this).css("background-image", "none");
      } else {
        $("#pairs_guessed").html(memoryGame.correctPairs);
        $(this).css(
          {index: "-1"},
          {position: "relative"}
        );
        $(this).addClass("match");
      }
    }
  });
});
