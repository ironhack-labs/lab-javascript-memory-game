// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function(){

  memoryGame = new MemoryGame();
  paintBoard();

  //////// MY CODE ///////////

// This way we can add the event dynamically to new elements
// created by restart game or replay
  $('#memory_board').on('click','.back', function(){
    flipCard($(this));
    if(memoryGame.selectedCards.length > 0){
      memoryGame.selectCard($(this));
      blockCards();

      checkMatch(memoryGame.selectedCards[0],
        memoryGame.selectedCards[1]);

    } else {
      memoryGame.selectCard($(this));
      $(this).addClass("blocked");
      $(this).next().addClass("blocked");
    }
  });

  $('#btnRestart').on('click', function(){
    restartGame();
  })


function blockCards(){
  $('.card .back').addClass("blocked");
  $('.card .front').addClass("blocked");
}

function unblockCards(){
  $('.card .back').removeClass("blocked");
  $('.card .front').removeClass("blocked");
}

function definitiveBlock(card){
  card.next().addClass("correct");
}


function updateScore(){
  var pairsClicked = $('#pairs_clicked');
  var pairsGuessed = $('#pairs_guessed');

  pairsClicked.text(memoryGame.pairsClicked);
  pairsGuessed.text(memoryGame.correctPairs);

}

function flipCard(card){
  card.toggleClass('back');
  card.next().toggleClass('back');
  card.next().toggleClass('front');
}

// Check if the images selected are the same
function checkMatch(cardOne, cardTwo){
  // IF SAME IMAGES
  if(cardOne.attr('name') == cardTwo.attr('name')){
    memoryGame.correctPairs += 1;
    memoryGame.pairsClicked += 1;
    memoryGame.selectedCards = [];

    // Permanent block for cards in case they are correct
    definitiveBlock(cardOne);
    definitiveBlock(cardTwo);

    unblockCards();
    updateScore();

    //Check if game was beated
    winner();

  } else {
    // IF WRONG turn over cards after 1 second, update object, score
    // and unlock card to keep playing
    console.log(memoryGame.selectedCards[0]);
    console.log(memoryGame.selectedCards[1]);
    setTimeout(function () {
      flipCard(memoryGame.selectedCards[0]);
      flipCard(memoryGame.selectedCards[1]);
      memoryGame.pairsClicked += 1;
      memoryGame.selectedCards = [];
      unblockCards();
      updateScore();
    }, 1000);

  }
}

function restartGame (){
  memoryGame.restart();
  updateScore();
  paintBoard();
}

function winner(){
  console.log("WINNER?");
  console.log(memoryGame.finished());
  if(memoryGame.finished()){
    if (confirm("CONGRATULATIONS! Do you want to play again?")){
      restartGame();
    }
  }
}

function paintBoard () {
  var html = '';
  memoryGame.shuffleCards(memoryGame.cards);
  memoryGame.cards.forEach(function(pic, index) {
    var sanitizedName = pic.name.split(' ').join('_');

    html += '<div class= "card" name="card_' + sanitizedName + '">';
    html += '<div class="back"';
    html += '    name="' + pic.name + '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + '") no-repeat"';
    html += '    name="'       + pic.name +  '">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the divs to the HTML
  document.getElementById('memory_board').innerHTML = html;
}


});
