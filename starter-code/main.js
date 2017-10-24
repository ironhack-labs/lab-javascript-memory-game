// MemoryGame.prototype.selectCard = function(card)
// };
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
    console.log("YEE");
    flipCard($(this));
    if(memoryGame.selectedCards.length > 0){
      memoryGame.selectedCards.push($(this));

      blockCards();

      checkMatch(memoryGame.selectedCards[0].attr('name'),
        memoryGame.selectedCards[1].attr('name'));

    } else {
      memoryGame.selectedCards.push($(this));
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
function checkMatch(nameOne, nameTwo){
  // IF SAME IMAGES
  if(nameOne == nameTwo){
    memoryGame.correctPairs += 1;
    memoryGame.pairsClicked += 1;
    memoryGame.selectedCards = [];
    unblockCards();
    updateScore();
    winner();
  } else {
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
  if(memoryGame.correctPairs == memoryGame.cards.length / 2){
    alert("CONGRATS WINNER");
  }
}

function paintBoard () {
  var html = '';
  memoryGame.cards = memoryGame._shuffleCards(memoryGame.cards);
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
