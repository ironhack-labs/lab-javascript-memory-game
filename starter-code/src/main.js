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
  memoryGame.shuffleCard(cards);
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
  $('.back').on('click', function () {

    $(this).siblings().toggleClass("back");
    $(this).toggleClass("back");

    memoryGame.pickedCards.push($(this));

    if (memoryGame.pickedCards.length == 2) {
      var result = memoryGame.checkIfPair(memoryGame.pickedCards[0].attr("name"), memoryGame.pickedCards[1].attr("name"))
      //Update counter fields in html, must bei after checkIfPair
      updateStats();
      // Game is finished, needs timer do display card
      if (memoryGame.finished()) {
        setTimeout(function () {
          alert("You won!")
        }, 100);
      }
      if (result) {
        memoryGame.pickedCards = [];
      } else {
        $(".back").css("pointer-events", "none");
        $(".front").css("pointer-events", "none");
        setTimeout(function () {
          turnCards(memoryGame.pickedCards);
        }, 1000);
      }
    }
  });

  function turnCards(cards) {
    cards[0].toggleClass("back");
    cards[0].siblings().toggleClass("back");
    cards[1].toggleClass("back");
    cards[1].siblings().toggleClass("back");
    // Unlock divs for clicking
    $(".back").css("pointer-events", "auto");
    $(".front").css("pointer-events", "auto");
    // Remove picked cards
    memoryGame.pickedCards = [];
  }

  function updateStats() {
    $("#pairs_clicked").text(memoryGame.pairsClicked);
    $("#pairs_guessed").text(memoryGame.pairsGuessed);
  }
});