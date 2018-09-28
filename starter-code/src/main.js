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
  memoryGame.shuffleCards();

  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card remaining" data-card-name="'+ pic.name +'">';
    html += '  <div class="front" name="'+ pic.img +'"></div>';
    html += '  <div class="back" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });


  // Add all the divs to the HTML
  $('#memory_board').html(html);


  // Variables
  var $card = $(".card.remaining");
  var $clickedScore = $('#pairs_clicked');
  var $guessedScore = $('#pairs_guessed');

  // Bind the click event of each element to a function
  $card.flip({
    axis: 'y',
    trigger: 'manual'
  });

  $card.each(function () {
    $(this).click(function () {
      $(this).flip(true);
      saveCard($(this));
      play();
    });
  });

  var saveCard = function (card) {
    if (memoryGame.pickedCards.length < 3) {
      memoryGame.pickedCards.push(card);
    }
  };

  var play = function () {
    if (memoryGame.pickedCards.length === 2){
      $card.addClass('blocked');
      var result = checkCards();
      updateScore();
      gamePerformance(result);
      memoryGame.isFinished();
    }
  }

  var getCardName = function (card) {
    return card.attr('data-card-name');
  }

  var checkCards = function () {
    return memoryGame.checkIfPair(getCardName(memoryGame.pickedCards[0]), getCardName(memoryGame.pickedCards[1]));
  }

  var updateScore = function () {
    $clickedScore.text(memoryGame.pairsClicked);
    $guessedScore.text(memoryGame.pairsGuessed);
  }

  var blockPickedCards = function () {
    memoryGame.pickedCards.forEach(function (e) {
      e.addClass('blocked');
      e.removeClass('remaining');
    });
  }

  var hideCards = function () {
    $('.card.remaining').flip(false);
    $('.card.remaining').removeClass('blocked');
  }

  var gamePerformance = function (result) {
    if (result) {
      blockPickedCards();
      hideCards();
    } else {
      setTimeout(function() {
        hideCards();
      }, 1000);
    }
    memoryGame.pickedCards = [];
  }


});
