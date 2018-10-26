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

function initializeGame(){
  var memoryGame = new MemoryGame(cards);
  var html = '';
  memoryGame.shuffleCards();
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  $('#memory_board').html(html);

  // Reset display counters
  $('#pairs_guessed').html(0);
  $('#pairs_clicked').html(0);
  
  // Bind the click event of each element to a function
  $('.back').click(function (event) {
    if (memoryGame.pickedCards.length === 2){
      return
    }
    var card = $(event.target);
    // toggle card 
    toggleCardClasses(card);

    // var cardName = card.parent().data().cardName;
    memoryGame.pickedCards.push(card);
    console.log(memoryGame.pickedCards);

    if (memoryGame.pickedCards.length === 2){  
      setTimeout(function(){
        var cardOneName = memoryGame.pickedCards[0].parent().data().cardName;
        var cardTwoName = memoryGame.pickedCards[1].parent().data().cardName;
        // if the two cards don't match
        if (!memoryGame.checkIfPair(cardOneName, cardTwoName)){
          memoryGame.pickedCards.forEach(function(oneCard){
            toggleCardClasses(oneCard);
            $('#pairs_clicked').html(memoryGame.pairsClicked);
          });
        } else if (memoryGame.pickedCards.length == 2){
          // update pairs guessed display
          console.log('here');
          $('#pairs_guessed').html(memoryGame.pairsGuessed);
          $('#pairs_clicked').html(memoryGame.pairsClicked);
        }
        memoryGame.pickedCards = [];
        if (memoryGame.isFinished()){
          alert("You won!\nIt took you " + memoryGame.pairsClicked + " clicks!");
          initializeGame();
        }
      }, 500);
    }   
  });
}

$(document).ready(function(){
  initializeGame();
});

function toggleCardClasses(card){
  card.toggleClass('front');
  card.toggleClass('back');
  card.next().toggleClass('front');
  card.next().toggleClass('back');
}