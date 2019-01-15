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

var memoryGame

$(document).ready(function(){
  memoryGame = new MemoryGame(cards);
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
    //open the clicked card and add it to picked cards
    $(this).removeClass('back').addClass('front');
    $(this).siblings().removeClass('front').addClass('back');
    memoryGame.pickedCards.push($(this).parent().attr('data-card-name'));
    
    //if there are two cards, check if they match and increase the counters if necessary
    if(memoryGame.pickedCards.length === 2) {
      var match = memoryGame.checkIfPair();
      $('#pairs_clicked').text(memoryGame.pairsClicked);
      $('#pairs_guessed').text(memoryGame.pairsGuessed);
      // give the player 2sec to see the 2nd card
      setTimeout(function(){
        if(!match) {
          for(var i=0; i<2; i++){
            $("[data-card-name="+"\""+memoryGame.pickedCards[i]+"\""+"]>div:nth-child(1)").addClass('back').removeClass('front');
            $("[data-card-name="+"\""+memoryGame.pickedCards[i]+"\""+"]>div:nth-child(2)").addClass('front').removeClass('back');
          }
        }
      //empty the picked cards array
      memoryGame.pickedCards = [];
      },400)
    }

    //inform the player if the game is finished
    if(memoryGame.isFinished()) {
      alert("Congratulations! You won!")
    }
  });
});


