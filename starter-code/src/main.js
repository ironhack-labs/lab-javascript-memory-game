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
  //memoryGame.shuffleCards();
  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });
  var timeOutId = 1;

  // Add all the div's to the HTML
  $('#memory_board').html(html);

  // Bind the click event of each element to a function
  $('.back').click(function () {
    
    // if (timeOutId) {
    //   clearTimeout(timeOutId);
    // }

    cardFaceUp(this)
    memoryGame.pickedCards.push(this);

    if (memoryGame.pickedCards.length == 2) {
      
      checkPair(memoryGame);

      // if (memoryGame.isFinished()) {
      //   confirm("IT'S OVER!!");
      // }
     
      //memoryGame.pickedCards = [];
    }
  });
});



function cardFaceUp(e) {

  $(e).removeClass("back").addClass("front");
  $(e).siblings().removeClass("front").addClass("back");
}

function cardsFaceDown(game) {

  for (var i = 0; i < game.pickedCards.length; i++) {
    $(game.pickedCards[i]).addClass("back").removeClass("front");
    $(game.pickedCards[i]).siblings().addClass("front").removeClass("back");
  }
}

function printPairsGuessed(game) {
  $("#pairs_guessed").text(game.pairsGuessed);
}

function printPairsClicked(game) {
  $("#pairs_clicked").text(game.pairsClicked);
}

function printGameOver(game) {
  
  var playAgain = confirm("IT'S OVER!!\n\t- Pairs clicked: " 
  + game.pairsClicked 
  + "\n\t- Pairs guessed: "+ game.pairsGuessed
  + "\n\nPLAY AGAIN??");

  if (playAgain) {
    game.resetGame();
    resetScreen(game);
  }
}

function resetScreen(game) {
  

  //clearTimeout(timeOutId);
  $("#pairs_clicked").text("0");
  $("#pairs_guessed").text("0");
 
  var cards = $("#memory_board").children();
  for (var i = 0, l = cards.length; i < l; i++) {
    $(cards[i]).find("div:first").addClass("back").removeClass("front");
    $(cards[i]).find("div:last").addClass("front").removeClass("back");
  }
  var html = "";
  $("#memory_board").empty();
  game.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });
  $('#memory_board').html(html);
  //$(document).ready();
  //location.reload();
}

function checkPair(game) {

    timeOutId = setTimeout(function() {
      
      var card1 = $(game.pickedCards[0]).attr("name");
      var card2 = $(game.pickedCards[1]).attr("name");

      if (game.checkIfPair(card1, card2)) {
        printPairsGuessed(game);
      } else { 
        cardsFaceDown(game);
      }
      printPairsClicked(game);
      if (game.isFinished()) {
       printGameOver(game);
      }
      //$("body").delay(2000);
      game.clearPickedCards();
    }, 500);

}


