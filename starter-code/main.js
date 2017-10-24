// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function(){
  memoryGame = new MemoryGame();
  var html = '';
//to do shuffle as method of prototype
//
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

  MemoryGame.prototype.selectCard = function(card) {
    this.selectedCards.push(card);
    if(this.selectedCards.length === 2) {
      //compares the attr name of both cards
      if (this.selectedCards[0] ===  this.selectedCards[1]) {
        //empty array if match
        this.selectedCards = [];
        //increment correct pairs
        this.correctPairs ++;
        //flip the card
      } else {
        //if cars are different
        //tell user wrong guess
        // show back side of both
      }
    }
//check if
};

  // Add all the divs to the HTML
  document.getElementById('memory_board').innerHTML = html;

  $('.card').click(function() {
    memoryGame.selectCard($(this));
    // console.log(memoryGame.selectedCards);
    console.log($(this).attr('name'));

  });
});
