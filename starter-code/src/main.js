var cards = [
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain-america', img: 'captain-america.jpg' },
  { name: 'fantastic-four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green-arrow',     img: 'green-arrow.jpg' },
  { name: 'green-lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the-avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' },
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain-america', img: 'captain-america.jpg' },
  { name: 'fantastic-four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green-arrow',     img: 'green-arrow.jpg' },
  { name: 'green-lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the-avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' }
];

$(document).ready(function(){
  var memoryGame = new MemoryGame(cards);
  memoryGame.shuffleCard(memoryGame.cards);
  var html = '';
  memoryGame.cards.forEach(function (pic, index) {
    html += '<div class= "card " id="card_' + pic.name + '_' + index +'">';
    html += '<div class="back"';
    html += '    name="'       + pic.img +  '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + ') no-repeat">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  document.getElementById('memory_board').innerHTML = html;
  // Bind the click event of each element to a function
  $('.back').on('click', function () {
  var selectedCardId = $(this).parent().attr('id');
  
  memoryGame.pickedCards.push(selectedCardId);
  flipCard($("#" + selectedCardId).children());
  
  if (memoryGame.pickedCards.length === 2){    
    var cardOne = memoryGame.pickedCards[0].split("_");
    var cardTwo = memoryGame.pickedCards[1].split("_");

    var result = memoryGame.checkIfPair(cardOne[1], cardTwo[1]);

    $("#pairs_clicked").html(memoryGame.pairsClicked);
    // memoryGame.pickedCards = [];
    if (result){
      $("#pairs_guessed").html(memoryGame.pairsGuessed);
      memoryGame.pickedCards = [];
      if (memoryGame.finished()){gameOver()};
    } else {
      
      setTimeout(function(){

      //   setTimeout(function() {
          flipCard($("#" + memoryGame.pickedCards[1]).children());
        // },100)

        flipCard($("#" + memoryGame.pickedCards[0]).children());
        memoryGame.pickedCards = [];
        // flipCard($("#" + memoryGame.pickedCards[1]).children());
      }, 500);
      
     
    }
    // memoryGame.pickedCards = [];
    console.log(result)
  }

  })

  function flipCard(cardIdArg){
    $(cardIdArg[0]).toggleClass('back front');
    $(cardIdArg[1]).toggleClass('front back');
  }

  function gameOver(){
    alert("Congratulations! You matched all the cards")
  }

});


