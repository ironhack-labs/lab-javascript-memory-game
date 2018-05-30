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
  // shuffle the cards in the new game, befor board is displayed:
  memoryGame.cards = memoryGame.shuffleCard(cards);
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

  var currentCardsThis = [];

 // --- actions, when a card is clicked ---
  $('.card').on('click', function () {
   // turn card when clicked:
      $(this).children("div").toggleClass('back');
      //$(.selector:first-child):
      //$("this:first-child").toggleClass('back');
    // what's on the clicked card
      var cardId = $(this).prop('id');
   // track clicked cards
   // if it's not a pair yet, add a card 
   // to be truned back after pair was found:    
    if(memoryGame.pickedCards.length < 2){
      memoryGame.pickedCards.push(cardId); 
      currentCardsThis.push($(this));  
    }

   // in case we now have a pair:
      if(memoryGame.pickedCards.length == 2){
        eval(memoryGame, currentCardsThis);
     // reset curretly selected cards:  
        memoryGame.pickedCards = [];
        currentCardsThis = [];
      }
  });

  // if after card selection we have two cards:
  eval = function(memoryGame, relevantThis){  
    if(!memoryGame.checkIfPair(memoryGame.pickedCards[0],memoryGame.pickedCards[1])){
       //if true: leave open -> do nothing
       //if false: flip back -> toggle again after short time
       setTimeout( function() {
       relevantThis[0].children("div").toggleClass('back');
       relevantThis[1].children("div").toggleClass('back');        
        }, 1000)
    } 
    // update displayed score:
    document.getElementById('pairs_clicked').innerHTML = '<span id=pairs_clicked>' + memoryGame.pairsClicked + '</span>';  
    document.getElementById('pairs_guessed').innerHTML = '<span id=pairs_guessed>' + memoryGame.pairsGuessed + '</span>';  
  
    // check, if game is over:
    if(memoryGame.finished()){
      setTimeout( function() {
        var text = '<h1 id="win">The Game is over. You won!</h1>';
        $('#appendWinHere').append(text);
      }, 200)
    }
  }
    

});  // end of document ready


