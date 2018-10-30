var cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

$(document).ready(function () {
  var memoryGame = new MemoryGame(cards);
  memoryGame.shuffleCards();
  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="' + pic.name + '">';
    html += '  <div class="back" name="' + pic.img + '"></div>';
    html += '  <div class="front" style="background: url(img/' + pic.img + ') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  $('#memory_board').html(html);
  let intervalID = 0;
  // Bind the click event of each element to a function
  $('.back').click(function () {
    // TODO: write some code here
    if (intervalID!==0) return;
    memoryGame.pickedCards.push($(this).attr('name'));
    // console.table(memoryGame.pickedCards);
    $(this).siblings().addClass('back').removeClass('front');
    $(this).removeClass('back').addClass('front');
    let firstCard = memoryGame.pickedCards[0];
    let secondCard = memoryGame.pickedCards[1];
    if (memoryGame.pickedCards.length === 2) {
      
      let isPair = memoryGame.checkIfPair(firstCard, secondCard);
      $('#pairs_clicked').text(memoryGame.pairsClicked);
      $('#pairs_guessed').text(memoryGame.pairsGuessed);

      if (!isPair) {
        intervalID = setTimeout(function () {
          $(`.front[name*='${firstCard}']`).siblings().removeClass('back').addClass('front');
          $(`.front[name*='${firstCard}']`).addClass('back').removeClass('front');
          $(`.front[name*='${secondCard}']`).siblings().removeClass('back').addClass('front');
          $(`.front[name*='${secondCard}']`).addClass('back').removeClass('front');
          intervalID = 0;
        }, 1500);
      }
      // console.log(intervalID);
      memoryGame.pickedCards = [];
    }

    if (memoryGame.isFinished()) {
      setTimeout(function () {
        prompt(`CONGRATULATIONS! You solved the puzzle!`)
      }, 1500);


    }
  });
});


