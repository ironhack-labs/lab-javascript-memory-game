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

function flipCard(card) {
  card.toggleClass('back');
  card.toggleClass('front');
  card.siblings().toggleClass('back');
  card.siblings().toggleClass('front');
}

$(document).ready(function () {
  var memoryGame = new MemoryGame(cards);

  memoryGame.shuffleCards();

  // Add all the div's to the HTML
  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="' + pic.name + '">';
    html += '  <div class="back" name="' + pic.img + '"></div>';
    html += '  <div class="front" style="background: url(img/' + pic.img + ') no-repeat"></div>';
    html += '</div>';
  });

  $('#memory_board').html(html);


  // Bind the click event of each element to a function
  $('.back').click(function() {
    memoryGame.pickedCards.push($(this).parent('.card'));
    $(this).removeClass('back').addClass('front');
    $(this).siblings().removeClass('front').addClass('back');

    // If 2 cards got flipped, check if they are the same
    if (memoryGame.pickedCards.length === 2) {
      var cardName1 = memoryGame.pickedCards[0];
      var cardName2 = memoryGame.pickedCards[1];

      if (!memoryGame.checkIfPair(cardName1, cardName2)) {
        var firstCard = memoryGame.pairsClicked[0];
        var secondCard = memoryGame.pairsClicked[1];
        setTimeout(() => {
          flipCard(firstCard);
          flipCard(secondCard);
        }, 250);
      }
    }
    memoryGame.pickedCards = [0];

    // Update the scores
    $('#pairs_clicked').text(memoryGame.pairsClicked);
    $('#pairs_guessed').text(memoryGame.pairsClicked);

    if (memoryGame.isFinished()) {
      $('#pairs_quessed').text('You are winner!');
    }
  });
});