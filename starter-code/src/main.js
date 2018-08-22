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

var backOfAllCards = $('.back')
var frontOfAllCards = $('.front')
// function loadClicks() {
// for (let i = 0; i < backOfAllCards.length ; i++) {
//   backOfAllCards.eq(i).click(function(e){
//   $(this).siblings(".front").toggle();
//   $(this).toggle();
//   })
// }
// }

$(document).ready(function(){
  var memoryGame = new MemoryGame(cards);
  // memoryGame.shuffleCards();
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
    // TODO: write some code here
    $(this).siblings(".front").toggle();
    $(this).toggle();
    memoryGame.pickedCards.push($(this))
    if (memoryGame.pickedCards.length==2) {
      $('.back:visible').addClass('blocked')
      let gameStatus =memoryGame.checkIfPair(memoryGame.pickedCards[0].attr('name'),memoryGame.pickedCards[1].attr('name'));
        if(gameStatus) {
          // memoryGame.pickedCards[0].addClass('blocked');
          // memoryGame.pickedCards[1].addClass('blocked');
          memoryGame.pickedCards =[];
          $('.back:visible').removeClass('blocked')
        } else {
            setTimeout(function(){
            memoryGame.pickedCards[0].siblings(".front").toggle();
            memoryGame.pickedCards[0].toggle();
            memoryGame.pickedCards[1].siblings(".front").toggle();
            memoryGame.pickedCards[1].toggle();
            memoryGame.pickedCards =[];
            $('.back:visible').removeClass('blocked')
            }, 2000);
          }
    }
    let displayClicks = $('#pairs_clicked');   
    displayClicks.html(memoryGame.pairsClicked);
    let displayGuesses = $('#pairs_guessed');   
    displayGuesses.html(memoryGame.pairsGuessed);
  });  
});

// runTheGame() {
// while (!this.isFinished()) {
// memoryGame.pickedCards.push($('.front:visible')) = ;
// if (this.pickedCards.length===2) {
//   let gameStatus =this.checkIfPair();
//     if (gameStatus) {
//       this.pickedCards.addClass('blocked')
//     } 
//     }
//   }
// }
// }