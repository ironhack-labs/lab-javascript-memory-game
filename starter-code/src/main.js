var prev = undefined;
var current = undefined;

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
    var cardName = $(this).attr('name');
    memoryGame.pickedCards.push(cardName);
    console.log(memoryGame.pickedCards)
    $(this).hide();
    $(this).next('.front').toggle()
    $(this).addClass('blocked');
    if (memoryGame.pickedCards.length === 2) {
      if (memoryGame.checkIfPair() === true) {
        memoryGame.pairsGuessed++;
        memoryGame.pairsClicked++;
        $('#pairs_clicked').html(memoryGame.pairsClicked);
        $('#pairs_guessed').html(memoryGame.pairsGuessed);
        if(memoryGame.isFinished() === true) {
          alert('You won!')
        }
      }
      else { 
        memoryGame.pairsClicked++;
        $('#pairs_clicked').html(memoryGame.pairsClicked);
        current = $(this);
        setTimeout(function() {
          $('.back:hidden').next('.front').toggle();
          $('.back:hidden').removeClass('blocked');
          $('.back:hidden').toggle();
        }, 1000);  
        prev = undefined;
      }
    }   
  });
})