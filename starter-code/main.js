var memoryGame;

$(document).ready(function(){
  memoryGame = new MemoryGame();
  var html = '';

  var shuff = _.shuffle(memoryGame.cards);
  console.log(shuff);

  memoryGame.cards = shuff

  memoryGame.cards.forEach(function(pic, index) {
    var sanitizedName = pic.name.split(' ').join('_');
    MemoryGame.prototype._shuffleCards = function() {
      this.cards =_.shuffle(this.cards);
 };

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
  MemoryGame.prototype.saveCard = function(a) {
   this.selectedCards.push(a);
 };

  document.getElementById('memory_board').innerHTML = html;

  MemoryGame.prototype.compareCards = function() {
     this.pairsClicked += 1;
     if(this.selectedCards[0] === this.selectedCards[1]){
       console.log("Verdadero");
       this.correctPairs += 1;
       var newPairs = $("#pairs_guessed").html(this.correctPairs);
       $("#pairs_clicked").html(this.pairsClicked);
       this.selectedCards = [];
    } else {
      console.log("THIS IS AN ERROR");
      this.selectedCards = [];
    }
   };

var car = $(".card");
car.on('click',function(){
  var cardd = $(this).attr("name");
  memoryGame.saveCard(cardd);
  if (memoryGame.selectedCards.length == 2){
    // memory.Game.compareCards();
  }


  // $('.back').toggleClass('back');
  // $('.front').toggleClass('back');

});

});
