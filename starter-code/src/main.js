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
  var shuffleCards = memoryGame.shuffleCard(memoryGame.cards);
  var html = '';
    shuffleCards.forEach(function (pic, index) {
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

  var pair = [];

  // Bind the click event of each element to a function
  $('.back').on('click', function () {

    if ($(this).hasClass('back')) {
  
      $(this.parentElement.children[0]).removeClass('back');
      $(this.parentElement.children[0]).addClass('front');
      $(this.parentElement.children[1]).removeClass('front');
      $(this.parentElement.children[1]).addClass('back');

      pair.push($(this.parentElement));

      if (pair.length === 2) {
        check(pair, memoryGame);
        pair = [];
      }
    }

    $('#pairs_clicked')[0].innerText = memoryGame.pairsClicked
    $('#pairs_guessed')[0].innerText = memoryGame.pairsGuessed
  
  });

});

function checkPairFalse(pair) {
  var pairsToRemove = pair;
  setTimeout(function () {
    $(pairsToRemove[0][0].children[0]).removeClass('front');
    $(pairsToRemove[0][0].children[0]).addClass('back');
    $(pairsToRemove[0][0].children[1]).removeClass('back');
    $(pairsToRemove[0][0].children[1]).addClass('front');

    $(pairsToRemove[1][0].children[0]).removeClass('front');
    $(pairsToRemove[1][0].children[0]).addClass('back');
    $(pairsToRemove[1][0].children[1]).removeClass('back');
    $(pairsToRemove[1][0].children[1]).addClass('front');

  }, 900)
}

function check(pair, memoryGame) {
    if (memoryGame.checkIfPair(pair[0][0].id, pair[1][0].id)) {
      if (memoryGame.finished()) {
        alert("HAS GANADO!!!");
        setTimeout(function(){
          location.reload();
        },1500);       
        console.log('Ganador');
      } else {
        console.log('sigue el juego');
      }
    } else {
      checkPairFalse(pair);
    }
    
}




