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
    // console.table(this.cards);
    // console.log(`selectedCards are: ${this.selectedCards}`);
    if(this.selectedCards.length === 2) {
      if (this.selectedCards[0] ===  this.selectedCards[1]) {
        console.log('MATCH!');
        this.correctPairs ++;
        this.removeMatchedCards(card);

      } else {
        console.log('FAIL!');
      }
      $("#pairs_clicked").html(this.pairsClicked);
      $("#pairs_guessed").html(this.correctPairs);
      this.pairsClicked ++;
      this.selectedCards = [];
    }
};

  MemoryGame.prototype.removeMatchedCards = function removeMatchedCards(card) {
  var cardOnlyName = card.substr(5, card.length);
  this.cards = this.cards.filter(function(el) {
    return el.name !== cardOnlyName;
    if(this.cards.length === 0) {
      console.log('YOU WON!');
    }
});
};
  // Add all the divs to the HTML
  document.getElementById('memory_board').innerHTML = html;

  $('.card').click(function() {
    showCard(this);
    memoryGame.selectCard($(this).attr('name'));
  });

  function showCard(card) {

    console.log($(card).find('.back'));
    $(card).find('.back').toggleClass('front');
    $(card).find('.front').toggleClass('back');
  };
});
