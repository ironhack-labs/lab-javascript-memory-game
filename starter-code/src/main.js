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
    // TODO: write some code here
    $(this).parent().children().toggleClass("front");
    $(this).parent().children().toggleClass("back");

    memoryGame.cardCounter++;

    if(memoryGame.cardCounter == 1){
      memoryGame.firstCard = this;
    }else if(memoryGame.cardCounter == 2){
      memoryGame.secondCard = this;

      memoryGame.pairsClicked++;
      $("#pairs_clicked").html(memoryGame.pairsClicked);

      let matched = memoryGame.checkIfPair(memoryGame.firstCard, memoryGame.secondCard);

      if(matched){
        $("#pairs_guessed").html(memoryGame.pairsGuessed);

        memoryGame.cardCounter = 0;
      }else{
        setTimeout(function(){
          $(memoryGame.firstCard).parent().children().toggleClass("back");
          $(memoryGame.firstCard).parent().children().toggleClass("front");
          $(memoryGame.secondCard).parent().children().toggleClass("back");
          $(memoryGame.secondCard).parent().children().toggleClass("front");
        
        },400);
        
        memoryGame.cardCounter = 0;

       
    }
      if(memoryGame.pairsGuessed === 12){
          memoryGame.isFinished();
      }
  }
  });
});


