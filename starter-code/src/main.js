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
  $("#pairs_clicked").html(obj3.pairsClicked);
  $("#pairs_guessed").html(obj3.pairsGuessed);
  if(check === true){
    var end = obj3.isFinished();
    if(end === true){
      var htmlEnd = '<div class="end">';
      htmlEnd += '<h1>You won</h1>'
      htmlEnd += '<p>Press F5 to play again</p>'
      htmlEnd += '</div>'
      $("body").html(htmlEnd);
    }
  }
  else if(check === false){
    flipCard(sel1);
    flipCard(sel2);
  }
}, 750);
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
    var card1;
    var card2;
    var a;
    var b;
    var counter = 0;
  
  $('.back').click(function () {
    if (counter === 0){
      card1 = $(this)
      flipCard($(this));
      a = $(this).parent().closest('div').attr('data-card-name')
      counter++;
    }
    else if (counter === 1) {
      flipCard($(this));
      card2 = $(this)
      b = $(this).parent().closest('div').attr('data-card-name')
      play(a, b, memoryGame, card1, card2);
      counter--;
    }
  });
});



