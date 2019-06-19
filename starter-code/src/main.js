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

$(document).ready(function(){
memoryGame.shuffleCards(cards);
});

document.addEventListener("DOMContentLoaded", function(event) {
////here we need to shuffle
  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
document.querySelector('#memory_board').innerHTML = html;

let pairsClicked =0;
let correctGuess =0;
let correct = $("#pairs_guessed");
let pairs = $("#pairs_clicked");

  $(".back").click(function(e){
    if($(this).hasClass('clicked') || memoryGame.pickCards.length === 2){
    
      return;
    }
   let image = $(this)[0].attributes.name.value;
   $(this).css("background-image", `url(img/${image})`);
   $(this).addClass('clicked');
   memoryGame.pickCards.push(image);

   //console.log(memoryGame.pickCards)

   if(memoryGame.pickCards.length === 2){
    pairs

     if(memoryGame.checkIfPair(memoryGame.pickCards[0], memoryGame.pickCards[1])){
      
      correctGuess+=1;
      pairsClicked +=1;
      pairs.text(pairsClicked);
     
      correct.text(correctGuess);

      $('.clicked').removeClass('clicked');

      if(correctGuess == 12){
       memoryGame.isFinished();
      }


     }else{



$(this).css('style', 'inline');
      setTimeout(function(){
       pairsClicked +=1;
       pairs.text(pairsClicked);
        $('.clicked').css("background-image", 'none');
        $('.clicked').removeClass('clicked');
      },500);


     }

   }

  });
});

