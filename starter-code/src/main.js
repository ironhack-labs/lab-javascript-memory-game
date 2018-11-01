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
//   console.log("creating new game now !!!!!!")
//   var memoryGame = new MemoryGame(cards);
//   var html = '';
//   memoryGame.cards.forEach(function (pic) {
//     html += '<div class="card" data-card-name="'+ pic.name +'">';
//     html += '  <div class="back" name="'+ pic.img +'"></div>';
//     html += '  <div class="front" style="background: url(img/' + pic.img + ') no-repeat;"></div>';
//     html += '</div>';
//   });

//   console.log(html)
//   // Add all the div's to the HTML
//   $('#memory_board').html(html);

//   // Bind the click event of each element to a function
//   $('.back').click(function(){
   
//     $(this).hide()
//     $(this).siblings().addClass('back');
//   });
  

// });

let theGame = new MemoryGame(cards);
  

var html = '';

theGame.cards.forEach(function (pic) {
  html += '<div class="card" data-card-name="'+ pic.name +'">';
  html += '  <div class="back" name="'+ pic.img +'"></div>';
  html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
  html += '</div>';
});

// Add all the div's to the HTML
$('#memory_board').html(html);

// Bind the click event of each element to a function
$('.back').click(function () {
  
  $(this).hide();
  // $(this).removeClass('back') either one of these will work

  $(this).siblings().addClass('back')

  theGame.currentHand.push($(this));

  if(theGame.currentHand.length === 2){
    $('.back').addClass('blocked');
    theGame.evaluatePair();
    updateScore();
  }
  
});



function updateScore(){
  $('#pairs_clicked').text(theGame.attempts);
  $('#pairs_guessed').text(theGame.score);
}