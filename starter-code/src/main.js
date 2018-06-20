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
  memoryGame.cards = memoryGame.shuffleCard(cards);
  memoryGame.cards.forEach(function (pic, index) {
    html += '<div class= "card" id="card_' + pic.name + '">';
    html += '<div class="back"';
    html += '    name="'       + pic.img +  '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + ') no-repeat">';
    html += '</div>';
    html += '</div>';
  })
  

  // Add all the div's to the HTML
  document.getElementById('memory_board').innerHTML = html;
  // Bind the click event of each element to a function
$('.back').on('click', function () {

    $(this).toggleClass('back');
    $(this).toggleClass('front');
    $(this).next().toggleClass('front');
    $(this).next().toggleClass('back');

    memoryGame.pickedCards.push($(this));
    var cardOne = memoryGame.pickedCards[0].attr('name');
    var cardTwo = memoryGame.pickedCards[1].attr('name');

    if(memoryGame.pickedCards.length == 2) {
      var pair = memoryGame.checkIfPair(cardOne,cardTwo)
        if (pair){
          memoryGame.pickedCards = [];
          $('#pairs_guessed').text(memoryGame.pairsGuessed);
          if($('#pairs_guessed').text('12')) {
            $('h2').text('You won!');
          }
          $('#pairs_clicked').text(memoryGame.pairsClicked);

        } else {
          $('#pairs_clicked').text(memoryGame.pairsClicked);
          setTimeout(function(){
            memoryGame.pickedCards[0].removeClass('front').addClass('back')
            memoryGame.pickedCards[0].next().removeClass('back').addClass('front')
          
            memoryGame.pickedCards[1].removeClass('front').addClass('back')
            memoryGame.pickedCards[1].next().removeClass('back').addClass('front')

            memoryGame.pickedCards = [];
          }, 500)

        }
    }

  
});

});