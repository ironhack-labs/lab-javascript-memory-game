var cardsArray = [{
    name: 'aquaman',
    img: 'aquaman.jpg'
  },
  {
    name: 'batman',
    img: 'batman.jpg'
  },
  {
    name: 'captain america',
    img: 'captain-america.jpg'
  },
  {
    name: 'fantastic four',
    img: 'fantastic-four.jpg'
  },
  {
    name: 'flash',
    img: 'flash.jpg'
  },
  {
    name: 'green arrow',
    img: 'green-arrow.jpg'
  },
  {
    name: 'green lantern',
    img: 'green-lantern.jpg'
  },
  {
    name: 'ironman',
    img: 'ironman.jpg'
  },
  {
    name: 'spiderman',
    img: 'spiderman.jpg'
  },
  {
    name: 'superman',
    img: 'superman.jpg'
  },
  {
    name: 'the avengers',
    img: 'the-avengers.jpg'
  },
  {
    name: 'thor',
    img: 'thor.jpg'
  },
  {
    name: 'aquaman',
    img: 'aquaman.jpg'
  },
  {
    name: 'batman',
    img: 'batman.jpg'
  },
  {
    name: 'captain america',
    img: 'captain-america.jpg'
  },
  {
    name: 'fantastic four',
    img: 'fantastic-four.jpg'
  },
  {
    name: 'flash',
    img: 'flash.jpg'
  },
  {
    name: 'green arrow',
    img: 'green-arrow.jpg'
  },
  {
    name: 'green lantern',
    img: 'green-lantern.jpg'
  },
  {
    name: 'ironman',
    img: 'ironman.jpg'
  },
  {
    name: 'spiderman',
    img: 'spiderman.jpg'
  },
  {
    name: 'superman',
    img: 'superman.jpg'
  },
  {
    name: 'the avengers',
    img: 'the-avengers.jpg'
  },
  {
    name: 'thor',
    img: 'thor.jpg'
  }
];

$(document).ready(function () {
  var memoryGame1 = new MemoryGame(cardsArray);
  var html = '';
  memoryGame1.cards.forEach(function (element) {
    html += '<div class="card" data-card-name="' + element.name + '">';
    html += ' <div class="back" name="' + element.img + '"></div>';
    html += ' <div class="front" style="background: url(img/' + element.img + ') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  $('#memory_board').html(html);


  $('.card').click(function () {
    $(this).children().toggleClass('back front');
    //console.log(this);
    //console.log($(this).data('cardName'))

    var clickedCard = $(this);
    memoryGame1.pickedCards.push(clickedCard);

    if (memoryGame1.pickedCards.length === 2) {
      var firstCard = memoryGame1.pickedCards[0].data('cardName');
      var secondCard = memoryGame1.pickedCards[1].data('cardName');

      memoryGame1.checkIfPair(firstCard, secondCard);
      //checkifwin
      memoryGame1.isFinished();
    }

  });
}); 