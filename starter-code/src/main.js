var cards = [
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' },
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' }
];

$(document).ready(function(){

  
  var memoryGame = new MemoryGame(cards);
  
  var html = '';
  memoryGame.shuffleCard(cards).forEach(function (pic, index) {
    html += '<div class= "card" id="card_' + pic.name + '">';
    html += '<div class="back"';
    html += '    name="'       + pic.img +  '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + ') no-repeat">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  document.getElementById('memory_board').innerHTML = html;
  // Bind the click event of each element to a function
$('.back').on('click', function () {
   $(this).parents().children().toggleClass('front').toggleClass('back');
   memoryGame.pickedCards.push($(this));
   if (memoryGame.pickedCards.length == 2) {
     if (memoryGame.checkIfPair(memoryGame.pickedCards[0].parents().attr('id'), memoryGame.pickedCards[1].parents().attr('id'))) {
       $('#pairs_clicked').text(memoryGame.pairsClicked);
       $('#pairs_guessed').text(memoryGame.pairsGuessed);
   } else { 
      $(this).parents().children().toggleClass('back').toggleClass('front'); 
      $(memoryGame.pickedCards[0]).parent().children().toggleClass("back").toggleClass("front");
      $('#pairs_clicked').text(memoryGame.pairsClicked);
     }
     memoryGame.pickedCards = [];
    }
    /* var reload = memoryGame.finished.reload(forcedReload);
    reload; */
    
    if (memoryGame.finished()) {
      location.reload();
    };
  });
});
 
/* var timeOut = setTimeout(function() {
  $(this).parents().children().toggleClass('back').toggleClass('front'); 
  $(memoryGame.pickedCards[0]).parent().children().toggleClass("back").toggleClass("front");
  $('#pairs_clicked').text(memoryGame.pairsClicked);
 }, 1000); */

