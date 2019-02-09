var cards = [
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" }
];

$(document).ready(function() {
  var memoryGame = new MemoryGame(cards);
  memoryGame.shuffleCards();
  var html = "";
  memoryGame.cards.forEach(function(pic, index) {
    html +=
      '<div class="card" id="card-' +
      // added id to help selection
      (index + 1) +
      '" data-card-name="' +
      pic.name +
      '">';
    html += '  <div class="back" name="' + pic.img + '"></div>';
    html +=
      '  <div class="front" style="background: url(\'./img/' +
      pic.img +
      "') no-repeat\"></div>";
    html += "</div>";
  });

  // Add all the div's to the HTML
  $("#memory_board").html(html);

  // Bind the click event of each element to a function
  $(".back").click(function(e) {
    // flip the picked card
    flipCard($(this));
    // retrieve the parent div to access data attribute
    let divPadre = $(this).parent();

    // id is retrieved from element 0 of jQuery object
    // name is retrieved from method data of jQuery object
    memoryGame.pickedCards.push(
      new Card(divPadre[0].id, divPadre.data("cardName"))
    );
    // if number of cards is multiple of 2, check pair
    if (memoryGame.pickedCards.length % 2 === 0) {
      let guessed = memoryGame.checkIfPair(
        // retrieves the last two cards in array
        memoryGame.pickedCards[memoryGame.pickedCards.length - 2].name,
        memoryGame.pickedCards[memoryGame.pickedCards.length - 1].name
      );
      updateScore();
      // if we werent lucky, flip back picked cards
      if (!guessed) {
        // hide cards after some time
        setTimeout(flipBackCards, 1500);
      } else{
        // take out the guessed pair of cards from array
        memoryGame.pickedCards.pop();
        memoryGame.pickedCards.pop();
      }
    }

    // show winning message!!
    if (memoryGame.isFinished()){
      $(".win").fadeIn(1500);
    }
  });

  // updates game score
  function updateScore() {
    $("#pairs_clicked").text(memoryGame.pairsClicked);
    $("#pairs_guessed").text(memoryGame.pairsGuessed);
  }

  // toggle classes to flip a card
  function flipCard(card) {
    // switch between back and front classes
    $(card).toggleClass("back front");
    // get next div to also switch classes
    let nextDiv = $(card).next();
    nextDiv.toggleClass("front back");
  }

  function flipBackCards() {
    // we'll flib back the first two cards in the array
    //select first card by id
    let firstCard = $("#" + memoryGame.pickedCards[0].cardId);
    //select second card by id
    let secondCard = $("#" + memoryGame.pickedCards[1].cardId);

    // retrieve children of parent div
    let firstCardChildren = firstCard.children();
    // select children and toggle class
    $(firstCardChildren[0]).toggleClass("back front");
    $(firstCardChildren[1]).toggleClass("front back");

    // retrieve children of parent div
    let secondCardChildren = secondCard.children();
    // select children and toggle class
    $(secondCardChildren[0]).toggleClass("back front");
    $(secondCardChildren[1]).toggleClass("front back");

    // removes these first two items in array
    memoryGame.pickedCards.shift();
    memoryGame.pickedCards.shift();
  }
});
