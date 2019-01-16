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

var memoryGame;

$(document).ready(function(){
  memoryGame = new MemoryGame(cards);
  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  $('#memory_board').html(html);

  // Bind the click event of each element to a function

  $('.back').click(function () {
    if (memoryGame.pickedCards.length < 2) {
      // Flip the card by changing 'front'->'back' and 'back'->'front'
      $(this).parent().children().toggleClass('front back')
      // Save the DOM card element in memoryGame.pickedCards
      memoryGame.pickedCards.push($(this).parent())

      if (memoryGame.pickedCards.length === 2) {
        // Take the attribute "data-card-name" from the DOM elements we saved
        var firstCard = memoryGame.pickedCards[0].data('card-name')
        var secondCard = memoryGame.pickedCards[1].data('card-name')
        if (memoryGame.checkIfPair(firstCard,secondCard)){
          // Reinitialize memoryGame.pickedCards so that the user can pick cards again
          memoryGame.pickedCards = []
          if (memoryGame.isFinished()){
            // Remove the cards from the '#memory_board' to display: you win!
            $('#memory_board').html("You win!");
          }
        }
        else {
          // Flip the 2 picked cards after 1 second
          setTimeout(function(){
            // Flip the card by changing 'front'->'back' and 'back'->'front'
            memoryGame.pickedCards[0].children().toggleClass('front back')
            memoryGame.pickedCards[1].children().toggleClass('front back')
            memoryGame.pickedCards = []
          }, 1000)
        }
      }
    }
    // Update Pairs Clicked and Pairs Guessed
    $('#pairs_clicked').text(memoryGame.pairsClicked)
    $('#pairs_guessed').text(memoryGame.pairsGuessed)
  });
});


