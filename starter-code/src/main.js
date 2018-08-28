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
  //lets shuffle the cards after
  memoryGame.shuffleCards(cards);
  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="' + pic.name + '">';
    html += '  <div class="back" name="' + pic.img + '"></div>';
    html += '  <div class="front" style="background: url(img/' + pic.img + ') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  $('#memory_board').html(html);

  // Bind the click event of each element to a function
  var tempCardArray = [];

  $('.back').click(function () {
    $(this).toggleClass("back front");
    $(this).siblings().toggleClass("front back");
    memoryGame.pickedCards.push($(this).attr("name"))
    tempCardArray.push($(this));
    if (memoryGame.pickedCards.length === 2) {
      if (memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1])) {
        tempCardArray = [];
      } else {
        setTimeout(function () {
          //turn back - front forEach and reset tempCardArray with a timeout of 1s after the game show cards
          tempCardArray.forEach(function (e) {
            e.toggleClass("front back");
            e.siblings().toggleClass("front back");
            tempCardArray = [];
          })
        }, 1000)
      }
    }
    $("#pairs_clicked").html(memoryGame.pairsClicked);
    $("#pairs_guessed").html(memoryGame.pairsGuessed);
    if (memoryGame.isFinished()) {
      $("#memory_board").html("<h1>YOU WIN!!<h1>");
    }
  });
});