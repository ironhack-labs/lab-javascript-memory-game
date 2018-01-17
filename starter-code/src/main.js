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

shuffledCards = MemoryGame.prototype.shuffleCard(cards);

$(document).ready(function(){
  var memoryGame = new MemoryGame(shuffledCards);
  var html = '';
  memoryGame.cards.forEach(function (pic, index) {
    html += '<div class= "card" id="card_' + pic.name + '">';
    html += '<div class="back"';
    html += '    name="'       + pic.img +  '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + '") no-repeat"';
    html += '</div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  $('#memory_board').html(html);
  // Bind the click event of each element to a function
  var cardsCounter = 0;
  var card1 = 0;
  var card2 = 0;
  var cardComparison = false;
  var clickedDisplay = $("#pairs_clicked");
  var guessedDisplay = $("#pairs_guessed");

  $('.back').on('click', function () {
    if (cardsCounter === 0) {
      cardsCounter += 1;
      card1 = $(this);
      flipBack(card1);
    } else if (cardsCounter === 1) {
      card2 = $(this);
      flipBack(card2);

      //Would be better to check if the card.attr("name") is already in the array
      memoryGame.pickedCards.push(card1.attr("name"));
      memoryGame.pickedCards.push(card2.attr("name"));
      console.log(memoryGame.pickedCards);
      console.log(memoryGame.pairsClicked+1);
      console.log(memoryGame.pairsGuessed+1);
      cardComparison = memoryGame.checkIfPair(card1,card2);
      if (cardComparison === true) {
      } else {
        setTimeout(
          function()
          {
            flipFront(card1);
            flipFront(card2);
          }, 500);

      }
      cardsCounter=0;
      clickedDisplay.html(memoryGame.pairsClicked);
      guessedDisplay.html(memoryGame.pairsGuessed);
      if (memoryGame.finished() === true){
        $("#memory_board").append('<p class="finalTitle">YOU WIN</p>');
      }
    }
  });
});

//Flip the card to the front
function flipBack(card) {
  card.removeClass("back").addClass("front");
  card.next(".front").attr("class", "back");
}
//Flop the card to the back
function flipFront(card) {
  card.removeClass("front").addClass("back");
  card.next(".back").attr("class", "front");
}
