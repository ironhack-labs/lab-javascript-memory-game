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
function play(str1, str2, obj3, sel1, sel2){
  setTimeout(function (){
  var check = obj3.checkIfPair(str1, str2);
  if(check === true){
    var end = obj3.isFinished();
    if(end === true){
      var htmlEnd = '<div class="end">';
      htmlEnd += '<h1>You won</h1>'
      htmlEnd += '<p>Press F5 to play again</p>'
      htmlEnd += '</div>'
    }
  }
  else if(check === false){
    $(sel1).toggleClass("front");
    $(sel1).toggleClass("back");
    $(sel2).toggleClass("back");
    $(sel2).toggleClass("front");
  }
}, 2000);
}


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


  // Bind the click event of each element to a function
  $('.back').click(function () {
    var card1 = $(this)
    var card2 = $(this).siblings()
    flipCard($(this));
    var a = $(this).parent().closest('div').attr('data-card-name')
    $('.back').click(function () {
      var b = $(this).parent().closest('div').attr('data-card-name')
      play(a, b, memoryGame, card1, card2);
    });
  });
});



