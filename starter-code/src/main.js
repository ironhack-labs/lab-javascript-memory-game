var cards = [{
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
  var memoryGame = new MemoryGame(cards);
  memoryGame.cards = memoryGame.shuffleCard(memoryGame.cards);
  var html = '';
  memoryGame.cards.forEach(function (pic, index) {
    html += '<div class= "card" id="card_' + pic.name + '">';
    html += '<div class="back"';
    html += '    name="' + pic.img + '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + ') no-repeat">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  document.getElementById('memory_board').innerHTML = html;
  // Bind the click event of each element to a function
  var numClicks = 0;
  // var cartas = [];
  $('.back').on('click', function (e) {
    numClicks += 1;
    if (numClicks === 1) {
      memoryGame.pickedCards.push($(this).attr('name').split('.')[0]);
      $(this).addClass('visible');
    } else if (numClicks === 2) {
      $('.card').addClass('blocked');
      memoryGame.pickedCards.push($(this).attr('name').split('.')[0]);
      $(this).addClass('visible');
      if (memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1])) {
        console.log('Match');
        $('.visible').parent().addClass('matched');
        numClicks = 0;
        memoryGame.pickedCards = [];
        $('.card').removeClass('blocked');
      } else {
        setTimeout(function () {hideNotMatchedCards()}, 500);
        numClicks = 0;
        memoryGame.pickedCards = [];  
        $('.card').removeClass('blocked');
      }
      

    }

    var pairsClickedContainer = $('#pairs_clicked').text(memoryGame.pairsClicked);
    var pairsGuessedContainer = $('#pairs_guessed').text(memoryGame.pairsGuessed);

    if (memoryGame.pairsGuessed === 12) {
      $('.winning-overlay').fadeIn();
    }

  });

  function showCard(e, that) {
    that.addClass('visible')
  }

  function hideNotMatchedCards() {
    $('.back').removeClass('visible');
  }



});