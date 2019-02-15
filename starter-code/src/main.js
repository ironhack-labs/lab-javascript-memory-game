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
    html += '  <div class="front hidden" style="background: url(img/' + pic.img + ') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  $('#memory_board').html(html);

  // Bind the click event of each element to a function
  $('.back').click(function () {
    // when the timeout is set, status is false so you can't click on more cards
    if (memoryGame.status === false) {
      return;
    };

    // store element as previousCard (for flipping later)
    if (memoryGame.previousCard.length == 0) {
      memoryGame.previousCard = this;
    }
    // hide the back
    $(this).toggleClass("hidden");
    // show the front
    $(this).siblings(".front").toggleClass("hidden");
    // get card name (is on the parent div)
    cardName = $(this).parent().attr("data-card-name");
    // add current card to the picked Cards array
    memoryGame.pickedCards.push(cardName);
    // console.log(memoryGame.pickedCards);
    // console.log(memoryGame.pickedCards.length);
    // compare cards
    if (memoryGame.pickedCards.length === 2) {
      if (memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1])) {
        // true (match found)
        // console.log("x");
        console.log("pairs guessed is " + memoryGame.pairsGuessed)
        memoryGame.previousCard = '';
        memoryGame.pickedCards = [];
        memoryGame.isFinished();
      } else {
        // false (no match)
        that = this;
        memoryGame.status = false;
        setTimeout(function () {
          // flip current card
          $(that).toggleClass("hidden");
          $(that).siblings(".front").toggleClass("hidden");
          $(memoryGame.previousCard).toggleClass("hidden");
          $(memoryGame.previousCard).siblings(".front").toggleClass("hidden");
          memoryGame.previousCard = '';
          memoryGame.status = true;
        }, 1000);
        memoryGame.pickedCards = [];
      }
    }
  });

  // Flip cards when wrong guess
  // $(".front").click(function () {
  //   // switchCard($(this));
  //   $(this).toggleClass("hidden");
  //   $(this).siblings(".back").toggleClass("hidden");
  // })


});



