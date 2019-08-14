// import { MemoryGame } from "./memory.js";
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

document.addEventListener("DOMContentLoaded", function(event) {
  // shuffle cards on beginning of the game
  memoryGame.shuffleCards();

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
  document.querySelector("#memory_board").innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll(".back").forEach(function(card) {
    card.onclick = function(e) {
      console.log("Card clicked");
      let card = e.target;
      console.log(card);
      // only flip and add a card if there are less than 2 selected
      if (memoryGame.pickedCards.length < 2) {
        flipACard(card);
        cardsSelected(card);
      }
      // compare the cards if two are selected
      if (memoryGame.pickedCards.length == 2) {
        console.log(memoryGame.pickedCards);
        // add the data card name
        let first_card_name =
          memoryGame.pickedCards[0].parentElement.dataset.cardName;
        let second_card_name =
          memoryGame.pickedCards[1].parentElement.dataset.cardName;
        console.log(first_card_name);
        console.log(second_card_name);

        let match = memoryGame.checkIfPair(first_card_name, second_card_name);
        //if there is a match in name the cards stay up else they go back down
        // if there is a match plus one on the guessed amount already factored in when it finds match see memory.js
        if (match) {
          memoryGame.pickedCards = [];
          console.log(memoryGame.pairsGuessed);
          console.log(memoryGame.pairsClicked);
          // update the pairs guessed screen and pairs clicked screen
          updatePairsClicked();
          updatePairsGuessed();
        } else {
          // if the is no match the selected cards should be flipped back
          // and picked cards are returned to empty array
          setTimeout(flipACardBack, 1500);
          // update the pairs clicked screen
          updatePairsClicked();
        }
      }
    };
  });
});

// function to flip a card

function flipACard(card) {
  let front_side = card.nextElementSibling;
  card.hidden = true;
  console.log(card.hidden);
  front_side.classList.add("display");
}

// function to check if we have two cards clicked ----
// only executed if two cards are selected at max

function cardsSelected(card) {
  memoryGame.pickedCards.push(card);
  console.log(memoryGame.pickedCards);
}

// function to flip the card back
function flipACardBack() {
  console.log("----------------");
  memoryGame.pickedCards.forEach(card => {
    console.log(card);
    let front_side = card.nextElementSibling;
    card.hidden = false;
    console.log(card.hidden);
    front_side.classList.remove("display");
  });
  memoryGame.pickedCards = [];
}

// function to update the pairs clicked
function updatePairsClicked() {
  let div_pairs_clicked = document.getElementById("pairs_clicked");
  div_pairs_clicked.innerText = `${memoryGame.pairsClicked}`;
}

function updatePairsGuessed() {
  let div_pairs_guessed = document.getElementById("pairs_guessed");
  div_pairs_guessed.innerText = `${memoryGame.pairsGuessed}`;
}
// check if the game is completed after
//   } else if (memoryGame.isFinished())

// function to clear the board and show the score in big
function clearBoardShowScore() {
  if (memoryGame.pairsGuessed == 12) {
    let memory_board = document.getElementById("memory_board");
    console.log(memory_board);
    memory_board.setAttribute("display", "flex");
    memory_board.setAttribute("alignItems", "center");
    memory_board.setAttribute("justifyContent", "center");
    console.log("here", memory_board);
    memory_board.innerHTML = `<h1>Congratulations you have beat the game with a score of ${
      memoryGame.pairsClicked
    }<h1>`;
    console.log(memory_board);
  }
}

setInterval(clearBoardShowScore, 1000);
