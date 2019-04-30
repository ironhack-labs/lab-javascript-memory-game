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

var memoryGame = new MemoryGame(cards);
let firstCard = "";
let secondCard = "";
checkIfPair = (firstCard, secondCard) => {
  // UPDATE THE COUNTERS
  if (firstCard === secondCard) {
    memoryGame.pairsGuessed += 1;
    document.getElementById("pairs_guessed").innerText =
      memoryGame.pairsGuessed;
    console.log("add one to paired couple right neeee");
    resetCardsCouples();
  } else {
    resetGame();
  }
};

resetGame = () => {
  // RESET ALL THE CLASSES
  setTimeout(function() {
    document.querySelectorAll(".card").forEach(function(card) {
      card.firstElementChild.setAttribute("class", "back");
      card.lastChild.setAttribute("class", "front");
    });
    // REINITIALIZE THE COUNTERS AND NAMES
    firstCard = "";
    secondCard = "";
    memoryGame.pairsGuessed = 0;
    document.getElementById("pairs_guessed").innerText =
      memoryGame.pairsGuessed;
  }, 500);
};

let randomizedArr = [];
document.addEventListener("DOMContentLoaded", function(event) {
  var html = "";
  function shuffle(array) {
    var m = array.length,
      t,
      i;

    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    randomizedArr = array;
  }
  shuffle(cards);
  cards = randomizedArr;
  memoryGame.cards.forEach(function(pic) {
    html += '<div class="card" data-card-name="' + pic.name + '">';
    html += '  <div class="back" name="' + pic.img + '"></div>';
    html +=
      '  <div class="front" style="background: url(img/' +
      pic.img +
      ') no-repeat"></div>';
    html += "</div>";
  });

  resetCardsCouples = () => {
    firstCard = "";
    secondCard = "";
  };

  // Add all the div's to the HTML
  document.querySelector("#memory_board").innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll(".back").forEach(function(card) {
    card.onclick = function() {
      // ADD A PAIRS CLICKED
      memoryGame.pairsClicked += 1;
      document.getElementById("pairs_clicked").innerText =
        memoryGame.pairsClicked;
      // CHANGE FRONT BACK CLASS
      if (this.classList.contains("back")) {
        this.setAttribute("class", "front");
        this.parentElement.lastChild.setAttribute("class", "back");
      }

      // HOW TO GET A data-card-name
      if (firstCard !== "" && secondCard === "") {
        console.log("trigger");
        secondCard = this.parentElement.getAttribute("data-card-name");
      }
      if (firstCard === "") {
        firstCard = this.parentElement.getAttribute("data-card-name");
      }
      // se hai selezionato anche la seconda carta
      if (secondCard !== "" && firstCard !== "") {
        checkIfPair(firstCard, secondCard);
      }
    };

    console.log("Card clicked");
  });
});
