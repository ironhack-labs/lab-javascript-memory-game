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

//HTML/CSS Interactions
window.addEventListener("load", event => {
  memoryGame.shuffleCards();
  let html = "";
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector("#memory-board").innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach(card => {

    card.addEventListener('click', () => {
      card.classList.add('turned');
      memoryGame.pickedCards.push(card);

      // Check is selected 2 cards
      if (memoryGame.pickedCards.length === 2) {

        // Check is a Pair
        if (memoryGame.checkIfPair(memoryGame.pickedCards[0].getAttribute('data-card-name'), memoryGame.pickedCards[1].getAttribute('data-card-name'))) {
          let turnedCards = document.querySelectorAll('.card.turned');
          turnedCards.forEach(turned => {
            turned.classList.add('front')
          })
        //Turned down Cards
        } else {
          let wrongCardA = memoryGame.pickedCards[0];
          let wrongCardB = memoryGame.pickedCards[1];
          setTimeout(function () {
            wrongCardA.classList.remove('turned');
            wrongCardB.classList.remove('turned');
          }, 900);
        }
        // Increment Counters
        memoryGame.pickedCards = [];
        document.getElementById('pairs-clicked').innerHTML = memoryGame.pairsClicked;
        document.getElementById('pairs-guessed').innerHTML = memoryGame.pairsGuessed;

        // Message if is Finished
        if (memoryGame.isFinished()) {
          alert("YOU WON!!!!");
        }
      };
    });
  });
});