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
  var html = "";
  memoryGame.cards.forEach(function(pic) {
    html += '<div class="card" data-card-name="' + pic.name + '">';
    html += '  <div class="back" name="' + pic.img + '"></div>';
    html +=
      '  <div class="front" style="background: url(img/' +
      pic.img +
      ') no-repeat"></div>';
    html += "</div>";
  });

  // Add all the div's to the HTML
  $("#memory_board").html(html);

  // Bind the click event of each element to a function
  var openCards = [];

  $("#memory_board").on("click", ".card", function(e) {
    var currentCard = $(this);
    // console.log(currentCard);
    //turn card
    currentCard
      .children()
      .last()
      .toggleClass("front")
      .toggleClass("back");
    currentCard
      .children()
      .first()
      .toggleClass("front")
      .toggleClass("back");

    // store cards that are currently open
    openCards.push(currentCard.attr("data-card-name"));
    currentName = currentCard.attr("data-card-name");

    //compare stored cards (same)

    if (openCards.length === 2) {
      memoryGame.checkIfPair(openCards[0], openCards[1]);
      $("#pairs_clicked").html(memoryGame.pairsClicked);
      $("#pairs_guessed").html(memoryGame.pairsGuessed);

      if (openCards[0] === openCards[1]) {
        $("[data-card-name='" + currentName + "']").addClass("blocked");
        $("[data-card-name='" + currentName + "']")
          .children()
          .addClass("blocked");
        openCards = [];
      }

      //compare stored cards (not the same) and turn them back around

      if (openCards[0] !== openCards[1]) {
        setTimeout(function() {
          $(".card div:first-child")
            .not(".blocked")
            .removeClass()
            .addClass("back");
          $(".card div:last-child")
            .not(".blocked")
            .removeClass()
            .addClass("front");
        }, 1500);
        openCards = [];
      }
    }

    //send alert and reset game, if all cards are open

    if (memoryGame.isFinished()) {
      alert(
        "Good job! Your score: " + memoryGame.pairsClicked + ". Another round?"
      );
      memoryGame.pairsClicked = 0;
      $("#pairs_clicked").html(memoryGame.pairsClicked);
      memoryGame.pairsGuessed = 0;
      $("#pairs_guessed").html(memoryGame.pairsGuessed);

      //shuffle cards and create a new memory board

      memoryGame.shuffleCards();
      var newHtml = "";
      memoryGame.cards.forEach(function(pic) {
        newHtml += '<div class="card" data-card-name="' + pic.name + '">';
        newHtml += '  <div class="back" name="' + pic.img + '"></div>';
        newHtml +=
          '  <div class="front" style="background: url(img/' +
          pic.img +
          ') no-repeat"></div>';
        newHtml += "</div>";
      });
      $("#memory_board").html("");
      $("#memory_board").html(newHtml);
    }
  });
});
