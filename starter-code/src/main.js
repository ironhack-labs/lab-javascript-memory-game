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

//Shuffling cards
memoryGame.shuffleCards(cards);

$(document).ready(function(){
  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });
  
  // Add all the div's to the HTML
  $('#memory_board').html(html);

  // Bind the click event of each element to a function
  $('.back').click(function () {

    // Changing the classes on click
    $(this).toggleClass('back front'); 
    $(this).siblings().toggleClass('back front');

    // Pushing the two cards into an array, so it is possible to compare
    memoryGame.pickedCards.push($(this));

    // Comparing the cards. If they match, increment the pairs that have been clicked and increment the pairs that has been guessed as well.
    // If they do not match, setTimeout function will be initialized. After one second, the cards will toggle back the classes to their
    // backside. In both cases, the array of the two picked cards is cleared.
    if (memoryGame.pickedCards.length == 2) {
      if(memoryGame.pickedCards[0].parent().data('card') == memoryGame.pickedCards[1].parent().data('card')) {
        memoryGame.pairsGuessed++;
        memoryGame.pairsClicked++;
        $('#pairs_clicked').html(memoryGame.pairsClicked);
        $('#pairs_guessed').html(memoryGame.pairsGuessed);
        memoryGame.pickedCards = [];
      } else {
        setTimeout(function(){
          memoryGame.pickedCards[0].toggleClass('back front');
          memoryGame.pickedCards[0].siblings().toggleClass('back front');
          memoryGame.pickedCards[1].toggleClass('back front');
          memoryGame.pickedCards[1].siblings().toggleClass('back front');
          memoryGame.pairsClicked++;
          $('#pairs_clicked').html(memoryGame.pairsClicked);
          memoryGame.pickedCards = [];
        }, 1000);
      }
    }

    // Victorious method
    memoryGame.isFinished();
  });
});