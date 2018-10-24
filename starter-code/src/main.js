const cards = [
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

let counter = 0;

$(document).ready(function () {
  const memoryGame = new MemoryGame(cards);
  memoryGame.shuffleCards();
  let html = '';
  memoryGame.cards.forEach(function (pic) {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `  <div class="back" name="${pic.img}"></div>`;
    html += `  <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += '</div>';
  });

  // Add all the div's to the HTML
  $('#memory_board').html(html);

  // Bind the click event of each element to a function
  const turnCards = (card) => {
    if (card.hasClass('blocked')) {} else if (card.hasClass('back')) {
      card.removeClass('back');
      card.addClass('front');
      card.next().removeClass('front');
      card.next().addClass('back');
    } else {
      card.removeClass('front');
      card.addClass('back');
      card.next().removeClass('back');
      card.next().addClass('front');
    }
  };
  $('.back').click(function () {
    // TODO: write some code here
    let card1;
    let card2;
    counter += 1;
    if (counter === 1) {
      card1 = $(this);
      turnCards(card1);
    } else if (counter === 2) {
      card2 = $(this);
      turnCards(card2);
    } if (memoryGame.checkIfPair(card1, card2)) {
      card1.addClass('blocked');
      card1.next().addClass('blocked');
      card2.addClass('blocked');
      card2.next().addClass('blocked');
    } else {
      turnCards(card1);
      turnCards(card2);
    }
  });
});
