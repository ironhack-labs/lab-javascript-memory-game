var cards = [
  { id:'one',name: 'aquaman',         img: 'aquaman.jpg' },
  { id:'one',name: 'batman',          img: 'batman.jpg' },
  { id:'one',name: 'captain america', img: 'captain-america.jpg' },
  { id:'one',name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { id:'one',name: 'flash',           img: 'flash.jpg' },
  { id:'one',name: 'green arrow',     img: 'green-arrow.jpg' },
  { id:'one',name: 'green lantern',   img: 'green-lantern.jpg' },
  { id:'one',name: 'ironman',         img: 'ironman.jpg' },
  { id:'one',name: 'spiderman',       img: 'spiderman.jpg' },
  { id:'one',name: 'superman',        img: 'superman.jpg' },
  { id:'one',name: 'the avengers',    img: 'the-avengers.jpg' },
  { id:'one',name: 'thor',            img: 'thor.jpg' },
  { id:'two',name: 'aquaman',         img: 'aquaman.jpg' },
  { id:'two',name: 'batman',          img: 'batman.jpg' },
  { id:'two',name: 'captain america', img: 'captain-america.jpg' },
  { id:'two',name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { id:'two',name: 'flash',           img: 'flash.jpg' },
  { id:'two',name: 'green arrow',     img: 'green-arrow.jpg' },
  { id:'two',name: 'green lantern',   img: 'green-lantern.jpg' },
  { id:'two',name: 'ironman',         img: 'ironman.jpg' },
  { id:'two',name: 'spiderman',       img: 'spiderman.jpg' },
  { id:'two',name: 'superman',        img: 'superman.jpg' },
  { id:'two',name: 'the avengers',    img: 'the-avengers.jpg' },
  { id:'two',name: 'thor',            img: 'thor.jpg' }
];

$(document).ready(function(){
  var memoryGame = new MemoryGame(cards);
  var html = '';
  var pairsClicked = $('#pairs_clicked');
  var pairsGuessed = $('#pairs_guessed');
  // console.log(pairsClicked.html());
  // pairsClicked.html(memoryGame.pairsClicked);
  // console.log(pairsClicked.html());


  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  $('#memory_board').html(html);

  // Bind the click event of each element to a function

  $('.card').click(function () {
    var isPair;
    $(this).children().toggle();

    if (memoryGame.pickedCards.length === 2) {
      isPair = memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1]);
      memoryGame.pickedCards = [];
      if (isPair) {
        $('.open').removeClass('open');
      } else {
        $('.open').toggle();
        $('.open').removeClass('open');
      }
    }
    $(this).children().addClass('open');
    memoryGame.pickedCards.push($(this).attr('data-card-name'));
    pairsClicked.html(memoryGame.pairsClicked);
    pairsGuessed.html(memoryGame.pairsGuessed);

  });
});


