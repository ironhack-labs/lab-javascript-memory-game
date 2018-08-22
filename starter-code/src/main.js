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
  memoryGame.shuffleCards(memoryGame.cards)
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
    $(this).toggle();
    $(this).siblings().toggle();

    memoryGame.pickedCards.push($(this));

    console.log(memoryGame.pickedCards);
    if(memoryGame.pickedCards.length === 2) {
      $('.back').addClass('blocked');
      if(memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1]) !== true) {
        setTimeout(() => {
        memoryGame.pickedCards[0].toggle();
        memoryGame.pickedCards[0].siblings().toggle();
        memoryGame.pickedCards[1].toggle();
        memoryGame.pickedCards[1].siblings().toggle();
        memoryGame.pickedCards = [];
        $('.back').removeClass('blocked');
        },1000)
      } else {
        memoryGame.pickedCards = [];
        $('.back').removeClass('blocked');
      }
    }
    memoryGame.updateScores();
    setTimeout(() => {
      memoryGame.getResult();
    },2000)
  });
});


