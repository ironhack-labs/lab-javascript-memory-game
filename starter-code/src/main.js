var cards = [{
    name: 'aquaman',
    img: 'aquaman.jpg'
  },
  {
    name: 'batman',
    img: 'batman.jpg'
  },
  {
    name: 'captain america',
    img: 'captain-america.jpg'
  },
  {
    name: 'fantastic four',
    img: 'fantastic-four.jpg'
  },
  {
    name: 'flash',
    img: 'flash.jpg'
  },
  {
    name: 'green arrow',
    img: 'green-arrow.jpg'
  },
  {
    name: 'green lantern',
    img: 'green-lantern.jpg'
  },
  {
    name: 'ironman',
    img: 'ironman.jpg'
  },
  {
    name: 'spiderman',
    img: 'spiderman.jpg'
  },
  {
    name: 'superman',
    img: 'superman.jpg'
  },
  {
    name: 'the avengers',
    img: 'the-avengers.jpg'
  },
  {
    name: 'thor',
    img: 'thor.jpg'
  },
  {
    name: 'aquaman',
    img: 'aquaman.jpg'
  },
  {
    name: 'batman',
    img: 'batman.jpg'
  },
  {
    name: 'captain america',
    img: 'captain-america.jpg'
  },
  {
    name: 'fantastic four',
    img: 'fantastic-four.jpg'
  },
  {
    name: 'flash',
    img: 'flash.jpg'
  },
  {
    name: 'green arrow',
    img: 'green-arrow.jpg'
  },
  {
    name: 'green lantern',
    img: 'green-lantern.jpg'
  },
  {
    name: 'ironman',
    img: 'ironman.jpg'
  },
  {
    name: 'spiderman',
    img: 'spiderman.jpg'
  },
  {
    name: 'superman',
    img: 'superman.jpg'
  },
  {
    name: 'the avengers',
    img: 'the-avengers.jpg'
  },
  {
    name: 'thor',
    img: 'thor.jpg'
  }
];

var picked = [];
var clicked = [];


$(document).ready(function () {
  var memoryGame = new MemoryGame(cards, [], 0, 0);

  memoryGame.cards = memoryGame.shuffleCards(memoryGame.cards);

  console.log(memoryGame);
  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="' + pic.name + '">';
    html += '  <div class="back" name="' + pic.img + '"></div>';
    html += '  <div class="front" style="background: url(img/' + pic.img + ') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  $('#memory_board').html(html);

  // Bind the click event of each element to a function
  $('.back').click(function () {
    console.log(clicked);

    $(this).hide();
    $(this).next().toggleClass("back");
    $(this).toggleClass("blocked");
    clicked.push($(this));
    console.log(clicked);
    picked.push($(this).attr("name"));
    console.log(picked);
    var checkedPicked = checkPickedLength(picked);

    if (checkedPicked == true) {

      $(".back").toggleClass("blocked");
      var checkedEqual = memoryGame.checkIfPair(picked[0], picked[1]);
      console.log(checkedEqual);
      console.log(memoryGame.pairsClicked);
      console.log(memoryGame.pairsGuessed);
      $("#pairs_clicked").text(memoryGame.pairsClicked);
      $("#pairs_guessed").text(memoryGame.pairsGuessed);
      if (checkedEqual == false) {
        setTimeout(function () {
          $(clicked[0].next()).toggleClass("back");
          $(clicked[0]).show();
          $(clicked[1].next()).toggleClass("back");
          $(clicked[1]).show();
          clicked = [];
          picked = [];
          console.log(clicked);
          $(".back").removeClass("blocked");
        }, 1000);

      } else {
        clicked = [];
        picked = [];

        $(".back").removeClass("blocked");
        if (memoryGame.isFinished()) {
          $( "#score" ).after( "<div id='winning-message'>You did it. Congrats!!!</div>" );
        }
      }

    }
  });
});

function checkPickedLength(arrayToCheck) {
  if (arrayToCheck.length == 2) {
    return true;
  }

  return false;
}