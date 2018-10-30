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
  memoryGame.shuffleCards();
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
    $(this).toggleClass('back').toggleClass('front');
    $(this).siblings().toggleClass('front').toggleClass('back');

    memoryGame.pickedCards.push($(this).parent());

    if (memoryGame.pickedCards.length === 2) {
      var isPair = memoryGame.checkIfPair(memoryGame.pickedCards[0].data('card-name'), memoryGame.pickedCards[1].data('card-name'));
      
      if (!isPair) {
        var firstCard = memoryGame.pickedCards[0];
        var secondCard = memoryGame.pickedCards[1];
        $("body").css("pointer-events", "none");
        setTimeout(() => {
          $(firstCard).children().toggleClass("front").toggleClass("back");
          $(secondCard).children().toggleClass("front").toggleClass("back");
          $("body").css("pointer-events", "auto");
        }, 1000);
      }

      memoryGame.pickedCards = [];
    }

    $('#pairs_clicked').text(memoryGame.pairsClicked);
    $('#pairs_guessed').text(memoryGame.pairsGuessed);

    if (memoryGame.isFinished()) {
      setTimeout(() => {
        alert("Completado");
      }, 500);
    }
  });
});


