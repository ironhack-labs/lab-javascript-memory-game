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
  memoryGame.shuffleCards();
  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  $('#memory_board').html(html);

  
  $('.back').click(function () {

    $(this).toggle();

    $(this).siblings().toggle();

    memoryGame.pickedCards.push($(this));
    // var clicked = false;
    // $('.back').l
    // console.log("this is picked cards ============ ", memoryGame.pickedCards);
    

if(memoryGame.pickedCards.length === 2) {
  $('.back:visible').addClass('blocked')
  let gameStatus = memoryGame.checkIfPair(memoryGame.pickedCards[0].attr('name'), memoryGame.pickedCards[1].attr('name'));
  if(gameStatus) {
    console.log("pairs matched --  True!!");
    
    memoryGame.pickedCards[0].addClass('blocked')
    memoryGame.pickedCards[1].addClass('blocked')
    memoryGame.pickedCards = [];
    $('.back').removeClass('blocked')
  } else {
    
    
    setTimeout(()=>{
      console.log("pairs did not match -- False!!!");
      memoryGame.pickedCards[0].siblings('.front').toggle()
      memoryGame.pickedCards[0].toggle();
      memoryGame.pickedCards[1].siblings('.front').toggle()
      memoryGame.pickedCards[1].toggle()
      memoryGame.pickedCards = [];
      // $(this).toggle()
      // $(this).siblings().toggle();
      $('.back').removeClass('blocked')
      
    },1000);
  } 




  }

// memoryGame.pairsClicked
  // var displayPrice = memoryGame.pairsClicked
  var totalPrice = $('#pairs_clicked')
  totalPrice.html(memoryGame.pairsClicked)
  console.log('getting somewhere');



var secondTotalPrice = $('#pairs_guessed')
secondTotalPrice.html(memoryGame.pairsGuessed)
console.log('it works for sure');

  }); 



}); 

   

  
  



//  var visibleCards = $('front:visible');
//  if(visibleCards.length === 2) {
//    let gameStatus = memoryGame.checkIfParis()
//  } if(gameStatus) {
//    visibleCards.addClass('blocked')
//  } else {


//  }




var frontOfCards = $('.front')
var allCards = $('.cards')

  







