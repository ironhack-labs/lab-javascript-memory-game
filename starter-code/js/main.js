const cards = [{
    name: "aquaman",
    img: "aquaman.jpg"
  },
  {
    name: "batman",
    img: "batman.jpg"
  },
  {
    name: "captain america",
    img: "captain-america.jpg"
  },
  {
    name: "fantastic four",
    img: "fantastic-four.jpg"
  },
  {
    name: "flash",
    img: "flash.jpg"
  },
  {
    name: "green arrow",
    img: "green-arrow.jpg"
  },
  {
    name: "green lantern",
    img: "green-lantern.jpg"
  },
  {
    name: "ironman",
    img: "ironman.jpg"
  },
  {
    name: "spiderman",
    img: "spiderman.jpg"
  },
  {
    name: "superman",
    img: "superman.jpg"
  },
  {
    name: "the avengers",
    img: "the-avengers.jpg"
  },
  {
    name: "thor",
    img: "thor.jpg"
  },
  {
    name: "aquaman",
    img: "aquaman.jpg"
  },
  {
    name: "batman",
    img: "batman.jpg"
  },
  {
    name: "captain america",
    img: "captain-america.jpg"
  },
  {
    name: "fantastic four",
    img: "fantastic-four.jpg"
  },
  {
    name: "flash",
    img: "flash.jpg"
  },
  {
    name: "green arrow",
    img: "green-arrow.jpg"
  },
  {
    name: "green lantern",
    img: "green-lantern.jpg"
  },
  {
    name: "ironman",
    img: "ironman.jpg"
  },
  {
    name: "spiderman",
    img: "spiderman.jpg"
  },
  {
    name: "superman",
    img: "superman.jpg"
  },
  {
    name: "the avengers",
    img: "the-avengers.jpg"
  },
  {
    name: "thor",
    img: "thor.jpg"
  }
];

const memoryGame = new MemoryGame(cards);
memoryGame.shuffleCards(cards);

document.addEventListener("DOMContentLoaded", function (event) {
  let html = "";
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector("#memory_board").innerHTML = html;

  // Bind the click event of each element to a function
  let firstCard = null,
    secondCard = null,
    isPair = true;
  document.querySelectorAll(".back").forEach(card => {
    card.onclick = function () {
      // TODO: write some code here
      console.log("Card clicked: ", card);

      if (memoryGame.pickedCards.length === 2) {
        if (!isPair) {
          hideCard(memoryGame.pickedCards[0]);
          hideCard(memoryGame.pickedCards[1]);
        }

        memoryGame.pickedCards.pop();
        memoryGame.pickedCards.pop();
      }

      showCard(card);
      memoryGame.pickedCards.push(card);

      if (memoryGame.pickedCards.length === 2) {
        firstCard = memoryGame.pickedCards[0];
        secondCard = memoryGame.pickedCards[1];
        isPair = memoryGame.checkIfPair(firstCard.getAttribute("name"), secondCard.getAttribute("name"));

        if (isPair && memoryGame.isFinished()) {
          alert(`Congratulations! You won!! You had ${memoryGame.pairsClicked-memoryGame.pairsGuessed} points.`);
          alert("Click to restart.").onclick = restart();
        } else if (isPair) {
          updatePairsGuessed(memoryGame.pairsGuessed);
        }

        updatePairsClicked(memoryGame.pairsClicked);
      }
    };
  });
});

function showCard(card) {
  const front = card.parentElement.querySelector(".front");
  front.removeAttribute("class");
  front.setAttribute("class", "back");
  card.removeAttribute("class");
  card.setAttribute("class", "front");
}

function hideCard(card) {
  const back = card.parentElement.querySelector(".back");
  back.removeAttribute("class");
  back.setAttribute("class", "front");
  card.removeAttribute("class");
  card.setAttribute("class", "back");
}

function restart() {
  document.querySelectorAll(".front").forEach(card => {
    hideCard(card);
  });
  updatePairsClicked(0);
  updatePairsGuessed(0);
  memoryGame.shuffleCards(cards);
}

function updatePairsGuessed(amount) {
  document.getElementById("pairs_guessed").innerText = amount;
}

function updatePairsClicked(amount) {
  document.getElementById("pairs_clicked").innerText = amount;
}