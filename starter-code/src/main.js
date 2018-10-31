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
var memory = new MemoryGame(cards);
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
    memoryGame.pickedCards.push($(this).attr('name'));

    $(this).addClass('front').removeClass('back');
    $(this).siblings().addClass('back').removeClass('front');

    console.log("estoy pisando una carta");
    console.log(memoryGame.pickedCards);

    var firstCard = memoryGame.pickedCards[0];
    var secCard = memoryGame.pickedCards[1];

    if (memoryGame.pickedCards.length == 2) {      
      if (!memoryGame.checkIfPair(firstCard, secCard)){
        setTimeout(function(){
        $(`.front[name='${firstCard}']`).siblings().removeClass('back').addClass('front');
        $(`.front[name='${firstCard}']`).addClass('back').removeClass('front');
        $(`.front[name='${secCard}']`).siblings().removeClass('back').addClass('front');
        $(`.front[name='${secCard}']`).addClass('back').removeClass('front');
        },500);     
      }

      $('#pairs_clicked').text(memoryGame.pairsClicked);
      $('#pairs_guessed').text(memoryGame.pairsGuessed);
      memoryGame.pickedCards = [];
    }
    if(memoryGame.isFinished()){
      alert("Juego terminado");
    }
  });
});


