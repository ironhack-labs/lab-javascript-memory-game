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
memoryGame.shuffleCards();

window.addEventListener("load", event => {
  let html = "";
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector("#memory_board").innerHTML = html;
  const grid = document.createElement('section');
  console.log(typeof grid)
  grid.setAttribute('class', 'grid');
  document.querySelector("#memory_board").appendChild(grid);
  
  
  // Bind the click event of each element to a function
  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
      // TODO: write some code here
      turnCard(card);
      var clicked = document.getElementById("pairs_clicked");
      var guessed = document.getElementById("pairs_guessed");

      clicked.innerText = memoryGame.pairsClicked;
      guessed.innerText = memoryGame.pairsGuessed;
      console.log(`Card clicked: ${card}`);
    });
  });
});

function turnCard(card) {
  card.classList.toggle("turned");
}

function pickCard(card) {
  memoryGame.pickedCards.push(card);
  if (memoryGame.pickedCards.length === 2) {
    if (!memoryGame.checkIfPair(memoryGame.pickedCards[0].getAttribute("name"), memoryGame.pickedCards[1].getAttribute("name"))) {
      memoryGame.pickedCards.splice(0, 2);
    }
  }


  if (memoryGame.isFinished()) {
    setTimeout(() => {

      window.location.reload()

    }, 500);
  }
  else {
    setTimeout(() => {
      putBack(memoryGame.pickedCards[0]);
      putBack(memoryGame.pickedCards[1]);
      memoryGame.pickedCards.splice(0, 2);
    }, 1000);

  }
}