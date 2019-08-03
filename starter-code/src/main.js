let _cards = [
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
let cardsShuffled = _.shuffle(_cards);

class MemoryGame {
  constructor(cards) {
    this.cards = cards;
  }
}
let memoryGame = new MemoryGame(cardsShuffled);
let cardsOpen = 0;
let parentOne;
let parentTwo;
let cardOneName;
let cardTwoName;
let pairsClicked;
let pairsGuessed;
let win;

function checkIfPair(card1, card2) {
  if (card1 === card2) {
    setTimeout(function() {
      pairsGuessed = document.getElementById("pairs_guessed");
      pairsGuessed.innerHTML++;
      win = pairsGuessed.innerHTML;
      cardsOpen = 0;
      isFinished(win);
    }, 2000);
  } else {
    setTimeout(function() {
      cardsOpen = 0;
      parentOne.getElementsByTagName("div")[0].className = "back";
      parentOne.getElementsByTagName("div")[1].className = "front";
      parentTwo.getElementsByTagName("div")[0].className = "back";
      parentTwo.getElementsByTagName("div")[1].className = "front";
      pairsClicked = document.getElementById("pairs_clicked");
      pairsClicked.innerHTML++;
    }, 2000);
  }
}
function isFinished(rightGuesses) {
  console.log(rightGuesses);
  if (rightGuesses === 2) {
    console.log("Win");
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  let html = "";
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
    card.onclick = function() {
      if (cardsOpen === 0) {
        parentOne = card.parentElement;
        parentOne.getElementsByTagName("div")[0].className = "front";
        parentOne.getElementsByTagName("div")[1].className = "back";
        cardsOpen++;
        cardOneName = card.getAttribute("name");
      } else if (cardsOpen === 1) {
        parentTwo = card.parentElement;
        parentTwo.getElementsByTagName("div")[0].className = "front";
        parentTwo.getElementsByTagName("div")[1].className = "back";
        cardsOpen++;
        cardTwoName = card.getAttribute("name");
        checkIfPair(cardOneName, cardTwoName);
      }
    };
  });
});
