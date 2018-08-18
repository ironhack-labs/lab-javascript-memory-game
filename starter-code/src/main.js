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
  var html = '';
  memoryGame.cards.forEach(function (pic, index) {
    html += '<div class= "card" id="card_' + pic.name + '">';
    html += '<div class="back"';
    html += '    name="'       + pic.img +  '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + '") no-repeat"';
    html += '</div>';
    html += '</div>';
  });

  
  document.getElementById('memory_board').innerHTML = html;
  
$('.back').on('click', function () {
    if (!this.classList.contains('active')) {
      memoryGame.pickedCards.push(this);
      displayClickedCard(this);
      if(memoryGame.pickedCards.length > 1) {
        $('.front,.back').addClass('blocked');
        var firstCard = memoryGame.pickedCards[0].getAttribute("name");
        var secondCard = memoryGame.pickedCards[1].getAttribute("name");
        if(memoryGame.checkIfPair(firstCard, secondCard)) {
          prepareNextTurn();
        } else {
          turnBackCards();
        }
      }
      printGameInfo();
      if (memoryGame.finished()) { alert('You wooon!!!'); }
    }
});

function turnBackCards() {
  setTimeout(function () {
    memoryGame.pickedCards[0].style.background = '#456783';
    memoryGame.pickedCards[1].style.background = '#456783';
    memoryGame.pickedCards[0].classList.remove('active');
    memoryGame.pickedCards[1].classList.remove('active');
    prepareNextTurn();
  }, 1000);
};

function prepareNextTurn() {
  memoryGame.pickedCards = [];
  $('.front,.back').removeClass('blocked');
};

function printGameInfo() {
  document.getElementById('pairs_clicked').innerHTML = memoryGame.pairsClicked;
  document.getElementById('pairs_guessed').innerHTML = memoryGame.pairsGuessed;
};

function displayClickedCard(card) {
  card.className += ' active';
  card.style.background = 'url(img/' + card.getAttribute('name') + ') no-repeat';
}
