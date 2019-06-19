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

function newGame(){
  var memoryGame = new MemoryGame(cards);
  updateBoard(memoryGame)
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
  
  // Bind the click event of each element to a function
  $('.back').click(function() {
    flipUp($(this)); //flip current card
    if(memoryGame.firstGuess === undefined){      // if it is the first guess set it 
      memoryGame.firstGuess = $(this);            //make this the first guess 
      $(this).next().addClass('selected');        //add a glow show it is currently selected
    }else{
        $(".back").css("pointer-events", "none"); //prevent click 
        memoryGame.clicks += 1;                   //add 1 to number of clicks
        memoryGame.secondGuess = $(this);         // set secon guess
        let isPair = memoryGame.checkIfPair();    //check if it is a pair
        if(isPair){
          $(this).next().addClass('selected');    //add a glow show it is currently selected
          setTimeout(function(){                  //remove glow and give back access to click after 5 seconds
            memoryGame.firstGuess.next().removeClass('selected');
            memoryGame.secondGuess.next().removeClass('selected');
            memoryGame.firstGuess = undefined;
            memoryGame.secondGuess = undefined;
            $(".back").css("pointer-events", "auto");
          } , 500 );
          memoryGame.correctGuesses += 1;         //add 1 to correct guesses
  
        }else{
          memoryGame.firstGuess.parent().addClass('wrong')    //add class to 'shake' to show they are not a pair
          $(this).parent().addClass('wrong');     //adds animation to show that its wrong
          setTimeout(function(){                  
            flipDown(memoryGame.firstGuess, memoryGame.secondGuess);
            memoryGame.firstGuess.next().removeClass('selected');
            memoryGame.firstGuess = undefined;
            memoryGame.secondGuess = undefined;
            $(".back").css("pointer-events", "auto");
          } , 1000 );
        }
        updateBoard(memoryGame);
    }
    if(memoryGame.isFinished()){
      youWon();
      $('#memory_board').html('<button id="restart" onclick="resetGame()">Restart</button>');
    }
    
  });
}
function flipUp(card){ //flips up the given card
  card.toggleClass("back front");
  card.next().toggleClass("front back");
} 
  function flipDown(card1, card2){ //flips down both cards and removes the class wrong
    card1.toggleClass("front back");
    card1.next().toggleClass("back front");
    card1.parent().removeClass('wrong');

    card2.toggleClass("front back");
    card2.next().toggleClass("back front");
    card2.parent().removeClass('wrong');
  }
  function updateBoard(memoryGame){
    $('#pairs_clicked').html(memoryGame.clicks);
    $('#pairs_guessed').html(memoryGame.correctGuesses);
  }
  function youWon(){
    $('.modal').show();
    setTimeout(function(){                  //remove glow and give back access to click after 5 seconds
      $('.modal').hide();
    } , 3000 );
  }
  function resetGame(){
    $('#memory_board').empty();
    newGame();
  }

$(document).ready(function() {
  newGame();
});


