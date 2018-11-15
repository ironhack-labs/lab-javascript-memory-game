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
//  memoryGame.shuffleCards();
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
  
    memoryGame.pickedCards.push(this.getAttribute('name'));
    
    $(this).addClass('front').removeClass('back');
    $(this).siblings().addClass('back').removeClass('front')
    $(this).parent().addClass('selected');

    if (memoryGame.pickedCards.length === 2){
      if(memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1])){
        $('.card').children().addClass('blocked');
        $('.card.selected').children('.back').fadeTo( "slow", 0 );
        memoryGame.pickedCards = [];
        $('.card.selected').removeClass('selected');
        $('.card').children().removeClass('blocked');
      } else {
         $('.card').children().addClass('blocked');
        var cardsInner = $('.card.selected').children('.front');
        cardsInner.addClass('back').removeClass('front');
        cardsInner.siblings().addClass('front').removeClass('back');
        memoryGame.pickedCards = [];
        $('.card').removeClass('selected');
        $('.card').children().removeClass('blocked');
      }
      
    } if (memoryGame.isFinished() === true){
       alert('final');
    }
    
  });
});


