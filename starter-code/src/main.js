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
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
];

var memoryGame = new MemoryGame(cards);
var timeOutId;

document.addEventListener("DOMContentLoaded", function(event) {
  var html = "";
  cards.forEach(function(pic) {
    html += '<div class="card" data-card-name="' + pic.name + '">';
    html += '  <div class="back" name="' + pic.img + '"></div>';
    html +=
      '  <div class="front" style="background: url(img/' +
      pic.img +
      ') no-repeat"></div>';
    html += "</div>";
  });

  // Add all the div's to the HTML
  document.querySelector("#memory_board").innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll(".back").forEach(function(card) {
    card.onclick = function(e) {
      // TODO: write some code here
      const parentNode = e.target.parentNode;
      const front = parentNode.querySelector(".front");
      const back = parentNode.querySelector(".back");

      toggleClasses(front);
      toggleClasses(back);

      memoryGame.pickedCards.push(parentNode);

      if (memoryGame.pickedCards.length == 2) {
        timeOutId = setTimeout(checkMatch, 500);
      }
    };
  });

  function toggleClasses(elem) {
    elem.classList.toggle("front");
    elem.classList.toggle("back");
  }

  function checkMatch() {
    clearTimeout(timeOutId);
    memoryGame.pairsClicked++;

    const isMatched = checkPairMatch();

    if (!isMatched) {
      memoryGame.pickedCards.forEach(revertCards);
    } else {
      memoryGame.pairsGuessed++;
    }
    memoryGame.pickedCards = [];
    setScore();
    if (memoryGame.isFinished()) {
      timeOutId = setTimeout(resetMemoryGame, 1000);
    }
  }

  function checkPairMatch() {
    return memoryGame.checkIfPair(
      memoryGame.pickedCards[0].getAttribute("data-card-name"),
      memoryGame.pickedCards[1].getAttribute("data-card-name")
    );
  }

  function setScore() {
    document.querySelector("#pairs_clicked").innerText =
      memoryGame.pairsClicked;
    document.querySelector("#pairs_guessed").innerText =
      memoryGame.pairsGuessed;
  }

  function resetMemoryGame() {
    clearTimeout(timeOutId);
    alert("Congratulations you WON!! Start new game");
    memoryGame.pairsClicked = 0;
    memoryGame.pairsGuessed = 0;
    resetCards();
    setScore();
  }

  function revertCards(card) {
    const front = card.querySelector(".front");
    const back = card.querySelector(".back");

    toggleClasses(front);
    toggleClasses(back);
  }

  function resetCards() {
    document.querySelectorAll(".card").forEach(function(card) {
      const front = card.querySelector(".front");
      const back = card.querySelector(".back");

      toggleClasses(front);
      toggleClasses(back);
    });
  }
});

