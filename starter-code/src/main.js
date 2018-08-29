
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
  randomVals();
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

  // Bind the click event of each element to a function
  $('.back').click(function () {
    //var nombre = 
    //alert (nombre);
  });

  
  var selectedCards = []; 
  var turn = true;

  

  $('.back').on('click', function () {
    if(turn){
      $(this).toggleClass('back');
      $(this).next().toggleClass('back');
      selectedCards.push($(this).attr('name'));
    if(selectedCards.length === 2){
      //turn = false;
      if (memoryGame.checkIfPair(selectedCards[0],selectedCards[1])){
        turn = false;
        $('#pairs_guessed').text(memoryGame.pairsGuessed)
        selectedCards = [];
        $('div [class*="front back"]').addClass('front-blocked')
        turn = true;
      } else { 
        selectedCards = []
         setTimeout(function(){
          $('div [class*="front back"]:not(.front-blocked)').prev().toggleClass('back');
          $('div [class*="front back"]:not(.front-blocked)').removeClass('back');
          
        }, 700)
        turn = true;
      }
      $('#pairs_clicked').text(memoryGame.pairsClicked)
    }
    
  }
  if(memoryGame.isFinished()){
    $('h1').html('YOU WON!')
  }
});

});

function randomVals(){
  var i = cards.length;
    if (i > 0) {
        var j;
        var tmp;
        while (--i) {
            j = Math.floor(Math.random() * (i + 1));
            t = cards[j];
            cards[j] = cards[i];
            cards[i] = t;
        }
    }
    return this;
}