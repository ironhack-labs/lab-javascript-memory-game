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
  
  init(memoryGame);  //Here we do everything necessary to start the game
});

function init(game) {
  
  game.shuffleCards(); //shuffle the cards...

  printCards(game); //print cards on the screen...
  
  // Clear score display
  $("#pairs_clicked").text("0");
  $("#pairs_guessed").text("0");

  // Bind the click event of each element to a function
  $('.back').click(function () {
    clickFn.call(this, game);
  });
}
 
 function printCards(game) {
  
  var html = '';
  game.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });
  // Add all the div's to the HTML
  $('#memory_board').html(html);
}

function clickFn(game) {

  cardFaceUp(this); //Put the card face up
  game.pickedCards.push(this);  //push the card in "pickedCards" array
  if (game.pickedCards.length == 2) { //if there are two cards in pickedCard we will compare them...
    checkPair(game);
  }
}

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

function checkPair(game) {

 $('.back').off("click"); //unbind event click to elements with the .back class.

    setTimeout(function() { //"seTimeout to show the pair of cards face up for a moment
      $('.back[name]').click(function () { //again we bind the click events to elements with the .back class (and that contain the name attribute: to make sure we're just going to add click events in the first "div" of each card)
        clickFn.call(this, game);
      });
      
      var card1 = $(game.pickedCards[0]).attr("name");
      var card2 = $(game.pickedCards[1]).attr("name");

      if (game.checkIfPair(card1, card2)) { //if card1 === card2...
        printPairsGuessed(game); //update pairs guessed on the screen
        if (game.isFinished()) { //if all pairs are guessed...
          printGameOver(game); //
        }
      } else { //if card1 != card 2....
        cardsFaceDown(game); //put the cards face down
      }

      printPairsClicked(game); //update pairs clicked on the screen
      game.clearPickedCards(); //empty "pickedCards" array
    }, 750);
  }

  function printGameOver(game) {
  
    var playAgain = confirm("IT'S OVER!!\n\t- Pairs clicked: " 
    + game.pairsClicked 
    + "\n\t- Pairs guessed: "+ game.pairsGuessed
    + "\n\nPLAY AGAIN??");
  
    if (playAgain) { //if you want to play again...
      game.resetGame(); //reset the properties of the "game" var...
      init(game); //init the game (shuffle cards, print cards, bin click events,...)
    }
  }