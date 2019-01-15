var cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

$(document).ready(function () {
  var memoryGame = new MemoryGame(cards);
  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="' + pic.name + '">';
    html += '  <div class="back" name="' + pic.img + '"></div>';
    html += '  <div class="front" style="background: url(img/' + pic.img + ') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  $('#memory_board').html(html);

  // Bind the click event of each element to a function
  $('.card').click(function () {
    // TODO: write some code here
    // if($('card').hasClass())

    $(this).children().toggleClass('back front');
    memoryGame.pickedCards.push($(this));
    let self = this;
    console.log(memoryGame.pickedCards);
    if (memoryGame.pickedCards.length == 2) {

      if (memoryGame.checkIfPair(memoryGame.pickedCards[0].attr('data-card-name'), memoryGame.pickedCards[1].attr('data-card-name'))) {

        $(memoryGame.pickedCards[0]).children().addClass('front blocked');
        $(memoryGame.pickedCards[1]).children().addClass('front blocked');
        memoryGame.pickedCards = [];
        $('#pairs_guessed').text(memoryGame.pairsGuessed);
        $('#pairs_clicked').text(memoryGame.pairsClicked);
      } else {
        setTimeout(function () {
          $('#pairs_clicked').text(memoryGame.pairsClicked);
          $(memoryGame.pickedCards[0]).children().toggleClass('back front');
          $(memoryGame.pickedCards[1]).children().toggleClass('back front');
          memoryGame.pickedCards = [];
        }, 300);
      }
    } else {
    }
    if(memoryGame.isFinished()) {
      $('div').toggleClass('back front');
    }
  });




});


