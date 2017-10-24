// var _ = require('lodash');


var memoryGame;

$(document).ready(function(){
  memoryGame = new MemoryGame();
  var html = '';

  memoryGame.shuffleMg()
  console.log(memoryGame.shuffleMg())

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


$(".back").click(function(){
console.log(this)
memoryGame.selectedCards(this)
})


  // Add all the divs to the HTML
})
