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
    let $card = $(this).parent();

    $card.addClass(`Clicked`);

    $card.find(`.back, .front`).toggleClass(`back front`);

    memoryGame.pickedCards.push($card);

    if (memoryGame.pickedCards.length == 2) {
      $(`.back, .front`).addClass(`blocked`);

      let $card1 = memoryGame.pickedCards[0];
      let $card2 = memoryGame.pickedCards[1];
      let result = memoryGame.checkIfPair($card1.data(`card-name`), $card2.data(`card-name`));

      $(`#pairs_clicked`).html(memoryGame.pairsClicked);
      $(`#pairs_guessed`).html(memoryGame.pairsGuessed);

      if (result) {
        $($card1, $card2).addClass(`itsAMatch`);
        $(`.back, .front`).removeClass(`blocked`);
      } else {
        $(`.clicked`).removeClass(`clicked`);
        setTimeout(function () {
          $($card1).find(`.back, .front`).toggleClass(`back front`);
          $($card2).find(`.back, .front`).toggleClass(`back front`);
          $(`.back, .front`).removeClass(`blocked`);
        }, 1000)
      }
      if (memoryGame.isFinished()) {
        setTimeout(function () {
          alert(`aeeeeeeeew`)
        }, 500)
      }
      memoryGame.pickedCards = [];
    }
  });
});