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

var gameOver = false;
var guessArray = [];

$(document).ready(function(){
  var memoryGame = new MemoryGame(cards);
  memoryGame.cards = memoryGame.shuffleCard(memoryGame.cards);
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
$('.back').on('click', function () {
  var background = 'url(img/' + $(this).attr("name") + ') no-repeat'
  $(this).css("background", background);
  $(this).toggleClass("clicked");
  guessArray.push($(this).attr("name"));
  if (guessArray.length === 2){
    var firstCard = guessArray[0];
    var secondCard = guessArray[1];
    var ifPair = memoryGame.checkIfPair(firstCard, secondCard);
    console.log(firstCard);
    console.log(secondCard);
    console.log(ifPair);
    if (!ifPair) {
      $("#pairs_clicked").html(memoryGame.pairsClicked);
      $(".clicked").css("background", "#456783");
      $(".clicked").toggleClass("clicked");
    }
    else {
      $("#pairs_clicked").html(memoryGame.pairsClicked);
      $("#pairs_guessed").html(memoryGame.pairsGuessed);
      $(".clicked").toggleClass("clicked");
    }
    memoryGame.finished();
    guessArray = [];
  }
});
});
