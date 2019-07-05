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
var memoryGame = new MemoryGame(cards);

document.addEventListener("DOMContentLoaded", function(event) { 

  memoryGame.shuffleCards();

  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  document.querySelector('#memory_board').innerHTML = html;
  // Bind the click event of each element to a function
  document.querySelectorAll('.back').forEach(function(card) {
    // var goodGuess = false;
    card.onclick = function() {

      // revealing the image of the clicked card
      $(this).toggleClass("back front");
      $(this).siblings().toggleClass("back front");

      // retrieving the proper card from the image we clicked on (img + bg)
      var cardClicked = $(this).parent();

      // storing the card type we just clicked on
      var nameCardClicked = $(cardClicked).attr("data-card-name");
      memoryGame.log.push(nameCardClicked);

      // marking the card we want to check
      cardClicked.addClass("to-check");

      // counting the number of clicks we did...
      memoryGame.clicks +=1;
      // so that every 2 clicks we check if it's a pair or not
      if (memoryGame.clicks % 2 === 0) {
        let isPair = memoryGame.checkIfPair();
        // if it is not a pair, we hide the cards after 1 sec
        if (isPair === false) { 
          setTimeout(function(){
            $(".to-check").children().toggleClass("back front");
            $(".to-check").toggleClass("to-check");
          },500);
        // if it's a pair, we remove the class "to-check" because we only want to display them now
        } else {
          $(".to-check").toggleClass("to-check");
        }
        // we empty our log so that every two clicks we only compare two cards
        setTimeout(function(){
          memoryGame.log = [];
        }, 500);
      }

      $("#pairs_clicked").html(memoryGame.pairsClicked);
      $("#pairs_guessed").html(memoryGame.pairsGuessed);
      memoryGame.isFinished();
    };
  });
});



