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
  var firstCard = '';
  var secondCard = '';
  var firstCardDiv = '';
  var secondCardDiv = '';

  //Shuffle cards
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
    removeAddClass($(this), 'back', 'front');

    if (firstCard.length == 0) {
      firstCardDiv = $(this);
      firstCard = firstCardDiv.parent().attr('data-card-name');
      return;
    }

    secondCardDiv = $(this);
    secondCard = secondCardDiv.parent().attr('data-card-name');
    
    if(!memoryGame.checkIfPair(firstCard, secondCard)) {
      setTimeout(function () {
        removeAddClass(firstCardDiv, 'front', 'back');
        removeAddClass(secondCardDiv, 'front', 'back');
        cleanElements();
        printResults();
      }, 300);
      return;
    }

    //Reload if finished
    if (memoryGame.isFinished()) {
      location.reload();
    }

    cleanElements();
    printResults();
  });

  function removeAddClass(element, first, second) {
    element.removeClass(first).addClass(second);
    element.next().removeClass(second).addClass(first);
  }
  
  function cleanElements() {
    firstCard = '';
    secondCard = '';
    firstCardDiv = '';
    secondCardDiv = '';
  }

  function printResults() {
    $('#pairs_clicked').text(memoryGame.pairsClicked);
    $('#pairs_guessed').text(memoryGame.pairsGuessed);
  }
});