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

      console.log(`You've choosen ${memoryGame.pairsClicked} pairs`);
      if(memoryGame.firstGuess == undefined){
        memoryGame.firstGuess = $(this).parent().attr("data-card-name");//parent
        console.log(`Your first guess is ${memoryGame.firstGuess}`);
      }
      else if(memoryGame.firstGuess !== undefined && memoryGame.secondGuess == undefined){
        memoryGame.secondGuess = $(this).parent().attr("data-card-name");
        memoryGame.pairsClicked += 1;
        console.log(`Your second guess is ${memoryGame.secondGuess}`);
        memoryGame.checkIfPair(memoryGame.firstGuess,memoryGame.secondGuess);
      }
      else{
        memoryGame.firstGuess = $(this).parent().attr("data-card-name");//parent
        memoryGame.secondGuess = undefined;
        console.log(`Your first guess is ${memoryGame.firstGuess}`);
      }
    

      // TODO: write some code here
      $(this).toggleClass("back front");//.toggleClass("front");
      $(this).next().toggleClass("front back");
      console.log('Card clicked');

    }
  });
});


