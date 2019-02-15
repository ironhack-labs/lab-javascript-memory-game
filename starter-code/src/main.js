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
var clicked = []; //


$(document).ready(function () {
  var memoryGame = new MemoryGame(cards); //start point. create memoryGame object so we can applay memoryGame methods on it. It happens every time 
  //when document is loaded.

  memoryGame.shuffleCards(memoryGame.cards); // mix cards every time the document is loaded

  console.log(memoryGame); // it is for my revision of steps :)
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
    console.log(clicked); // for my revision

    $(this).hide(); // hide div wit back function 
    $(this).next().toggleClass("back"); // but also give .back class to div next to .back. So it has now background image + width and height
    $(this).toggleClass("blocked"); // once it is revealed it can not be turned on back just like that...keep it open until next card is revealed.
    clicked.push($(this)); //put "this" (complete HTML tag) in clicked array.
    console.log(clicked);
    picked.push($(this).attr("name")); // put in picked array only valeu of name attr.
    console.log(picked);
    var checkedPicked = checkPickedLength(picked); // global function which checks if picked array has two elements. In that case compare it.
    //if it is true go tu if statement defined below.

    if (checkedPicked == true) {

      $(".back").toggleClass("blocked"); // add class="blocked"  to all elements without it. 
      var checkedEqual = memoryGame.checkIfPair(picked[0], picked[1]); // moment to check if to strings from picked array are the same.
      //we call method defined in memoryGame prototype.
      console.log(checkedEqual);
      console.log(memoryGame.pairsClicked);
      console.log(memoryGame.pairsGuessed);
      $("#pairs_clicked").text(memoryGame.pairsClicked); //"checkIfPair" method changes memoryGame properties, every time two cards are clicked. 
      //Every time properties are changed we should see it on page.
      $("#pairs_guessed").text(memoryGame.pairsGuessed);//"checkIfPair" method changes memoryGame properties, every time two cards are clicked. 
      //Every time properties are changed we should see it on page.


      if (checkedEqual == false) { //if checkIfEqual returns false flip cards to back after 1 sec.
        setTimeout(function () {
          $(clicked[0].next()).toggleClass("back"); // it will remove .back from .front
          $(clicked[0]).show(); // display: block will be removed from HTML tag which is in clicked array on position 1 (index 0)
          $(clicked[1].next()).toggleClass("back"); // same story with next element in clicked array.
          $(clicked[1]).show();
          clicked = [];// array should be empty before next user's click
          picked = [];  // array should be empty before next user's click
          console.log(clicked);
          $(".back").removeClass("blocked"); // remove class blocked from other cards so user can select new one.
        }, 1000);

      } else { // in the case it is true (two same cards are selected)
        clicked = [];  // clean for next step
        picked = [];  // clean for next step

        $(".back").removeClass("blocked"); // remove .blocked claas from other cards.
        if (memoryGame.isFinished()) { // and check if the game is finished. if yes...insert new div with message below.
          $( "#score" ).after( "<div id='winning-message'>You did it. Congrats!!!</div>" );
        }
      }

    }
  });
});

//check if array "picked" has two elements inside it so we can compare them.

function checkPickedLength(arrayToCheck) {
  if (arrayToCheck.length == 2) {
    return true;
  }

  return false;
}