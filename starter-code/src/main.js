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
  memoryGame.shuffleCards()
  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="' + pic.name + '">';
    html += '  <div class="back" name="' + pic.img + '"></div>';
    html += '  <div class="front" style="background: url(img/' + pic.img + ') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  $('#memory_board').html(html);

  function turnAround(card) {
    $(card.childNodes[1]).toggleClass("back");
    $(card.childNodes[1]).toggleClass("front");
    $(card.childNodes[3]).toggleClass("back");
    $(card.childNodes[3]).toggleClass("front");
  }

  function updateCounters() {
    $("#pairs_clicked").empty().append(memoryGame.pairsClicked);
    $("#pairs_guessed").empty().append(memoryGame.pairsGuessed);

  };


  // Bind the click event of each element to a function
  $('.back').click(function () {
    //Turn around the card
    card = this.parentElement;
    turnAround(card);

    //if it is the first, just add it to the picked cards
    if (memoryGame.pickedCards.length == 0) {
      memoryGame.pickedCards.push(card);

      //else check if the 2 selected are a pair
    } else if (memoryGame.pickedCards.length == 1) {
      memoryGame.pickedCards.push(card);

      if (memoryGame.checkIfPair(memoryGame.pickedCards[0].dataset.cardName, memoryGame.pickedCards[1].dataset.cardName)) {
        if (memoryGame.isFinished()) {
          alert("Congratulations")
        }
      } else {
        setTimeout(function () { 
          for (var i = 0; i < 2; i++) {
           console.log(memoryGame.pickedCards);
            turnAround(memoryGame.pickedCards[i]);
           }
           }, 2000);
        memoryGame.pickedCards.splice(0, 2);
        updateCounters()
      };
    }
  });
});


