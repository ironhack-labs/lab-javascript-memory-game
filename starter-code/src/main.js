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

// Flip Card
function flipCard(card) {
  card.toggleClass('back');
  card.toggleClass('front');
  card.siblings().toggleClass('back');
  card.siblings().toggleClass('front');
}

// Start Game
$(document).ready(function() {
  var memoryGame = new MemoryGame(cards);

  // shuffle cards
  memoryGame.shuffleCards();

  // Add all the div's to the HTML
  var html = '';
  memoryGame.cards.forEach(function(pic) {
    html += '<div class="card" data-card-name="' + pic.name + '">';

    html += '  <div class="back" name="' + pic.img + '"></div>';
    html +=
      '  <div class="front" style="background: url(img/' +
      pic.img +
      ') no-repeat"></div>';

    html += '</div>';
  });
  $('#memory_board').html(html);

  /*************************************************
   * When card got clicked
   *************************************************/
  $('.back').click(function() {
    var thisCard = $(this);
    // 1. flip the card and push the cardName to pickedCards array
    flipCard(thisCard);
    memoryGame.pickedCards.push(thisCard);

    // 2. if two cards got flipped, check if they are the same
    if (memoryGame.pickedCards.length === 2) {
      var cardName1 = memoryGame.pickedCards[0].parent().attr('data-card-name');
      var cardName2 = memoryGame.pickedCards[1].parent().attr('data-card-name');

      // if not the same, flip the cards back
      // else just leave the cards open
      if (!memoryGame.checkIfPair(cardName1, cardName2)) {
        var card1 = memoryGame.pickedCards[0];
        var card2 = memoryGame.pickedCards[1];
        setTimeout(() => {
          flipCard(card1);
          flipCard(card2);
        }, 400);
      }

      // reset array
      memoryGame.pickedCards = [];
    }

    // 3. Update the scores
    $('#pairs_clicked').text(memoryGame.pairsClicked);
    $('#pairs_guessed').text(memoryGame.pairsGuessed);

    // 4. Win
    if (memoryGame.isFinished()) {
      $('#pairs_guessed').text('You Win!');
    }
  });
});
