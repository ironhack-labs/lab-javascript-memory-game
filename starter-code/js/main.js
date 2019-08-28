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

const shuffleArray = (array) => {
  let copy = [],
    arrayLength = array.length,
    i;

  while (arrayLength) {
    randomIndex = Math.floor(Math.random() * array.length);

    if (randomIndex in array) {
      copy.push(array[randomIndex]);
      delete array[randomIndex];
      arrayLength--;
    }
  }

  return copy;
}

// Shuffle the cards
cards = shuffleArray(cards)

let pairsToCompare = [];
let twoCardsFlipped = false;
let pairsClickedDOMEl = document.getElementById("pairs_clicked");
let paisrGuessedDOMEl = document.getElementById("pairs_guessed");

document.addEventListener("DOMContentLoaded", function(event) {
  let html = "";
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.name}"></div>`;
    html += `<div class="front" style="background-image: url(./img/${pic.img})"></div>`;
    html += `</div>`;
  });

  const hideCards = cards => {
    cards.forEach(card => {
      let firstCardChild = card.firstElementChild;

      if (firstCardChild.classList.contains("front")) {
        firstCardChild.className = "back";
        firstCardChild.nextElementSibling.classList = "front";
      }
    });
  };

  // Add all the divs to the HTML
  document.querySelector("#memory_board").innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll(".back").forEach(card => {
    card.onclick = function() {
      if (!twoCardsFlipped) {
        pairsToCompare.push(card.getAttribute('name'));

        card.className = "front";
        card.nextElementSibling.className = "back";

        if (pairsToCompare.length === 2) {
          twoCardsFlipped = !twoCardsFlipped;

          if (memoryGame.checkIfPair(pairsToCompare[0], pairsToCompare[1])) {
            // Wait so the user can see the cards. Then delete the cards
            setTimeout(() => {
              let cardsToDelete = [
                ...document.querySelectorAll(
                  `[data-card-name="${pairsToCompare[0]}"]`
                )
              ];
              // cardsToDelete.forEach(card => card.remove()); // Uncomment this line to delete the equal pairs
              twoCardsFlipped = !twoCardsFlipped;
              pairsToCompare = [];
              paisrGuessedDOMEl.textContent = memoryGame.pairsGuessed;

              if (memoryGame.isFinished()) {
                alert("Has ganado!");
              }
            }, 1000);
          } else {
            // Wait so the user can see the cards. Then hide the cards again
            setTimeout(() => {
              hideCards([
                ...document.querySelectorAll(
                  `[data-card-name="${pairsToCompare[0]}"]`
                )
              ]);
              hideCards([
                ...document.querySelectorAll(
                  `[data-card-name="${pairsToCompare[1]}"]`
                )
              ]);

              twoCardsFlipped = !twoCardsFlipped;
              pairsToCompare = [];
            }, 1000);
          }
        }

        pairsClickedDOMEl.textContent = `${memoryGame.pairsClicked}`;
      }
    };
  });
});

let memoryGame = new MemoryGame(cards);
