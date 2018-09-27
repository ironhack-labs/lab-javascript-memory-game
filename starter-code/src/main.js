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


var memoryGame = new MemoryGame(cards);
memoryGame.shuffleCards();
var pairsToGuess = memoryGame.cards.length/2;
$(document).ready(function(){
  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  $('#memory_board').html(html);
  // Bind the click event of each element to a function
  $('.back').click(function (e) {
    var $cardElement = $(this).parent('.card');
    var cardElement = $cardElement[0];
    showCard(this);
    activateCard(this);
    rememberCard(cardElement);
    if(memoryGame.pickedCards.length === 2) {
      var match = memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1]);
      cleanPickedCards();
      if(match) {
        deactivateCards();
        if(memoryGame.pairsGuessed === pairsToGuess) {
          memoryGame.isFinished();
        }
      } else {
        hideCards();
      }
      console.log(pairsToGuess - memoryGame.pairsGuessed + " left!");
    }
  });
});

function rememberCard(card) {
  var clickedCard = card.dataset.cardName;
  memoryGame.pickedCards.push(clickedCard);
}

function cleanPickedCards() {
  memoryGame.pickedCards = [];
}

function showCard(card) {
  card.classList.add('flipped');
}

function activateCard(card) {
  card.classList.add('playing');
}

function deactivateCards() {
  $('.flipped.playing').removeClass('playing');
}

function hideCards() {
  setTimeout(function() {
    $('.playing').removeClass('flipped playing');
  }, 1000);
}

function updateTryCount() {
  memoryGame.pairsClicked += 1;
}

function updateGuessCount() {
  memoryGame.pairsGuessed += 1;
}
