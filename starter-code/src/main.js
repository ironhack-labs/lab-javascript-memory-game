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

  // Bind the click event of each element to a function
  $('.back').click(function () {
    $(this).toggleClass("back front");
    $(this).next().toggleClass("front back");
    memoryGame.pickedCards.push($(this).attr("name"));
    if (memoryGame.pickedCards.length == 2){
      console.log('2cards')
      var card1 = memoryGame.pickedCards[1]
      var card0 = memoryGame.pickedCards[0]
      console.log(card0 === card1)
      if (memoryGame.checkIfPair(card0, card1)) {
        if (memoryGame.isFinished()){
          alert("You've finished");
        };
      } else {
        setTimeout(function() {
          toggleCards(card1, card0);
        }, 2000);
      }
      $("#pairs_clicked").text((memoryGame.pairsClicked))
      $("#pairs_guessed").text((memoryGame.pairsGuessed))
    }
  });


  function toggleCards (card1, card0) {
    var arr = $('.card div:first-child')
    cards = [card1, card0];
    for (var i = 0; i < 2; i++){
    arr.each(function(e){ 
      if (($(this).attr('name') === cards[i]) && $(this).hasClass("front")) {
        $(this).toggleClass('front back');
        $(this).next().toggleClass('back front'); 
      }
    });
    }
  }


});


