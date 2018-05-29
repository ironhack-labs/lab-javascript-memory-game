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

  memoryGame.shuffleCard(memoryGame.cards);
  
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
  $('.back').on('click', function (e) {
    console.log( $('.card') );
    if (memoryGame.pickedCards.length === 0) {
      
      // FIRST PICK
      // -----------------------
      memoryGame.pickedCards.push( $(this).parent().attr('id') );
      // reveal card switching the .front and .back classes
      $(this).parent().children().toggleClass('back front');
      // mark card as picked
      $(this).parent().addClass('picked');
      
    } else if ( memoryGame.pickedCards.length === 1 ) {
      
      // SECOND PICK
      // ------------------------
      memoryGame.pickedCards.push( $(this).parent().attr('id') );
      // reveal card switching the .front and .back classes
      $(this).parent().children().toggleClass('back front');
      // mark card as picked
      $(this).parent().addClass('picked');
      // Block the board to avoid more clicks
      $('.card').addClass('blocked');

      console.log("Going to check your cards...");

      // CHECKING IF CARDS MACTH
      // ------------------------
      // call checkIfPair() to see if cards match
      var firstCard = memoryGame.pickedCards[0];
      var secondCard = memoryGame.pickedCards[1];
      var match = memoryGame.checkIfPair( firstCard, secondCard );
      // Update pairs clicked on the page
      $('#pairs_clicked').text(memoryGame.pairsClicked);
      if ( match ) {
        // Update pairs clicked on the page
        $('#pairs_guessed').text(memoryGame.pairsGuessed);
        // remove block from every card except tha guessed ones
        console.log("The cards you chose DO match. YEAHH!!!");
        // reset board for a new pick
        memoryGame.pickedCards = [];
        resetCardsAfterMatch()
        if ( memoryGame.finished() ) { gameOver() }
      } else {
        console.log("The cards you chose do NOT match. Try again...");
        //memoryGame.pickedCards = [];
        memoryGame.pickedCards = [];
        // reset board for a new pick
        setTimeout(resetCardsAfterUnmatch, 2000);
      }
    }
    
  });
});

function resetCardsAfterMatch() {
  // remove .picked class to non matching cards
  $('.picked').addClass('guessed').removeClass('picked');
  // remove .blocked
  $('.card').removeClass('blocked');
}

function resetCardsAfterUnmatch() {
  // switch .back and .front class in picked cards
  $('.picked').children().toggleClass('back front');
  // remove .picked class to non matching cards
  $('.picked').removeClass('picked');
  // remove .blocked
  $('.card').removeClass('blocked');
}

function gameOver() {
  var element = '<div style="position: absolute; top: 0; width: 100%; height: 100%; margin: 0; background-color: #fff"><h1 style="text-align: center; margin-top: auto; margin-bottom: auto;">GAME OVER!!!</h1></div>';
  $('body').append(element);
}