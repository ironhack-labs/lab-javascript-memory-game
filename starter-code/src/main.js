let memoryGame = undefined;

let cards = [
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

let cardPair = [];

$(document).ready(function() {
  setupNewGame();

  // Bind the click event of each element to a function
  $(".back").on("click", function() {
    showCard($(this));
    pickCard($(this));
  });
});

function showCard(cardBack) {
  cardBack.addClass("front");
  cardBack.removeClass("back");
  cardBack.next().addClass("back");
  cardBack.next().removeClass("front");
}

function hideCard(card) {
  card.addClass("back");
  card.removeClass("front");
  card.next().addClass("front");
  card.next().removeClass("back");
}

function pickCard(card) {
  if (cardPair.length === 2) {
    if (!memoryGame.checkIfPair(cardPair[0], cardPair[1])) {
      hideCard(cardPair[0]);
      hideCard(cardPair[1]);
    }
    cardPair = [];
    cardPair.push(card);
  } else if (cardPair.length === 1) {
    cardPair.push(card);
    memoryGame.pairsClicked.push(cardPair);
    updateScore(cardPair);
  } else {
    cardPair.push(card);
  }
}

function updateScore(cardPair) {
  $("#pairs_clicked").text(memoryGame.pairsClicked.length.toString());

  if (memoryGame.checkIfPair(cardPair[0], cardPair[1])) {
    memoryGame.pairsGuessed.push(cardPair);
    $("#pairs_guessed").text(memoryGame.pairsGuessed.length.toString());
  }
  if (memoryGame.finished()) {
    setupNewGame();
  }
}

function setupNewGame() {
  memoryGame = new MemoryGame(cards);
  $("#memory_board").text("");
  var html = "";

  memoryGame.shuffleCards(cards);
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

  document.getElementById("memory_board").innerHTML = html;
  $("#pairs_clicked").text("0");
  $("#pairs_guessed").text("0");
}
