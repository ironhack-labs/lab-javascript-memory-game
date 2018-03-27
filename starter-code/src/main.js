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

var currentCardsAttribute = []; // Created this to hold the current "name" of the selected card.

$(document).ready(function () {
  var memoryGame = new MemoryGame(cards);
  var html = '';
  memoryGame.cards.forEach(function (pic, index) {
    html += '<div class= "card" id="card_' + pic.name + '">';
    html += '<div class="back"';
    html += '    name="' + pic.img + '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + ') no-repeat">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  document.getElementById('memory_board').innerHTML = html;
  // Bind the click event of each element to a function

  $('.card').on('click', function (event) {


    event.stopPropagation();

    var thisCard = $(this).children();

    if ($(thisCard[0]).hasClass("back")) {

      $(thisCard[0]).removeClass("back").addClass("front front-active"); //Creating front-active and back-active for comparing in pairs and not turning all cards if you're wrong.
      $(thisCard[1]).removeClass("front").addClass("back back-active");

      currentCardsAttribute.push(event.currentTarget.id); // Pushing both attributes into array for comparing


      if (currentCardsAttribute.length > 0 && currentCardsAttribute.length % 2 === 0) {
        thereAreEquals(currentCardsAttribute);
      }

    } else {

      $(thisCard[0]).removeClass("front front-active").addClass("back");
      $(thisCard[1]).removeClass("back back-active").addClass("front");

    }
  });

});


function thereAreEquals(array) {


  if (array[0] === array[1]) {

    memoryGame.pickedCards.push(array); // Pushing the correct cards into the object created in memory.js

    $('.front-active').removeClass('front-active');  //Removing active classes for not turning the correct cards.
    $('.back-active').removeClass('back-active');

    currentCardsAttribute = [];
  }

  else {
    $('.front-active').removeClass('front front-active').addClass('back');
    $('.back-active').removeClass('back back-active').addClass('front');

    currentCardsAttribute = [];

  }

}