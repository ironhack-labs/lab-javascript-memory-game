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
  memoryGame.cards.forEach(function(pic, index) {
    html += '<div class= "card" id="card_' + pic.name + '">';
    html += '<div class="back"';
    html += '    name="' + pic.img + '">';
    html += "</div>";
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + ') no-repeat">';
    html += "</div>";
    html += "</div>";
  });

  // Add all the div's to the HTML
  document.getElementById("memory_board").innerHTML = html;
  // Bind the click event of each element to a function
  // $(".back").on("click", function(e) {});

  var turn = 1;
  var card1 = "";
  var card2 = "";

  if (!memoryGame.finished()) {
    $(".back").on("click", { turn: turn }, function(e) {      

      // select a card and change turn
      if (turn == 1) {
        card1 = $(this).attr("name");
        $(this).css("background-image", "url(img/" + card1 + ")");
        turn = 2;
      } else {
        card2 = $(this).attr("name");
        $(this).css("background-image", "url(img/" + card2 + ")");
        turn = 1;
      }

      // check game is two cards are set
      if (card1 != "" && card2 != "") {
        var equals = memoryGame.checkIfPair(card1, card2);

        // if cards are equals, save guessed pair
        // if cards are different, hide image and reset both cards
        if (equals) {
          saveCards(memoryGame, card1);
        } else {
          hideCards(card1, card2);
          card1 = "";
          card2 = "";
        }
      }

      updateScore(memoryGame);
    });
  } else {
    document.getElementById("memory_board").innerHTML = "<h2>Game Over</h2>";
  }

  function updateScore(game) {
    var clicked = $("#pairs_clicked");
    var guessed = $("#pairs_guessed");

    clicked.text(game.pairsClicked);
    guessed.text(game.pairsGuessed);
  }

  function hideCards(card1, card2) {
    var attribute1 = "[name='" + card1 + "']";
    var attribute2 = "[name='" + card2 + "']";

    $(attribute1).css("background-image", "none");
    $(attribute2).css("background-image", "none");
  }

  function saveCards(game, card) {
    game.pickedCards.push(card);
  }


  /* function showCards(game, card) {
    // show guessed cards
    if (card1 != "" && card2 != "") {
      if (memoryGame.pickedCards.includes(card1)) {
        var guessedCards = $("[name='" + card1 + "']");
        console.log(guessedCards);
      }
    }
  } */
});
