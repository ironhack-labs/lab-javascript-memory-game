var guessCardOpen = "";
var guessCardOpenTwo ="";
var pairsGuessed = 0;
var pairsClicked = 0;


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

// $(document).ready(function(){
  var memoryGame = new MemoryGame(cards);
  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  $('#memory_board').html(html);


  const toggleGuessCards = (card1, card2) => {
    card1.toggleClass('back front');
    card1.siblings().toggleClass('front back');
    if (card2) {
      card2.toggleClass('back front'); 
      card2.siblings().toggleClass('front back');      
      guessCardOpen = "" ;
      guessCardOpenTwo = "";      
  }}  

  const clearGuessCards = () =>{
    
  }

  // Bind the click event of each element to a function
  $('.back').click(function () {        
    if (!guessCardOpenTwo) {      
      toggleGuessCards($(this));
      if ( guessCardOpen ) {        
        guessCardOpenTwo = $(this);
        if ( guessCardOpenTwo.parent().data('card-name') === guessCardOpen.parent().data('card-name'))   {          
          pairsGuessed ++;
          pairsClicked ++;
          guessCardOpen = "" ;
          guessCardOpenTwo = "";          
        } else {
          pairsClicked ++;
          setTimeout( () => toggleGuessCards( guessCardOpenTwo, guessCardOpen), 1000);       
        }
      } else {        
        guessCardOpen = $(this) ;        
      }
    }
  })
