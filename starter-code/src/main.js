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
var memoryGame = new MemoryGame(cards);

document.addEventListener("DOMContentLoaded", function(event) { 
  memoryGame.shuffleCards(cards); //Shuffles cards 
  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  document.querySelector('#memory_board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.back').forEach(function(card) {
    card.onclick = function() {

      // console.log(`You've choosen ${memoryGame.pairsClicked} pairs`);
      if(memoryGame.firstGuess == undefined){
        memoryGame.firstGuessBackDiv = $(this);
        memoryGame.firstGuessFrontDiv = $(this).next();
        memoryGame.firstGuess = $(this).parent().attr("data-card-name");
        
      }
      else if(memoryGame.firstGuess !== undefined && memoryGame.secondGuess == undefined){
        $(".back").addClass("blocked");
        memoryGame.secondGuessBackDiv = $(this);
        memoryGame.secondGuessFrontDiv = $(this).next();
        memoryGame.secondGuess = $(this).parent().attr("data-card-name");
        memoryGame.pairsClicked += 1;

        // console.log(memoryGame.pairsClicked);
        $(`#pairs_clicked`).html(memoryGame.pairsClicked);


        memoryGame.checkIfPair(memoryGame.firstGuess,memoryGame.secondGuess);
        memoryGame.isFinished();
      }
      else{
        memoryGame.firstGuess = $(this).parent().attr("data-card-name");
        memoryGame.secondGuess = undefined;
        memoryGame.firstGuessBackDiv = $(this);
        memoryGame.firstGuessFrontDiv = $(this).next();

      }
      // TODO: write some code here
      $(this).toggleClass("back front");
      $(this).next().toggleClass("front back");
    }
  });
});