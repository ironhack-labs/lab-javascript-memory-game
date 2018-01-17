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
  memoryGame.shuffleCard(memoryGame.cards);
  var html = '';
  memoryGame.cards.forEach(function (pic, index) {
    html += '<div class= "card" id="card_' + pic.name + '">';
    html += '<div class="back"';
    html += '    name="'       + pic.img +  '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + ') no-repeat">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  document.getElementById('memory_board').innerHTML = html;
  // Bind the click event of each element to a function

var countClicker = 0;
var $pairsClicked = $('#pairs_clicked');
var $pairsGuessed = $('#pairs_guessed');

$('.back').on('click', function () {
  $self = $(this);
  $self.addClass('active');
  countClicker++;
  $self.css('display','none');
  $self.next().css('display', 'inline');
  if (countClicker == 1) {
    cardOneName = $self.attr('name');
  } else {
    cardTwoName = $self.attr('name');
  }
  if (countClicker == 2) {
    var pairChecker = memoryGame.checkIfPair(cardOneName, cardTwoName);
    if (pairChecker == true) {
      $activeCards = $('.active');
      $activeCards.removeClass('active');
      var decideToFinish = memoryGame.finished();
      if (decideToFinish) {
        alert('You won!');
        reset();
        
      }
    } 
    else {
      turnWrongPair();
    }
    $pairsClicked.text(memoryGame.pairsClicked);
    $pairsGuessed.text(memoryGame.pairsGuessed);
    countClicker = 0;
  }
});

function turnWrongPair() {
  $activeCards = $('.active');
  setTimeout(function() {
    $activeCards.css('display', 'inline');
    $activeCards.next().css('display', 'none');   
  }, 1500);
}

});

function reset() {
  memoryGame.pairsClicked = 0;
  memoryGame.pairsGuessed = 0;
  memoryGame.shuffleCard(memoryGame.cards);
  document.getElementById('memory_board').innerHTML = html;
}

