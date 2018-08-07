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
    var cardCollection= $('.card');
    console.log('COLLECTION', cardCollection);
    var cardArr = Array.from(cardCollection);
    var shuffledCards = memoryGame.shuffleCard(cardArr);
    console.log('SHUFFLED', shuffledCards);
  });

  // Add all the div's to the HTML
  document.getElementById('memory_board').innerHTML = html;
  // Bind the click event of each element to a function

var counter = 0;
var firstCard = '';

$('.back').on('click', function () {
  counter++;
  if (counter === 1){
    firstCard = $(this);
  }
 $(this).toggleClass("back");
 $(this).toggleClass("front");
 $(this).next().toggleClass("front");
 $(this).next().toggleClass("back");
  if (counter === 2){
    counter = 0;
    var firstCardName = firstCard.attr('name');
    var secondCardName = $(this).attr('name');
    var isPair = memoryGame.checkIfPair(firstCardName, secondCardName);
    $("#pairs_clicked").text(memoryGame.pairsClicked);
    if(memoryGame.finished()){
      $('p:nth-child(3)').html('<p class="game-won-text">YOU WON!</p>')
    }
    if(isPair){
      $("#pairs_guessed").text(memoryGame.pairsGuessed);
    }
    else{
      $(".front").css('pointer-events', 'none');
      $(".back").css('pointer-events', 'none');
      setTimeout(function(){
        $(this).toggleClass("front");
        $(this).toggleClass("back");
        $(this).next().toggleClass("back");
        $(this).next().toggleClass("front");
        firstCard.toggleClass("front");
        firstCard.toggleClass("back");
        firstCard.next().toggleClass("back");
        firstCard.next().toggleClass("front");
        $(".front").css('pointer-events', 'auto');
        $(".back").css('pointer-events', 'auto');
      } .bind(this), 1000);

     
    }
  }

});
});


