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

$(document).ready(function () {
  var memoryGame = new MemoryGame(cards);
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
  
  var pickedCards = [];
  var classPickedCards = [];

  // Add all the div's to the HTML
  document.getElementById('memory_board').innerHTML = html;

  // Bind the click event of each element to a function
  function displayClickedCard(card) {
    card.className += ' active';
    card.style.background = 'url(img/' + card.getAttribute('name') + ') no-repeat';
    var nameCard = card.getAttribute('name');
    return nameCard.replace('.jpg', '');
  }

  function hideClickedCard(card) {
    card.className -= ' active';
    card.style.background = '#456783';
  }
  
  $('.back').on('click', function () {
    if (pickedCards.length <= 1) {
      var cardName = displayClickedCard(this);
      classPickedCards.push(this);
      for (var i = 0; i < cards.length; i++) {
        if (cards[i].name === cardName) {
          pickedCards.push(cards[i]);
          break;
        }
      }
    }
    if (pickedCards.length > 1) {
      var checkCards = memoryGame.checkIfPair(pickedCards[0], pickedCards[1]);
      if (!checkCards) {
        hideClickedCard(classPickedCards[0]);
        hideClickedCard(classPickedCards[1]);
      }
      pickedCards = [];
      classPickedCards = [];
    }
    console.log(pickedCards);
  });
  


});


