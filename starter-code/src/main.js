
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

let countClicks = 0;
let first;
let second;

$(document).ready(function () {
  var memoryGame = new MemoryGame(cards);
  memoryGame.shuffleCards();
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
  $('.back').click(function () {
    if ($(this).hasClass('blocked')) {
    }
    else {
      countClicks += 1
      if (countClicks === 1) {
        first = $(this);
        flipCards(first);
      }
      else if (countClicks === 2) {
        second = $(this);
        flipCards(second);
        if (memoryGame.checkIfPair(first.attr('name'), second.attr('name'))) {
          first.addClass('blocked');
          second.addClass('blocked');
          $('#pairs_guessed').text(`${memoryGame.pairsGuessed}`);
        }
        $('#pairs_clicked').text(`${memoryGame.pairsClicked}`) ;
      }
      else {
        flipCards(first);
        flipCards(second);
        countClicks = 0;
      }
    }
    memoryGame.isFinished() ? alert(`UHUUUUUUUUUU!!!!`) : null;

  });

  let flipCards = function (card) {
    if(card.hasClass('blocked')){}

    else{
    if (card.hasClass('back')) {
      card.removeClass('back');
      card.addClass('front');
      card.next().removeClass('front');
      card.next().addClass('back');
    }
    else {
      card.removeClass('front');
      card.addClass('back');
      card.next().removeClass('back');
      card.next().addClass('front');
    }
  }
  }
});


