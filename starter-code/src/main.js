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

  //-------------------//
  // Initialize game   //
  //-------------------//

  // create the memory card deck
  var memoryGame = new MemoryGame(cards);
  // shuffle cards
  memoryGame.cards = memoryGame.shuffleCards(memoryGame.cards);
  // create cards
  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="' + pic.name + '">';
    html += '  <div class="back" name="' + pic.img + '"></div>';
    html += '  <div class="front hidden" style="background: url(img/' + pic.img + ') no-repeat"></div>';
    html += '</div>';
  });
  // Add all the div's to the HTML
  $('#memory_board').html(html);

  //-------------------//
  // Clicking the back //
  //-------------------//

  $('.back').click(function () {
    // when the timeout is set, status is false so you can't click on more cards
    if (memoryGame.status === false) {
      return;
    };

    // store element as previousCard (for flipping later)
    if (memoryGame.previousCard === "") {
      memoryGame.previousCard = this;
    };

    // change back and front
    flipCard($(this));
    // get card name (is on the parent div)
    cardName = $(this).parent().attr("data-card-name");
    // add current card to the picked Cards array
    memoryGame.pickedCards.push(cardName);

    // compare cards
    if (memoryGame.pickedCards.length === 2) {
      memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1], this);
    }
  });

});



