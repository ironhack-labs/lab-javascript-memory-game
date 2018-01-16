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

$(document).ready(function () {
  var memoryGame = new MemoryGame(cards);
  memoryGame.cards = memoryGame.shuffleCard(memoryGame.cards);
  var html = '';
  memoryGame.cards.forEach(function (pic, index) {
    html += '<div class= "card" id="card_' + pic.name + '">';
    html += '<div class="back"';
    html += '    name="' + pic.img + '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + ') no-repeat">';
    html += '</div>';
    html += '</div>';
  });


   document.getElementById('memory_board').innerHTML = html;

   var clicks = 0;
  
$('.back').on('click', function (e) {

  clicks ++;

  if(clicks%2==0){
    console.log(memoryGame.pickedCards);
    $('.card').addClass('blocked');
    memoryGame.pickedCards.push($(this).attr('name').split('.')[0]);
    $(this).addClass('visible');
    if (memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1])) {
      $('.visible').parent().addClass('matched');
      memoryGame.pickedCards.length = 0;
      $('.card').removeClass('blocked');
    } else {
      setTimeout(function () {hideNotMatchedCards()}, 500);
      memoryGame.pickedCards.length = 0;  
      $('.card').removeClass('blocked');
    }
  }else{
    memoryGame.pickedCards.push($(this).attr('name').split('.')[0]);
    $(this).addClass('visible');
  }

  $('#pairs_clicked').text(memoryGame.pairsClicked);
  $('#pairs_guessed').text(memoryGame.pairsGuessed);

});

function hideNotMatchedCards() {
  $('.back').removeClass('visible');
}

});


