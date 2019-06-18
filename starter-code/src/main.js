let cards = [
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
let memoryGame = new MemoryGame(cards);
memoryGame.shuffleCards();

//regular js:
// document.addEventListener("DOMContentLoaded", function (event) {
// jQuery
$(document).ready(function () {

  let html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="' + pic.name + '">';
    html += '  <div class="back" name="' + pic.img + '"></div>';
    html += '  <div class="front" style="background: url(img/' + pic.img + ') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  // document.querySelector('#memory_board').innerHTML = html; -- regular javascript
  // jQuery
  $('#memory_board').html(html);

  // Bind the click event of each element to a function
  // document.querySelectorAll('.back').forEach(function (card) {
  //   card.onclick = function () {
  //     // TODO: write some code here
  //     // console.log('Card clicked')
  //     console.log(event.currentTarget)
  //   }
  // });

  let cardLog = [];

  $('.card').on("click", function () {
    if ($(this).find('.back').is(':visible') && cardLog.length < 2) {
      $(this).find('.back').toggle();
      $(this).find('.front').toggle();
      cardLog.push($(this).data("card-name"));
      console.log(cardLog);
      if (cardLog.length === 2) {
        if (memoryGame.checkIfPair(cardLog[0], cardLog[1])) {
          console.log('match!')
          $(`[data-card-name="${cardLog[0]}"]`).find('.back').remove();
          cardLog = [];
        } else {
          console.log("try again");
          let flipBack = function () {
            $('.back:hidden').next().toggle();
            $('.back:hidden').toggle();
            cardLog = [];
          }
          setTimeout(flipBack, 2000)


        }
        $('#pairs_clicked').text(memoryGame.pairsClicked);
        $('#pairs_guessed').text(memoryGame.pairsGuessed);
        if (memoryGame.isFinished()) {
          alert("You won!!!");
        }

      }
    }
  })
});


