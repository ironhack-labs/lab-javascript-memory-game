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
  var clickedElements = [];
  var memoryGame = new MemoryGame(cards);
  memoryGame.shuffleCards();
  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += "<div class='card zoomInDown' data-card-name='" + pic.name + "'>";
    html += "<div class='back' name='" + pic.img + "'></div>";
    html += "<div class='front' style='background: url(img/" + pic.img + ");'></div>";
    html += "</div>";
  });

  // Add all the div's to the HTML
  $('#memory_board').html(html);

  // Bind the click event of each element to a function
  $('.card').click(function (e) {
    var selectedCard = e.target.parentElement;
    if(!clickedElements.includes(selectedCard)) {
      clickedElements.push(selectedCard);
      handleClick(selectedCard);
      changeScore();
    }
  });

  function handleClick (card) {
    if (memoryGame.pairsMatched.includes($(card).attr("data-card-name"))) {
      alert("This card is paired.");
      clickedElements.pop();
    } else {
      flipCard(card);
      if(clickedElements.length === 2) {
        if(!memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1])) {
          flipCard(clickedElements[0]);
          flipCard(clickedElements[1]);
        }
        else {
          if(memoryGame.isFinished()) {
            alert("You win");
          }
        }
        clickedElements = [];
      }
    }
  }

  function flipCard (card) {
    if ($(card).children(".back").css("display") === 'block') {
      $(card).children(".back").css("display","none");
      $(card).children(".front").css("display","block");
      var pickedCard = $(card).attr("data-card-name");
      memoryGame.pickedCards.push(pickedCard);
    } else {
      setTimeout(function() {
        $(card).children(".back").css("display","block");
        $(card).children(".front").css("display","none");
      }, 200);
      var pickedCard = $(card).attr("data-card-name");
      memoryGame.pickedCards.pop(pickedCard);
    }
  }

  function changeScore() {
    $('#pairs_clicked').text(memoryGame.pairsClicked);
    $('#pairs_guessed').text(memoryGame.pairsGuessed);
  }


});







