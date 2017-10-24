var memoryGame;

$(document).ready(function(){
  memoryGame = new MemoryGame();
  var html = '';

  var shuff = _.shuffle(memoryGame.cards);
  console.log(shuff);

  memoryGame.cards = shuff

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

  // Add all the divs to the HTML
  document.getElementById('memory_board').innerHTML = html;
  $('.back').on('click', function(){
    console.log($(this).attr('name'))
  });


var car = $(".card");
car.click(function(){
  $('.back').toggleClass('back');
  $('.front').toggleClass('back');
});


// $('.price ul li:nth-child(1)').show();




});
