var cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

var revealCard = function(card){
  let parentEl = card.parentElement;
  for (var child of parentEl.children) {
    child.className === 'front' ? (child.className = 'back') : (child.className = 'front');
  }
}

var resetCard = function(card) {
  let parentEl = card[0].parentElement;
  setTimeout(function() {
    for (var child of parentEl.children) {
      child.className === 'back' ? (child.className = 'front') : (child.className = 'back');
    }
  },1150);
};

$(document).ready(function() {
  // create game object
  var memoryGame = new MemoryGame(cards);
  // suffle game cards for uniqueness
  memoryGame.shuffleCards(cards);
  // load cards to dom
  var html = '';
  memoryGame.cards.forEach(function(pic) {
    html += '<div class="card" data-card-name="' + pic.name + '">';
    html += '  <div class="back" name="' + pic.img + '"></div>';
    html += '  <div class="front" style="background: url(img/' + pic.img + ') no-repeat"></div>';
    html += '</div>';
  });
  $('#memory_board').html(html);

  // Bind the click event of each element to a function
  $('.back').click(function() {
    // reveal card on click
    revealCard(this)
   
    // add clicked car to array
    memoryGame.pickedCards.push($(this));

    // check if have pairs
    if (memoryGame.pickedCards.length === 2) {
      // save cards to readable variables
      let firstCard = memoryGame.pickedCards[0].attr('name');
      let secondCard = memoryGame.pickedCards[1].attr('name');
      // check if we have a match
      let checkIfMatch = memoryGame.checkIfPair(firstCard, secondCard);
      // handle if a match is found or not
      if (checkIfMatch) {
        // update found ticker
        $('#pairs_guessed').html(memoryGame.pairsGuessed);
        // check to see if game is won
        if(memoryGame.isFinished()){
          console.log('the game is won!!!')
        }
      } else {
        // reset cards if pair is not found
        resetCard(memoryGame.pickedCards[0]);
        resetCard(memoryGame.pickedCards[1]);
        
      }
      // increment pairs clicked
      $('#pairs_clicked').html(memoryGame.pairsClicked);
      // reset array
      memoryGame.pickedCards = [];
    }
  });
});
