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

var memoryGame; //declared as global variable for access while debugging

$(document).ready(function(){
  memoryGame = new MemoryGame(cards); 
  //memoryGame.shuffleCards()  //could be shuffled here, but better right in beginning: in constructor(memory.js)
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
  $('.back').click(function(){
    if (memoryGame.pickedCards.length < 2) {
      //Flip card Back/Front<->Front/Back
     $(this).parent().children().toggleClass('front back') 
     //Save the DOM card element in memoryGame.pickedCards
      memoryGame.pickedCards.push($(this).parent())

      if (memoryGame.pickedCards.length === 2) {
      //take the attribute from the "data-card-nanme" from the DOM element
        var firstCard = memoryGame.pickedCards[0].data('card-name') 
        var secondCard = memoryGame.pickedCards[1].data('card-name')
        if (memoryGame.checkIfPair(firstCard,secondCard)) {
        //Reinitilize memoryGame.pickedCards, so that the user can pick cards again
        memoryGame.pickedCards = []
        if (memoryGame.isFinished()){
          //remove cards from board to display: "You win!"
          $('#memory_board').html("You win!");
          }
        }
        else {
          //flip 2 picked cards back after 1 sec
          setTimeout(function() {
          memoryGame.pickedCards[0].children().toggleClass('front back')
          memoryGame.pickedCards[1].children().toggleClass('front back')
          memoryGame.pickedCards = []
          }, 1000)
        }
      }
    }
    $("#pairs_clicked").text(memoryGame.pairsClicked)
    $("#pairs_guessed").text(memoryGame.pairsGuessed)
  });

  
});


