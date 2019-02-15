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

function compareCards (memoryGame,cardA,cardB) {
  memoryGame.pairsClicked ++;
  $("#pairs_clicked").text(memoryGame.pairsClicked);
  if (memoryGame.pickedCards[0] === memoryGame.pickedCards[1]){
    memoryGame.pairsGuessed ++;
    $("#pairs_guessed").text(memoryGame.pairsGuessed);
    if(memoryGame.isFinished() === true) {
      setTimeout (function(){
        $(".card").remove();
        memoryGame.shuffleCards();
        $("#pairs_guessed").text(memoryGame.pairsGuessed);
        $("#pairs_clicked").text(memoryGame.pairsClicked);
      },1000)
    }
  } else {
    setTimeout (function() {
      $(cardA).removeAttr("style");
      $(cardB).removeAttr("style");
    },1000)
  }
  memoryGame.pickedCards.fill("");
}

$(document).ready(function(){
  var memoryGame = new MemoryGame(cards);
  var html = '';

  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  $('#memory_board').html(html);
  var cardA;
  var cardB;
  // Bind the click event of each element to a function
  $('.back').click(function () {
     var image = $(this).siblings().attr("style");
     var whichCard = $(this).attr("name");
     $(this).attr("style",image);
     if (memoryGame.pickedCards[0] === "") {
      cardA = this;
       memoryGame.pickedCards[0] = whichCard;
     } else {
      cardB = this;
      memoryGame.pickedCards[1] = whichCard;
      compareCards(memoryGame,cardA,cardB);
     }
    // TODO: write some code here
  });
});


