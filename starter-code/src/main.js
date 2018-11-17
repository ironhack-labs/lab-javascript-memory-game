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
  memoryGame.shuffleCards();
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  }); 
  $('#memory_board').html(html); 
  let firstCard,secondCard, total=0;

  $('.back').click(function () {
  total++;
  if (total == 1){
    firstCard = $(this);
  }
 $(this).toggleClass("back");
 $(this).toggleClass("front");
 $(this).next().toggleClass("front");
 $(this).next().toggleClass("back");
  if (total == 2){
    total = 0;
    var firstCardName = firstCard.attr('name');
    var secondCardName = $(this).attr('name'); 
    $("#pairs_clicked").text(memoryGame.pairsClicked);
    if(memoryGame.isFinished()){
      $('p:nth-child(3)').html('<p class="game-won-text">you won!</p>')
    }
    if(memoryGame.checkIfPair(firstCardName, secondCardName)){
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
      } .bind(this),1500);
    }
  }
  });
});


