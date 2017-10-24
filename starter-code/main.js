// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function(){
  juanGame = new MemoryGame();
  juanGame._shuffleCards();

  var html = '';

  JuanGame.cards.forEach(function(pic, index) {
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
$(."back").on( "click", function(){

  //card it turns when you click it

  var cardImage = $(this).attr("pic_img");
  $(this).css("background", "url("img/"+ cardImage+""");

  var cardvalue = $(this).attr("name");

  //Checking the cards that are into the array

  juanGame.selectCards(cardvalue);
  if(juanGame.selectedCards == 2) {
    console.log(juanGame.selectedCards)
    if(juanGame.checkEquals() == true) {
      console.log("They match!")
      if (juanGame.checkWinner() == true) {
        console.log("You win!")
      } else {
        console.log("Push it, you are close!")
      };
    } else {
      console.log("They don't match")
    }
   }
  });
